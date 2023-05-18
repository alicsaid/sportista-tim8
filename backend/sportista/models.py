from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.


class Sport(models.Model):
    name = models.CharField(max_length=255)


class SportistaUser(models.Model):
    id_logina = models.ForeignKey("UserAccount", blank=True, related_name="users_loged_in_account", on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    gender = models.BooleanField()
    date_of_birth = models.DateField()
    plays_sports = models.ManyToManyField(Sport)
    favourite_fields = models.ManyToManyField("Field", blank=True, related_name="users_favourite_set")


class Renter(models.Model):
    id_logina = models.ForeignKey("UserAccount", blank=True, related_name="renterts_loged_in_account", on_delete=models.CASCADE)
    name = models.CharField(max_length=255, unique=True)
    phone_number = models.CharField(max_length=255)
    has_sports = models.ManyToManyField(Sport)


class UserAccountManager(BaseUserManager):
    def create_user(self, email, is_user, is_renter, password=None):
        if not email:
            raise ValueError("Users must have email address")
        email = self.normalize_email(email)
        user = self.model(email=email, is_user=is_user, is_renter=is_renter)
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, password=None):
        if not email:
            raise ValueError("Users must have email address")
        email = self.normalize_email(email)
        user = self.model(email=email, is_superuser=True, is_staff=True)
        user.set_password(password)
        user.save()

        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    city = models.CharField(max_length=255)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_user = models.BooleanField(default=False)
    is_renter = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["is_user", "is_renter"]

    def __str__(self):
        return self.email


class Team(models.Model):
    id_leader = models.ForeignKey(SportistaUser, on_delete=models.CASCADE, related_name="teams_leader_set")
    name = models.CharField(max_length=255, unique=True)
    users = models.ManyToManyField(SportistaUser, related_name="teams_users_set", blank=True)
    plays_sport = models.ForeignKey(Sport, on_delete=models.CASCADE, related_name="teams_sport_set")


class Field(models.Model):
    id_rentera = models.ForeignKey(Renter, on_delete=models.CASCADE)
    address = models.CharField(max_length=255)
    details = models.CharField(max_length=1000)
    image = models.ImageField(null=True)
    starts = models.TimeField()
    ends = models.TimeField()
    is_sport = models.ManyToManyField(Sport)
    grades = models.ManyToManyField(SportistaUser, through="UserGradesField", blank=True)
    has_teams = models.ManyToManyField(Team, through="TeamRentsField", blank=True)


class TeamRentsField(models.Model):
    id_teama = models.ForeignKey(Team, on_delete=models.CASCADE)
    id_fielda = models.ForeignKey(Field, on_delete=models.CASCADE)
    beginning = models.DateTimeField()
    ending = models.DateTimeField()


class UserGradesField(models.Model):
    id_usera = models.ForeignKey(SportistaUser, on_delete=models.CASCADE)
    id_fielda = models.ForeignKey(Field, on_delete=models.CASCADE)
    grade = models.IntegerField()
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.


class Sports(models.Model):
    name = models.CharField(max_length=255)


class Users(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    gender = models.BooleanField()
    date_of_birth = models.DateField()
    plays_sports = models.ManyToManyField(Sports)
    favourite_fields = models.ManyToManyField("Fields", blank=True, related_name="users_favourite_set")


class Renters(models.Model):
    name = models.CharField(max_length=255, unique=True)
    phone_number = models.CharField(max_length=255)
    has_sports = models.ManyToManyField(Sports)


class UserAccountManager(BaseUserManager):
    def create_user(self, email, city, password=None):
        if not email:
            raise ValueError("Users must have email address")
        if not city:
            raise ValueError("Users must specify city")
        email = self.normalize_email(email)
        user = self.model(email=email, city=city)
        user.set_password(password)
        user.save()

        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    city = models.CharField(max_length=255)
    id_usera = models.ForeignKey(Users, null=True, blank=True, related_name="authenticate_user_set_user", on_delete=models.CASCADE)
    id_rentera = models.ForeignKey(Renters, null=True, blank=True, related_name="authenticate_user_set_renter", on_delete=models.CASCADE)

    objects = UserAccountManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["city"]


class Teams(models.Model):
    id_leader = models.ForeignKey(Users, on_delete=models.CASCADE, related_name="teams_leader_set")
    name = models.CharField(max_length=255, unique=True)
    users = models.ManyToManyField(Users, related_name="teams_users_set", blank=True)
    plays_sport = models.ForeignKey(Sports, on_delete=models.CASCADE, related_name="teams_sport_set")


class Fields(models.Model):
    id_rentera = models.ForeignKey(Renters, on_delete=models.CASCADE)
    address = models.CharField(max_length=255)
    details = models.CharField(max_length=1000)
    image = models.ImageField(null=True)
    starts = models.TimeField()
    ends = models.TimeField()
    is_sport = models.ManyToManyField(Sports)
    grades = models.ManyToManyField(Users, through="UserGradesField", blank=True)
    has_teams = models.ManyToManyField(Teams, through="TeamRentsField", blank=True)


class TeamRentsField(models.Model):
    id_teama = models.ForeignKey(Teams, on_delete=models.CASCADE)
    id_fielda = models.ForeignKey(Fields, on_delete=models.CASCADE)
    beginning = models.DateTimeField()
    ending = models.DateTimeField()


class UserGradesField(models.Model):
    id_usera = models.ForeignKey(Users, on_delete=models.CASCADE)
    id_fielda = models.ForeignKey(Fields, on_delete=models.CASCADE)
    grade = models.IntegerField()
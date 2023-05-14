from django.db import models

# Create your models here.

class Sports(models.Model):
    name = models.CharField(max_length=255)


class Users(models.Model):
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    gender = models.BooleanField()
    date_of_birth = models.DateField()
    plays_sports = models.ManyToManyField(Sports)


class Renters(models.Model):
    name = models.CharField(max_length=255, unique=True)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    has_sport = models.ManyToManyField(Sports)


class Fields(models.Model):
    id_rentera = models.ForeignKey(Renters, on_delete=models.CASCADE)
    address = models.CharField(max_length=255)
    details = models.CharField(max_length=1000)
    image = models.ImageField()
    starts = models.TimeField()
    ends = models.TimeField()
    is_sport = models.ManyToManyField(Sports)


class Teams(models.Model):
    id_leader = models.ForeignKey(Users, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, unique=True)


class UserGradesField(models.Model):
    id_usera = models.ForeignKey(Users, on_delete=models.CASCADE)
    id_fielda = models.ForeignKey(Fields, on_delete=models.CASCADE)
    grade = models.IntegerField()
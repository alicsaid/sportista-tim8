from django.db import models

# Create your models here.

class Users(models.Model):
    user_Firstname = models.CharField(max_length=200)
    user_lastName = models.CharField(max_length=200)
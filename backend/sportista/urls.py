from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("getUsers/", views.getListaUsera, name="users"),
]
from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    #path("basketballFields/", views.getBasketballFields, name="basketballFields"),
    path("sport/<int:sport_id>/", views.getFields, name="getFields"),
    #path("getUsers/", views.getListaUsera, name="users"),
]
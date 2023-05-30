from django.urls import path, include

from sportista import views

urlpatterns = [
    path("", views.index, name="index"),
    path("admin/renters/getRenters/", views.getRenters, name="getRenters"),
    path("admin/renters/deleteRenter/<int:params>/", views.deleteRenter, name="deleteRenter"),
    path("admin/users/deleteUser/<int:params>/", views.deleteUser, name="deleteUser"),
    path("admin/users/getUsers/", views.getUsers, name="getUsers"),
    path("renter/spremi", views.spremi, name="spremi"),
    path("daj_sportove", views.dajSportove),
    path("sport/<int:params>/", views.getFields, name="getSport"),
    path("renter/my-fields/<int:params>/", views.getRenterFields, name="getRenterFields"),
    path("renter/delete/<int:params>/", views.deleteRenterField, name="deleteRenterField"),
]

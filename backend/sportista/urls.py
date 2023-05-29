from django.urls import path, include

from sportista import views

urlpatterns = [
    path("", views.index, name="index"),
    path("admin/renters/getRenters/", views.getRenters, name="getRenters"),
    path("admin/users/getUsers/", views.getUsers, name="getUsers"),
    path("renter/spremi", views.spremi, name="spremi"),
    path("daj_sportove", views.dajSportove),
    path("sport/<int:params>/", views.getFields, name="getSport"),
    path("renter/my-fields/<int:params>/", views.getRenterFields, name="getRenterFields"),
    path("renter/delete/<int:params>/", views.deleteRenterField, name="deleteRenterField"),
    path("renter/getData/<int:params>/", views.getRenterData, name="getRenterData"),
    path("renter/changeData/<int:params>/", views.changeRenterData, name="changeRenterData"),
    path("renter/editFieldData/<int:params>/", views.editFieldData, name="editFieldData"),
    path("renter/getFieldData/<int:params>/", views.getFieldData, name="getFieldData"),
    path("user/getData/<int:params>/", views.getUserData, name="getUserData"),
    path("user/changeData/<int:params>/", views.changeUserData, name="changeUserData"),
]

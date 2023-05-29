from django.urls import path, include

from sportista import views

urlpatterns = [
    path("", views.index, name="index"),
    path("renter/spremi", views.spremi, name="spremi"),
    path("daj_sportove", views.dajSportove),
    path("sport/<int:params>/", views.getFields, name="getSport"),
    path("renter/my-fields/<int:params>/", views.getRenterFields, name="getRenterFields"),
    path("user/dashboard", views.getUserFields, name="getUserFields"),
    path("renter/delete/<int:params>/", views.deleteRenterField, name="deleteRenterField"),
]

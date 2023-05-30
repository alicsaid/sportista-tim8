from django.urls import path, include

from sportista import views

urlpatterns = [
    path("", views.index, name="index"),
    path("test/", views.test, name="index"),
    path("renter/spremi", views.spremi, name="spremi"),
    path("daj_sportove", views.dajSportove),
    path("sport/<int:params>/", views.getFields, name="getSport"),
    path("renter/my-fields/<int:params>/", views.getRenterFields, name="getRenterFields"),
    path("renter/delete/<int:params>/", views.deleteRenterField, name="deleteRenterField"),
    path("renter/lock_field/<int:id_field>/<int:state>/", views.lock_field, name="lock_field")
]

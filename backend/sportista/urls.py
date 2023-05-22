from django.urls import path, include

from sportista import views

urlpatterns = [
    path("", views.index, name="index"),
<<<<<<< HEAD
    #path("basketballFields/", views.getBasketballFields, name="basketballFields"),
    path("sport/<int:sport_id>/", views.getFields, name="getFields"),
    #path("getUsers/", views.getListaUsera, name="users"),
]
=======
    path("daj", views.dodajuBazu, name="dodajuBazu"),

]
>>>>>>> bdc722cb032a9b5bde797015e959cd446171f473

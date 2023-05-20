from django.urls import path, include

from sportista import views

urlpatterns = [
    path("", views.index, name="index"),

]

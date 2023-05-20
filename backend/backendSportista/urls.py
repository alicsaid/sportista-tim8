from django.contrib import admin
from django.urls import path, include
from . import authentification


urlpatterns = [
    path("", include('sportista.urls')),
    path("password/reset/confirm/<str:uid>/<str:token>", authentification.reset_password_confirm),
    path("activate/<str:uid>/<str:token>", authentification.activate_account),
    path("admin/", admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
]

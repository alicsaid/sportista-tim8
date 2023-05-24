from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.shortcuts import redirect
from rest_framework.utils import json

from sportista.models import Field, Sport


def reset_password_confirm(request, uid, token):
    return redirect('http://localhost:3000/password/reset/confirm/' + uid + "/" + token)


def activate_account(request, uid, token):
    return redirect('http://localhost:3000/activate/' + uid + "/" + token)


@api_view(['POST'])
def add_renter(request):
    data = request.data
    print(data)
    return HttpResponse()
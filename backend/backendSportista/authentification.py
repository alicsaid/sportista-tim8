from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.shortcuts import redirect
from rest_framework.utils import json
from django.core.serializers.json import DjangoJSONEncoder
from django.shortcuts import get_object_or_404
import json

from urllib.parse import unquote

from sportista.models import Field, Sport, Renter, UserAccount, SportistaUser


def reset_password_confirm(request, uid, token):
    return redirect('http://localhost:3000/password/reset/confirm/' + uid + "/" + token)


def activate_account(request, uid, token):
    return redirect('http://localhost:3000/activate/' + uid + "/" + token)


@api_view(['POST'])
def add_renter(request):
    data = request.data
    account = UserAccount.objects.get(id=data['id'])
    r = Renter(name=unquote(data['name']), id_logina=account, phone_number=data['phone'])
    r.save()
    return HttpResponse()


@api_view(['POST'])
def add_user(request):
    data = request.data
    account = UserAccount.objects.get(id=data['id'])
    u = ""
    if data['gender'] == 'Male':
        u = SportistaUser(first_name=unquote(data['first_name']), last_name=unquote(data['last_name']), id_logina=account,gender=True, date_of_birth=data['date_of_birth'])
    else:
        u = SportistaUser(first_name=unquote(data['first_name']), last_name=unquote(data['last_name']),id_logina=account, gender=False, date_of_birth=data['date_of_birth'])
    u.save()

    return HttpResponse()


@api_view(['GET'])
def get_renter(request, id):
    renters = list(Renter.objects.filter(id_logina=id).values())
    res = json.dumps(renters[0])
    return HttpResponse(res, content_type="text/json-comment-filtered")

@api_view(['GET'])
def get_user(request, id):
    sportista_users = list(SportistaUser.objects.filter(id_logina=id).values())
    res = json.dumps(sportista_users[0], cls=DjangoJSONEncoder)
    return HttpResponse(res, content_type="text/json-comment-filtered")
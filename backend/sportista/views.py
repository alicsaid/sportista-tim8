from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.utils import json
from django.shortcuts import redirect

from sportista.models import Field, Sport, UserAccount, SportistaUser, Renter


#from sportista.models import Users


# Create your views here.

def index(request):
    return HttpResponse("To je backend Sporiste hehe")

@api_view(['GET'])
def dajSportove(request):
    lista_sportova = Sport.objects.all()
    res = serializers.serialize('json', lista_sportova)
    return HttpResponse(res, content_type="text/json-comment-filtered")

# @api_view(['GET'])
# def getListaUsera(request):
#    list_of_users = Field.objects.filter(is_sport=1)
#    res = serializers.serialize('json', list_of_users)
#
#    return HttpResponse(res, content_type="text/json-comment-filtered")

@api_view(['GET'])
def getFields(request, params):
    list_of_fields = Field.objects.filter(is_sport=params)
    res = serializers.serialize('json', list_of_fields)

    return HttpResponse(res, content_type="text/json-comment-filtered")

@api_view(['GET'])
def getRenterFields(request, params):
    list_of_fields = Field.objects.filter(id_rentera_id=params)
    res = serializers.serialize('json', list_of_fields)

    return HttpResponse(res, content_type="text/json-comment-filtered")

@api_view(['DELETE'])
def deleteRenterField(request, params):
    Field.objects.filter(id=params).delete()
    return HttpResponse("Ok")



@api_view(['POST'])
def spremi(request):
    print(request.data.get("img"))
    objekat = Field(id_rentera_id=request.data.get("user"), name=request.data.get("name"),address=request.data.get("location"),details=request.data.get("description"),image=request.data.get("img"),starts="1:1",ends="1:1",is_sport_id=request.data.get("sport"))
    objekat.save()
    return HttpResponse("okej")


@api_view(['GET'])
def getRenters(request):
    list_of_renters2 = UserAccount.objects.filter(is_renter=1)
    novi_renteri = []
    i = 0
    for user in list_of_renters2:
        odgovarajuci_renter = Renter.objects.filter(id_logina=user.id)
        temp = {"id": user.id, "name": odgovarajuci_renter[0].name, "phone": odgovarajuci_renter[0].phone_number,
                "email": list_of_renters2[i].email, "city": list_of_renters2[i].city}
        i = i+1
        novi_renteri.append(temp)
    print(novi_renteri)

    res = json.dumps(novi_renteri)

    return HttpResponse(res, content_type="text/json-comment-filtered")


@api_view(['GET'])
def getUsers(request):
    list_of_users2 = UserAccount.objects.filter(is_user=1)
    novi_useri = []
    i = 0
    for user in list_of_users2:
        odgovarajuci_user = SportistaUser.objects.filter(id_logina=user.id)
        temp = {"id": user.id, "firstName": odgovarajuci_user[0].first_name, "lastName": odgovarajuci_user[0].last_name,
                "gender": odgovarajuci_user[0].gender,
                "email": list_of_users2[i].email, "city": list_of_users2[i].city}
        i = i+1
        novi_useri.append(temp)
    print('useri: ')
    print(novi_useri)

    res = json.dumps(novi_useri)

    return HttpResponse(res, content_type="text/json-comment-filtered")

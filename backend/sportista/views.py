from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.shortcuts import redirect

from sportista.models import Field, Sport, Renter, UserAccount, SportistaUser


#from sportista.models import Users


# Create your views here.

def index(request):
    return HttpResponse("To je backend Sporiste hehe")

@api_view(['GET'])
def dajSportove(request):
    lista_sportova = Sport.objects.all()
    res = serializers.serialize('json', lista_sportova)
    return HttpResponse(res, content_type="text/json-comment-filtered")

@api_view(['GET'])
def getFields(request, params):
    list_of_fields = Field.objects.filter(is_sport=params)
    res = serializers.serialize('json', list_of_fields)

    return HttpResponse(res, content_type="text/json-comment-filtered")

@api_view(['GET'])
def getRenterData(request, params):
    data1 = Renter.objects.filter(id_logina_id=params)
    data2 = UserAccount.objects.filter(id=params)

    data = list(data1) + list(data2)
    res = serializers.serialize('json', data)

    return HttpResponse(res, content_type="text/json-comment-filtered")

@api_view(['GET'])
def getRenterFields(request, params):
    list_of_fields = Field.objects.filter(id_rentera_id=params)
    res = serializers.serialize('json', list_of_fields)

    return HttpResponse(res, content_type="text/json-comment-filtered")

@api_view(['POST'])
def changeRenterData(request, params):
    r = Renter.objects.get(id_logina_id=params)
    r.name = request.data.get("name")
    r.phone_number = request.data.get("phone_number")
    u = UserAccount.objects.get(id=params)
    u.city = request.data.get("city")
    u.email = request.data.get("email")
    r.save()
    u.save()

    return HttpResponse("ok")


@api_view(['GET'])
def getUserData(request, params):
    data1 = SportistaUser.objects.filter(id_logina_id=params)
    data2 = UserAccount.objects.filter(id=params)

    data = list(data1) + list(data2)
    res = serializers.serialize('json', data)

    return HttpResponse(res, content_type="text/json-comment-filtered")

@api_view(['GET'])
def getFieldData(request, params):
    data = Field.objects.filter(id=params)

    res = serializers.serialize('json', data)

    return HttpResponse(res, content_type="text/json-comment-filtered")


@api_view(['POST'])
def changeUserData(request, params):
    su = SportistaUser.objects.get(id_logina_id=params)
    su.first_name = request.data.get("first_name")
    su.last_name = request.data.get("last_name")
    u = UserAccount.objects.get(id=params)
    u.city = request.data.get("city")
    u.email = request.data.get("email")
    su.save()
    u.save()

    return HttpResponse("ok")

@api_view(['POST'])
def editFieldData(request, params):
    f = Field.objects.get(id=params)
    f.name = request.data.get("name")
    f.is_sport_id = request.data.get("sport")
    f.address = request.data.get("location")
    f.details = request.data.get("description")
    f.price = request.data.get("price")
    if(request.data.get("img")):
        f.image = request.data.get("img")

    f.save()

    return HttpResponse("ok")


@api_view(['DELETE'])
def deleteRenterField(request, params):
    Field.objects.filter(id=params).delete()
    return HttpResponse("Ok")



@api_view(['POST'])
def spremi(request):
    objekat = Field(id_rentera_id=request.data.get("user"), name=request.data.get("name"),address=request.data.get("location"),details=request.data.get("description"),image=request.data.get("img"),starts="1:1",ends="1:1",is_sport_id=request.data.get("sport"))
    objekat.save()
    return HttpResponse("okej")
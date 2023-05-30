from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.shortcuts import redirect

from sportista.models import Field, Sport

from sportista.recomendation import train, create_user_field_model

#from sportista.models import Users


# Create your views here.


def test(request):
    train()
    create_user_field_model()
    return HttpResponse("To je backend Sporiste hehe")


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
    objekat = Field(id_rentera_id=request.data.get("user"), name=request.data.get("name"),address=request.data.get("location"),details=request.data.get("description"),starts="1:1",ends="1:1",is_sport_id=request.data.get("sport"))
    objekat.save()
    lista = objekat.get_my_images()
    for image in request.data.get("img"):
        lista.append(image)
    objekat.set_my_images(lista)
    objekat.save()
    return HttpResponse("okej") 


@api_view(['POST'])
def lock_field(request, id_field, state):
    if state == 0:
        Field.objects.filter(pk=id_field).update(lock=False)
    else:
        Field.objects.filter(pk=id_field).update(lock=True)
    return HttpResponse("okej")
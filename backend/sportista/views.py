from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from django.shortcuts import redirect

from sportista.models import Field


from sportista.models import Fields, Sports


#from sportista.models import Users


# Create your views here.

def index(request):
    return HttpResponse("To je backend Sporiste hehe")


<<<<<<< HEAD
   # return HttpResponse(res, content_type="text/json-comment-filtered")

# @api_view(['GET'])
# def getFields(request, sport_id):
#     list_of_fields_id = Fields.objects.all(sports_id=sport_id)  # Filter by sports_id
#     list_of_fields = []
#
#     for i in list_of_fields_id:
#         list_of_fields.append(Fields.objects.all(id=i))
#
#     res = serializers.serialize('json', list_of_fields)
#
#     return HttpResponse(res, content_type="text/json-comment-filtered")

# @api_view(['GET'])
# def getBasketballFields(request):
#     list_of_basketball_fields = Fields_is_sport.objects.filter(sports_id=1)  # Filter by sports_id
#     res = serializers.serialize('json', list_of_basketball_fields)
#
#     return HttpResponse(res, content_type="text/json-comment-filtered")
=======



@api_view(['GET'])
def getListaUsera(request):
   list_of_users = Field.objects.filter(is_sport = 1)
   res = serializers.serialize('json', list_of_users)

   return HttpResponse(res, content_type="text/json-comment-filtered")

@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def dodajuBazu(request):
    print("ok")
    return HttpResponse("ovdje je okej")

>>>>>>> bdc722cb032a9b5bde797015e959cd446171f473

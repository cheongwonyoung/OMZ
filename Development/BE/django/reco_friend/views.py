from django.shortcuts import render
from drf_yasg.utils import swagger_auto_schema
from django.http import HttpResponse
from django.conf import settings
import pandas as pd
import re
from rest_framework.views import APIView 
from rest_framework.decorators import api_view #api
from . import friend_similarity
from drf_yasg import openapi

# Create your views here.

def recommendation(request):
    memberId = request.GET.get('memberId')
    total_array = friend_similarity.friend_recom(memberId)
    

    return HttpResponse(total_array)
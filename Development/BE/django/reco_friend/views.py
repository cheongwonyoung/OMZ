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

@swagger_auto_schema(
    method='get',
    operation_summary='친구 3명 추천',
    operation_description='특징 분석 후 3명 반환함',
    
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties={
            'memberId':openapi.Schema(type=openapi.TYPE_STRING,description='memberId')
        }
    ),
    tags=['음악 추천'],
)
@api_view(['GET'])
def recommendation(request):
    total_array = friend_similarity.friend_recom(request.GET.get('memberId'))

    return total_array
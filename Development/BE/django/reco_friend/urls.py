from django.urls import path, include
from . import views

app_name = 'reco_friend'

urlpatterns = [
    # path('', views.reco_friend, name='reco_friend'),
    path('', views.recommendation, name='recommendation'),
]

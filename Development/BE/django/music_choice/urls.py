from django.urls import path, include
from . import views

app_name = 'music_choice'

urlpatterns = [
    path('', views.music_choice, name='music_choice'),
    path('recommendation/', views.recommendation, name='recommendation'),
]

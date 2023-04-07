from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
import pandas as pd
import re
from rest_framework.views import APIView 
from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import api_view #api
from drf_yasg import openapi
from . import music_similarity
from . import predict_sentiment_func

# Create your views here.

# class SearchView(APIView):

@swagger_auto_schema(
    method='get',
    operation_summary='bgm 추천 버튼 눌렀을 때 뜨는 노래 8곡 추출',
    operation_description='감정별로 노래 8곡 추출해서 반환함',
    tags=['음악 추천'],
)
@api_view(['GET'])
def music_choice(request):
    happiness = pd.read_csv("./data/happiness.csv", encoding='utf-8', lineterminator='\n')
    anger = pd.read_csv("./data/anger.csv", encoding='utf-8', lineterminator='\n')
    sadness = pd.read_csv("./data/sadness.csv", encoding='utf-8', lineterminator='\n')
    surprise = pd.read_csv("./data/surprise.csv", encoding='utf-8', lineterminator='\n')

    happiness = happiness[['Genre', 'Title','Artist']]
    anger = anger[['Genre', 'Title','Artist']]
    sadness = sadness[['Genre', 'Title','Artist']]
    surprise = surprise[['Genre', 'Title','Artist']]

    #비복원 추출
    hap_2 = happiness.sample(n=2, replace=False)
    ang_2 = anger.sample(n=2, replace=False)
    sad_2 = sadness.sample(n=2, replace=False)
    sur_2 = surprise.sample(n=2, replace=False)

    #랜덤추출한 곡 담은 DataFrame
    random_songs_df = pd.concat([hap_2,ang_2,sad_2,sur_2])

    # 출력 DataFrame -> json 형식으로 변경
    df_to_json = random_songs_df.to_json(force_ascii=False, orient='records', indent=4)

    return HttpResponse(df_to_json)
@swagger_auto_schema(
    method='post',
    operation_summary='노래 추천 5곡',
    operation_description='상태메세지 + 선택한 오늘 듣고 싶은 노래 결과로 노래 추천 5곡 결과 반환',
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties={
            'message':openapi.Schema(type=openapi.TYPE_STRING,description='상태메세지'),
            'songs':openapi.Schema(type=openapi.TYPE_ARRAY, items=openapi.Items(type=openapi.TYPE_STRING), description='사용자가 고른 노래의 제목'),
        }
    ),
    tags=['음악 추천'],
)
@api_view(['POST'])
def recommendation(request):
    # 사용자가 오늘 듣고 싶다고 선택한 노래
    print("!!!")
    print(request.data)
    print(request.data.get('data'))
    data = request.data.get('data')
    print(data.get('message'))
    print(data.get('songs'))
    seed_song = data.get('songs')
    # print(seed_song)
    # 사용자가 노래 선택 안 했을 때 랜덤 추천
    if seed_song == []:
        random_df = music_similarity.random_recom()
        refine_data = random_df[['Genre', 'Title','Artist']]
        df_to_json = refine_data.to_json(force_ascii=False, orient='records', indent=4)
        print("랜덤")
        return HttpResponse(df_to_json)
    
    # 듣고 싶은 노래 선택하면 상메 감정 + 노래 선택으로 추천
    # 1. 상태메세지 감정 분석
    target_sentence = data.get('message')
    user_input = str(target_sentence)
    # 문장 분리
    input_list = user_input.split(".")

    #정제된 문장들 담을 빈 리스트
    processed_input = []
    for sentence in input_list:
        output_string = re.sub(r'[^\w\s]', '', sentence)
        processed_input.append(output_string)

    tokenizer = settings.TOKENIZER_KOBERT
    model = settings.MODEL_KOBERT

    total_array = predict_sentiment_func.predict_sentiment_user(processed_input, tokenizer, model)
    # 2. 곡  추천

    song_recom = music_similarity.find_simi_song(seed_song,6)
    emotion_recom = music_similarity.user_song_simi(song_recom,total_array)

    refine_data = emotion_recom[['Genre', 'Title','Artist']]
    df_to_json = refine_data.to_json(force_ascii=False, orient='records', indent=4)

    return HttpResponse(df_to_json)

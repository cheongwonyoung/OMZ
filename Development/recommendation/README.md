# 1. 감정 분석

## KoBERT_6_labels_del_neu
- 중립을 제거한 6가지 감정 사용
- accuracy 0.58

## KoBERT_4_labels
- '공포 + 놀람' 병합
- '분노 + 혐오' 병합
- 중립을 제거하고 총 4가지 감정 사용
- accuracy 0.72

## emotion_base_recommendation
- 노래간의 유사도를 구하기 위한 파일 생성
- 감정별 가장 많이 분포되어 있는 장르 확인
- 장르 유사도에 0.3의 가중치 & 가사 유사도에 1의 가중치를 두어 곡별 유사도 계산

# 2. 노래 크롤링 & 감정 태깅

## Lyrics_01_scrapingMelon
- 각 장르별 500곡씩 크롤링
- 가사가 없는 곡은 직접 가사를 추가해줌

## Lyrics_02_lyricsPreprocess
- 크롤링한 가사에 포함된 ```<div>``` tag와 같은 html tag 제거
- 원본의 ```</br>``` tag를 기준으로 문장을 분리해 리스트로 저장

## Lyrics_03_sentimentTagging
- 전체 곡을 250~500곡씩 나누어 감정 학습을 진행함
- 가사에 나누어둔 문장 단위로 감정을 분석해 전체 가사의 감정을 알아냄

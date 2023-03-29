# 도커에 설치될 python 버전
FROM python:3.9
RUN python -V

FROM continuumio/miniconda3
RUN conda install tensorflow

RUN pip install --upgrade pip
# 필요한 모듈 설치
RUN pip3 install django

# 컨테이너 내 프로젝트 root directory 설정
# /usr/src/app 디렉토리 생성
WORKDIR /usr/src/app


# 현재 폴더 내용을 복사
COPY . .


#manage.py를 실행할 수 있는 디렉토리로 이동
WORKDIR .

RUN pip install -r requirements.txt

# django를 가동시켜주는 코드
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8080"]

EXPOSE 8080

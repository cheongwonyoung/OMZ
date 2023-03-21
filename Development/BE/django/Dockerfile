FROM python:3.10.9

# 필요한 모듈 설치
RUN pip3 install django

# 컨테이너 내 프로젝트 root directory 설정
WORKDIR /usr/src/app

# 프로젝트 코드 복사
COPY . .

WORKDIR ./django

# 포트 설정
EXPOSE 8000

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]

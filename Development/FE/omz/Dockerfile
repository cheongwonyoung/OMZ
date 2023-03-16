# node.js로 빌드 ( base로 사용할 Image name )
FROM node:18.15.0 as build-stage

# 작업 위치 지정
WORKDIR /app

# ADD <복사할 파일 경로> <이미지에서 파일이 위치할 경로>
ADD . .

# 의존성 설치
RUN npm install

# 빌드 시작 (-> dist 폴더 생성됨??)
RUN npm run build

# nginx로 실행
FROM nginx:stable-alpine as production-stage

# 컨테이너가 리스닝할 포트
EXPOSE 5173

# nginx.conf를 default.conf로 복사
COPY  ./nginx/nginx.conf /etc/nginx/conf.d/default.conf 

# 빌더로부터 '/app/dist'를 /usr/share/nginx/html로 복사해온다
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 컨테이너를 실행할 때 실행할 커맨드
# CMD : 해당 이미지로 컨테이너 실행 시, 실행 명령어를 설정하지 않았을 때만 이 명령어 실행
CMD ["nginx", "-g", "daemon off;"]
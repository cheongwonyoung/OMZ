# node.js로 빌드 ( base로 사용할 Image name )
FROM node:18.15.0 as builder

# 작업 폴더를 만들고 npm 설치
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install  --force

COPY . /usr/src/app
RUN npm run dev
FROM nginx:latest

RUN rm -rf /etc/nginx/conf.d
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# 80포트 오픈하고 nginx 실행
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



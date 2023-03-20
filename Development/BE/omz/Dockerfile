# openjdk11로 실행
FROM openjdk:11-jdk

# 해당 경로의 모든 jar파일을 변수로 담기
ARG JAR_FILE=./build/libs/*.jar

# 빌드된 jar파일을 api.jar파일 이라는 이름으로 생성
COPY ${JAR_FILE} app.jar

# 컨테이너가 리스닝할 포트
EXPOSE 8080

# 환경 변수 설정
ENV TZ=Asia/Seoul

# 컨테이너를 실행할 때 실행할 커맨드
ENTRYPOINT ["java","-jar","app.jar"]

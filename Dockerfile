FROM ubuntu:latest

WORKDIR /usr/app/Traffic_AI/server/
COPY . ./server/

EXPOSE 8080
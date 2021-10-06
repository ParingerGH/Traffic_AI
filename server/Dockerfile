FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY . /usr/share/nginx/html

RUN apk add --no-cache --upgrade bash
RUN apk add iputils

RUN apk add --update npm
RUN npm install require
RUN npm install downloadjs

EXPOSE 80
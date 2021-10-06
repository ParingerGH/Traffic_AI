FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY . /usr/share/nginx/html

RUN apk add --no-cache --upgrade bash
RUN apk add iputils

EXPOSE 80
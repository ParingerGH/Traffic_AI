FROM tensorflow/tensorflow:latest

WORKDIR /server
COPY . /server

RUN pip install --no-cache-dir -r requirements.txt

# WSL support
RUN apt-get install dos2unix
RUN dos2unix script.sh
RUN dos2unix test_script.sh

ENV APP_PATH_HOST=${APP_PATH_HOST}

EXPOSE 9090

CMD [ "bash","script.sh" ]
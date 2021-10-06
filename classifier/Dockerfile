FROM tensorflow/tensorflow:latest

WORKDIR /classifier
COPY . /classifier
RUN pip install --no-cache-dir -r requirements.txt

# WSL support
RUN apt-get install dos2unix
RUN dos2unix script.sh
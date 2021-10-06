FROM tensorflow/tensorflow:latest

WORKDIR /classifier
COPY . /classifier
<<<<<<< Updated upstream
RUN pip install --no-cache-dir -r requirements.txt

# WSL support
=======

RUN pip install --no-cache-dir -r requirements.txt
>>>>>>> Stashed changes
RUN apt-get install dos2unix
RUN dos2unix script.sh
FROM tensorflow/tensorflow:latest

WORKDIR /classifier
COPY . /classifier
RUN pip install --no-cache-dir -r requirements.txt

# uncomment to use wiout "-it" 
#CMD [ "bash", "script.sh" ]
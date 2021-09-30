FROM tensorflow/tensorflow:latest

WORKDIR /classifier
COPY . /classifier
RUN pip install pillow

CMD [ "python","classifier.py" ]
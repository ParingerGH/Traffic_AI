FROM tensorflow/tensorflow:latest

WORKDIR /classifier
COPY . /classifier
RUN pip install pillow

ENTRYPOINT ["python","classifier.py" ]
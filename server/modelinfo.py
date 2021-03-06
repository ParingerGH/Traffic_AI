import numpy as np

from keras.models import Sequential
from keras.layers import Conv2D, MaxPool2D, Flatten, Dropout, Dense

classes = ['8.8', '4.2.3', '8.2.2', '2.1', '3.2', '5.16', '1.23', 'скорость', '8.2.3', '5.6', '2.5', '5.15.3', '5.19.2', '8.2.1', '5.19.1', '5.15.4', '8.17', '6.4', '3.1', '5.15.2', '2.4', '8.6.1', '8.4.3', '5.14', '4.2.1', '4.1.4', '6.16', '5.15.1', '5.17', '4.2.2', '4.1.2', '6.6.1', '8.3.1', '6.3.1', '8.22.1', '5.3', '5.20', '8.4.1', '4.1.1', '3.28', '8.6.5', '1.17', '8.22.2', '3.27', '5.15.5', '5.21', '8.14', '5.5', '1.25', '8.2.4', '3.4', '8.22.3', 'высота', '1.15', 'Ж', 'Б', '8.24', '3.10', '1.34.1', '1.34.2', '1.20.3', '1.20.2']
classes.sort()

classes_length = len(classes)

def load_model():
  model = Sequential()

  model.add(Conv2D(filters=32, kernel_size=(5, 5), activation='relu', input_shape=(30, 30, 3)))
  model.add(Conv2D(filters=32, kernel_size=(5, 5), activation='relu'))
  model.add(MaxPool2D(pool_size=(2, 2)))
  model.add(Dropout(rate=0.25))

  model.add(Conv2D(filters=64, kernel_size=(3, 3), activation='relu'))
  model.add(Conv2D(filters=64, kernel_size=(3, 3), activation='relu'))
  model.add(MaxPool2D(pool_size=(2, 2)))
  model.add(Dropout(rate=0.25))

  model.add(Flatten())

  model.add(Dense(256, activation='relu'))
  model.add(Dropout(rate=0.5))

  model.add(Dense(classes_length, activation='softmax'))

  return model

model = load_model()
model.summary()
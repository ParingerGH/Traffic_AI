from django.shortcuts import render
from . import socket_connetion
import socket


def index(request):

    connection = socket_connetion.SingletonConnection()

    return render(request,'index.html')

def classify(request):
    
    connection = socket_connetion.SingletonConnection()
    connection.sock.send(b'???')
    print('Request classif')

    return render(request,'index.html')
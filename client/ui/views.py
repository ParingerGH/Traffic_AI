from django.shortcuts import render
from . import socket_connetion
import socket


def test(request):

    ##connection = socket_connetion.SingletonConnection()

    return render(request,'index.html')

def classify(request):
    
    ##connection = socket_connetion.SingletonConnection()

    testsock = socket.socket()
    testsock.connect(('172.17.0.1', 9090))

    testsock.send(b'???')

    ##connection.sock.send(b'???')

    print('---CLASSIFICATION----')

    return render(request,'index.html')
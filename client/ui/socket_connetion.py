import socket

def singleton(cls):
    instances = {}
    def getinstance():
        if cls not in instances:
            instances[cls] = cls()
        return instances[cls]
    return getinstance

@singleton
class SingletonConnection():

    sock = {}

    def __init__(self):
        self.sock = socket.socket()
        self.sock.connect(('172.17.0.1', 9090))
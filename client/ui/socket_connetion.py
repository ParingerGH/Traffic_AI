import socket

class SingletonConnection(object):

    sock = socket.socket()

    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(SingletonConnection, cls).__new__(cls)
            sock = socket.socket()
            sock.connect(('172.17.0.1', 9090))
        return cls.instance
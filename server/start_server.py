import socket

sock = socket.socket()
sock.bind(('', 9090))
sock.listen(1)
conn, addr = sock.accept()

print('connected:', addr)

while True:
    data = conn.recv(1024)
    if data:
        print(data)
        '''

        if data == b'1':
            print('call fun 1')
        if data == b'2':
            print('call fun 2')
        if data == b'3':
            print('call fun 3')
        '''
    

conn.close()
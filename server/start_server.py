import socket
import subprocess


print('SERVER STARTED')


sock = socket.socket()
sock.bind(('', 9090))
sock.listen(1)
conn, addr = sock.accept()

print('CONNECTED:', addr)

while True:
    data = conn.recv(1024)
    if data:
        print(data)
        
        if data == b'???':
            subprocess.run(["bash","test_script.sh"])
       
    

conn.close()
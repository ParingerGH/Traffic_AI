import socket
import subprocess


print('SERVER STARTED')


sock = socket.socket()
sock.bind(('', 9090))
sock.listen(1)
conn, addr = sock.accept()

while True:
    data = conn.recv(1024)
    if data:
        
        if data == b'???':
            subprocess.run(["bash","test_script.sh"])
       
    

conn.close()
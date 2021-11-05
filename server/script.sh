#!/bin/bash

touch applicationdata/model.txt
# touch applicationdata/out.txt

# python classifier.py "1" > applicationdata/out.txt
python modelinfo.py > applicationdata/model.txt

# touch Hostdata/generated_by_script.txt
# echo I was gebereted by script inside container wich was created by docker-compose >> Hostdata/generated_by_script.txt
# echo volume was attached by using .env file >> Hostdata/generated_by_script.txt

python start_server.py
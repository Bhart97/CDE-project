#!/bin/bash

# installation of AWS CLI onto CentOS
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

yum install mariadb -y

# to connect to database
# mysql -h <db>.<region>.rds.amazonaws.com -P 3306 -u <master> -p
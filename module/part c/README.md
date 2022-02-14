## Module C: Objectives

## Setup
```
db EC2 instance, access to s3 and db
AWS RDS
```

Policies

## Connecting to RDS
- Connect to the EC2 instance running MySQL or create one
```
mysql -h practice-db-erict98.cyiqr4kslqic.us-east-1.rds.amazonaws.com -P 3306 -u admin -p
```
Requires properly configured security group (access to port 3306 on the db), permission for RDS to connect with s3

Use lambda function to read data from s3 bucket and update the db
make sure csv is formatted properly

connection ec2 ->
```
curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
sudo yum install nodejs
npm install express
npm install mysql
```
install node.js, npm install express, mysql

// authenticate the website
// take snapshot and save as AMI and export database
// give website over


runtime
part a: ~1 hour
part b (basic) ~1 hour
part b (intermediate) ~2 hour


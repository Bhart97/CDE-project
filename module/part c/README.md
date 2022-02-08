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
mysql -h <endpoint> -P 3306 -u <mymasteruser> -p
```
Requires properly configured security group (access to port 3306 on the db), permission for RDS to connect with s3

Use lambda function to read data from s3 bucket and update the db
make sure csv is formatted properly
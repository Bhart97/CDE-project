import os
import sys
import pandas
import boto3
import mysql.connector

"""
Generating an IAM authentication token
"""
ENDPOINT=''
PORT=''
USR=''
REGION=''
DBNAME=''
os.environ['LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN'] = '1'

# gets the credentials from .aws/certificate
session = boto3.Session(profile_name='RDSCreds')
client = session.client('rds')


token = client.generate_db_auth_token(DBHostname=ENDPOINT, Port=PORT, DBUsername=USR, Region=REGION)  

"""
Connecting to DB instance
"""
try:
    conn = conn =  mysql.connector.connect(host=ENDPOINT, user=USR, passwd=token, port=PORT, database=DBNAME, ssl_ca='[full path]rds-combined-ca-bundle.pem')
    cur = conn.cursor()                 # cursor object that assits with executing SQL queries
    cur.execute("""SELECT now()""")
    query_results = cur.fetchall()
    print(query_results)
except Exception as e:
    print("Database connection failed due to {}".format(e))

"""
Examples
"""

query = "SELECT * FROM table"
query_results = cur.fetchall();


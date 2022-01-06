import os
import sys
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
Create a connection to the base
"""
try:
    conn = mysql.connector.connect(host=ENDPOINT, 
                                user=USR, 
                                passwd=token,
                                 port=PORT, 
                                 database=DBNAME, 
                                 ssl_ca='[full path]rds-combined-ca-bundle.pem')
    cur = conn.cursor()
    cur.execute("""SELECT now()""")
    results = cur.fetchall()
    print(results)
except Exception as e:
    print("Database connection failed due to {}".format(e))

"""
Example:
Store the SQL statement into the query and execute the code with the cursor object
Store the results from the cursor into results

Note:
SQL injections are common way for hackers to have unauthorized access to the database.
Best practice dictates using safe query parameters instead of allowing the end-user to enter any SQL statement.
"""
query = "SELECT * FROM table"
cur.execute(query)
results = cur.fetchall()
print(results)


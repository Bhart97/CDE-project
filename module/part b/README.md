## Working on the Cloud

**1. Running on a EC2 Instance**

Now you will run your Python script on AWS. Create a EC2 instance (running on Linux) and connect via SSH. Using the previous steps, create another private SSH key and associate the EC2 instance with your GitHub. This time you will make a clone of your main branch onto the instance:
```
git clone git@github.com:<username>/CDE-project.git
```
Run your Python script again and see if it outputs anything.

**2. Creating a NoSQL Database**
After creating Amazon RDS, connect your EC2 instance with the RDS and show that you can successfully connect and make a query

**3. Configuring VPC and Subnets**
Make multiple subnets
One that is within the same subnet and has local access
One that is within the same subnet but not in the security group
One that is not within the same subnet but given access via security group

**4. IAM and Access Control**

**5. Serverless Functions**
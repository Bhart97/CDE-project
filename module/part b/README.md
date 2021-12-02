## Module B: Objectives

- Create a EC2 instance and successfully host different applications.
- Upload data to a bucket storage and into a MySQL databa.se.
- Manage the security groups and access control
- Make changes to the VPC and block/allow traffic.
- Allow for elasticity via load-balancers and auto-scaling

## Working on the Cloud

**1. Running on a EC2 Instance**

TODO: Work under one account and give everyone administrative access?

Now you will run your Python script on AWS. Create a EC2 instance (running on Linux) and connect via SSH. Using the previous steps, create another private SSH key and associate the EC2 instance with your GitHub. This time you will make a clone of your main branch onto the instance:
```
git clone git@github.com:<username>/CDE-project.git
```
Run your Python script again and see if it outputs anything.

**NOTE:**
- Why virtual environments? When using non-standard libraries, you can only have a single version of that library which can lead to conflicts for programs that are depended a specific version. Virtual environments solve this problem by creating an isolated environment that allows you to maintain your dependencies without affecting your other projects. Virtual environments act similar to containers as they are ideal for creating portability and isolation by only installing those libraries for that environment only.
- Virtual environments must be activated each but can be configured in the settings to activate automatically.

**2. Security and Access Control**
TODO: Collaborate with team mates to control who has access to which EC2 instance and their program.

**3. Creating a NoSQL Database**
Create a bucket and upload the cohort data and then using an Amazon RDS instance to create a MySQL database.

After creating Amazon RDS, connect your EC2 instance with the RDS and show that you can successfully connect and make a query.

**4. Configuring VPC and Subnets**
Make multiple subnets
One that is within the same subnet and has local access
One that is within the same subnet but not in the security group
One that is not within the same subnet but given access via security group
Control incoming and outgoing traffic

**5. Load Balancing and Auto-Scaling Features**

**6. Cost Analysis**
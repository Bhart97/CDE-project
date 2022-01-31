## Module B: Objectives

- Create and connect to computer instances.
- Upload and download with Object storage.
- Host a web server and implement a load balancer. 

## Setup
```
- AWS IAM account
- Access to OCP private cloud
```

Policies:
- Groups are given permission to R/W EC2 and S3 resources and READ-only VPC resources.
- Groups are given permssion to use CloudFormation

Roles:
- EC2 instances are given permission to use the AWS CLI.
- EC2 instances are given permission to communicate with S3 services.

## Working on the Cloud

In this module, you will be working within the OCP private cloud network on ```Amazon Web Services``` and provision resources so that the previously created HTML page can be accessed from an internal web server. Students may encounter unexpected problems and will require communicating with their team members in order to resolve them.

There are two tracks available: the basic and intermediate track. The basic track serves as an introductory lesson for beginners or as reminder about cloud concepts. The intermediate track is a better representation for entry-level cloud practitioners that will introduce new concepts and challenges designed to help you become more prepared.

## Working on the Cloud: Console
**1. Creating and Configuring a Compute Instance**

Login with your AWS IAM account and explore the AWS console and its features. Since your resources reside on a private cloud, you will need to use a VPN in have access within the network.

Create a EC2 instance using any authorized keys and applying the default settings along with following configurations:
```
- Amazon Linux 2 AMI, t2.micro
- TODO: Security Group (port 22 and port 80 open)
```

Verify the connection via SSH and then install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) onto the VM. This will give permission for your EC2 instance to access to the AWS console via command lines.

Troubleshooting:
- You cannot SSH from your local machine to a private network without a VPN connection.
- If your authorized key is not recognized, make sure to specify the entire path ```~/.ssh/<authorized_key>```.

**2. Connecting to Object Storage**
Once you have installed AWS CLI onto your VM, you will be uploading / downloading from and to the designated S3 bucket. Review the related-documents on [downloading](https://docs.aws.amazon.com/cli/latest/reference/s3api/get-object.html) and [uploading](https://docs.aws.amazon.com/cli/latest/reference/s3api/put-object.html) to S3 services before proceeding.

Create a new directory called ```practice``` and download the file called <file> from your bucket. Verify that the contents within the file matches the one in the bucket:
```
TODO: text
```

Create a new file called <firstname_lastname>.txt. You will upload this file to your bucket and it should contain the following text:
```
Hello, my name is <firstname_lastname>!
```

Verify through the console that the S3 bucket now contains a file called <firstname_lastname>.txt and finally upload your HTML file.

Troubleshooting:
- Be careful on how you specify the path for bucket storage.

**3. Configure Web Server**
Follow the instructions required to install an [Apache HTTP web server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateWebServer.html). Download your HTML file and store it under ```var/www/html/<file>.html```.

Verify that the website loads your web page properly.

Troubleshooting:
- You are required to update the permissions within the VM in order to make changes to the contents under the ```var/``` directory.
- If you cannot connect to your website after finishing installation, ensure that the web address starts with ```http://``` instead of ```https://```. TODO: check if this applies to private network

**4. Load Balancer**

For this step, only one individual is required to complete this step but discuss with your team members about the implementation details. In order to create an ELB, you will require a target group that contains each VM as the backend server. Once your ELB is online, use your browser and verify that each page should display the different HTML pages created.

## Working on the Cloud: Automation
**1. Provisioning Infrastructure-As-Code**

![Alt text](img/CloudFormation.png?raw=true)
CloudFormation provides an Infrastructure-as-Code solution to provisioning and managing resources written as a template. Delete any pre-existing compute resources Use the provided template and modify the necessary fields. Create the EC2 instances using these parameters when asked for:
```
```

Verify that the stack was successfully. Why use CloudFormation? Allows for management of resources in a stack.

**2. Serverless Functions**

![Alt text](img/Serverlessfunction.png?raw=true)

**3. AWS Deployments with Ansible**

TODO: use Ansible playbooks to automate your AWS deployments

**4. Load Balancer**

## End of Module

After your work has been checked, shut down.

TODO: additional topics to explore
- create backups and delete / restore
- network peering with previous cohorts
- logging / cost analysis that sends an email of a daily summary


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
- Groups are given permission to R/W EC2 and S3 resources within the READ-only VPC.
- Groups are given permission to use CloudFormation.

Roles:
- EC2 instances are given permission to use the AWS CLI.
- EC2 instances are given permission to communicate with S3 services.
- Lambda Functions are given permission to SSH into EC2 instances.
- Lambda Functions are given permission to communicate with S3 services.

## Working on the Cloud

In this module, you will be working within the OCP private cloud network on ```Amazon Web Services``` and provision resources so that the previously created HTML page can be accessed from an internal web server. Students may encounter unexpected problems and will require communicating with their team members in order to resolve them.

There are two tracks available: the basic and intermediate track. The basic track serves as an introductory lesson for beginners or as a refresher on cloud concepts. The intermediate track better represents what is expected from entry-level cloud practitioners and will introduce new concepts and challenges designed to help prepare you.

## Working on the Cloud: Console

The basic track will focus on using the AWS console in order to create resources. Each student will individually create their EC2 instances and install the required packages. Shared resources include the VPC that they will be working on as well as a S3 bucket. Students will work together to discuss the implementations of an ELB and verify that they have successfully created a working backend web server.

Beginners should explore the console and understand its layout while those more familiar are recommended to use the AWS CLI.

**1. Creating and Configuring a Compute Instance**

Login with your AWS IAM account. Since your resources reside on a private cloud, you will need to use a VPN in have access within the network.

Create a EC2 instance using any authorized keys and applying the default settings along with following configurations listed below. You can generate a new keypair or use a pre-existing one. View the documentations on [initializing](https://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html) and [launching](https://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html) EC2 instances via AWS CLI:
```
- Amazon Linux 2 AMI with t2.micro type
- TODO: Security Group (port 22 and port 80 open)
```

Verify the connection via SSH with the appriopriate keypair and then install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) on the VM. This will give permission for your EC2 instance to access the AWS console and perform command lines.

Troubleshooting:
- You cannot SSH from your local machine to a private network without a VPN connection.
- If your authorized key is not recognized, make sure to specify the entire path ```~/.ssh/<authorized_key>```.

**2. Connecting to Object Storage**
Once you have installed AWS CLI onto your VM, you will be uploading / downloading from and to the designated S3 bucket. Review the related-documents on [downloading](https://docs.aws.amazon.com/cli/latest/reference/s3api/get-object.html) and [uploading](https://docs.aws.amazon.com/cli/latest/reference/s3api/put-object.html) to your S3 bucket before proceeding.

Create a new directory called ```practice``` within your VM and download the file called <file> from your bucket to the specify directory. Verify that the contents within the file matches the one in the bucket:
```
TODO: text
```

Create a new file called <firstname_lastname>.txt. You will upload this file to your bucket and it should contain the following text:
```
Hello, my name is <first name> <last name>!
```

Verify through the console that the S3 bucket now contains a file called <firstname_lastname>.txt with the appropriate content. Upload your HTML file from the previous module using any preferred method.

Troubleshooting:
- Be careful on how you specify the path for bucket storage.

**3. Configure Web Server**
Follow the instructions required to install an [Apache HTTP web server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateWebServer.html). Download your HTML file and store it under ```/var/www/html/<file>.html```.

Verify that the web page is properly hosted by a web server by addressing to your VM.

Troubleshooting:
- You are required to update the permissions within the VM in order to make changes to the contents under the ```var/``` directory.
- If you cannot connect to your website after finishing installation, ensure that the web address starts with ```http://``` instead of ```https://```. TODO: check if this applies to private network

**4. Load Balancer**

For this step, only one individual is required to complete this step but discuss with your team members about the implementation details. In order to create an ELB, you will require a target group that contains each VM as the backend server. Once your ELB is online, use your browser and verify that each page displays the different HTML pages created.

## Working on the Cloud: Automation

The intermediate track will focus on using automation tools within AWS for resource and configuration management. This track will accomplish the same goals as the beginner's track but through more efficent and practical methods. Students can either collaborate on a single solution or work independently (recommended). 

**1. Provisioning Infrastructure-As-Code**

![Alt text](img/CloudFormation.png?raw=true)
Source: AWS

[CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html) provides an Infrastructure-as-Code solution to provisioning and managing resources written as a template. Delete any pre-existing compute resources Use the provided template and modify the necessary fields. Create the EC2 instances using these parameters when asked for:
```
```

Verify that the stack was successfully. Why use CloudFormation? Allows for management of resources in a stack.

Note:
- For learning purposes, you will be launching a single EC2 instance but you can modify the code to create multiple EC2 instances with the same configurations.

**2. AWS Deployments with Ansible**

[Amazon Systems Manager](https://aws.amazon.com/blogs/mt/keeping-ansible-effortless-with-aws-systems-manager/) in combination with Ansible will allow for a powerful configuration management of our EC2 instances. These tools will allow you to install software packages remotely rather than performing manual SSH connections.

Create an Ansible playbook that will install the target EC2 instances with an Apache HTTP web server.

**3. Serverless Functions**

[AWS Lambda](https://aws.amazon.com/lambda/) enables serverless functions allow you to run code with provisioning or managing infrastructure and allows you to automatically respond to events. You create a function such that whenever the S3 bucket gets updated, it will SSH automatically into your EC2 instances and pull that object. While this is not very practical, it is increase your exposure to automation with AWS Lambda.

Make sure that it downloads to the appropriate destination.

- Lambda requires SSH
- API gateway? make a HTTP request to API endpoint and trigger the AWS Lambda function

**4. Load Balancer**

Using CloudFormation, create an ELB that is given the necessary parameters to recreate the appropriate HTTP backend web server.

## End of Module

By the end of this module, you will have successfully created an EC2 instance that can R/W with your S3 bucket, connect into your VM and install Apache Web Server, and have an ELB that distributes incoming traffic to the backend web servers. This work was accomplished either through the console or AWS CLI.

In the intermediate track, you will have used CloudFormation and understand how Infrastructure-as-Code allows for better resource management. Deployed software packages through Ansible as a configuration mangement tool. Finally, how serverless functions allows for event-driven automation of your workflow.
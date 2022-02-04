## Module B: Objectives

- Create and connect to computer instances.
- Upload and download with Object storage.
- Host a web server and implement a load balancer. 

## Setup
```
- AWS IAM account
- Access to OCP private cloud
```

Reminder, all permissions and access to AWS resources is denied by default. The information below details the management of IAM permissions for this module.

Policies:
- Group is created from the users of current cohort.
- Group is given permission to R/W EC2 and S3 tagged resources.
- Group is given permission to READ-only VPC.
- Group is given permission to use CloudFormation.
- Group is given permission to AWS Lambda Functions.

Roles:
- EC2 instances are given permission to use the AWS CLI.
- EC2 instances are given permission to communicate with S3 services.
- Lambda Functions are given permission to SSH into EC2 instances.
- Lambda Functions are given permission to communicate with S3 services.

## Working on the Cloud

In this module, students will be working within the OCP private cloud network on ```Amazon Web Services``` and provision resources to host their created web page on a web server. Since this is a private network, a VPN is required for access to these resources. Additionally, the Amazon Linux AMI runs on CentOS which is similar to other Linux distributions
you may be familiar with such as Ubuntu, but is regarded as more stable and secure in the professional IT world. Unexpected problems may occur and will require consulting online resources or other team members to resolve these issues.

Outlined below are two tracks: the basic and intermediate track. The basic track serves as an introductory lesson for beginners or as a refresher on cloud concepts within AWS. The intermediate track better represents what is expected from entry-level cloud practitioners and will introduce new concepts and challenges designed to prepare you.

## Working on the Cloud: Console

The basic track will focus on using the AWS console in order to create resources. Each student will individually create their own elastic compute (EC2) instances and manually install the required packages as well as moving objects from and to simple storage service (S3). Students will work together to discuss the implementations of an elastic load balancer (ELB) and verify that they have successfully created a working backend web server.

Beginners should explore the console and understand its layout while those more familiar are recommended to use the [AWS CLI](https://aws.amazon.com/cli/).

**1. Creating and Configuring a Compute Instance**

Login with your AWS IAM account. Since your resources reside on a private cloud, you will need to use a VPN in have access within the network.

Create a EC2 instance with the default settings along with the following configurations listed below. You can generate a new keypair or use a pre-existing one. View the documentations on [initializing](https://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html) and [launching](https://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html) EC2 instances via AWS CLI:
```
- Amazon Linux 2 AMI with t2.micro type
- TODO: Security Group (port 22 and port 80 open)
```

Verify the connection via SSH protocol with the appropriate keypair and then install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) on the VM. This will give permission for your EC2 instance to access the AWS console and perform command lines.

Troubleshooting:
- You cannot SSH from your local machine to a private network without a VPN connection.
- If your authorized key is not recognized, make sure to specify the entire path such as on Linux: ```~/.ssh/<authorized_key>```.

**2. Connecting to Object Storage**
Once you have installed AWS CLI onto your VM, you will be uploading / downloading from and to the designated S3 bucket. Review the related-documents on [uploading](https://docs.aws.amazon.com/cli/latest/reference/s3api/put-object.html) and [downloading](https://docs.aws.amazon.com/cli/latest/reference/s3api/get-object.html) to your S3 bucket before proceeding.

On your EC2 instance, create a new file called <firstname_lastname>.txt. You will upload this file to your bucket and it should contain the following text:
```
Hello, my name is <first name> <last name>!
```

Verify through the console that the S3 bucket now contains a file called <firstname_lastname>.txt with the appropriate content. Upload your HTML file from the previous module and then download it onto your EC2. Verify that the contents are the same.

Troubleshooting:
- Be careful on how you specify the path for bucket storage.
- EC2 instances cannot connect to S3 services without the AWS CLI installed.
- Review the basic command lines for Linux file system management if needed.

**3. Configure Web Server**
Carefully follow the instructions to install an [Apache HTTP web server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateWebServer.html) and stop once you set the files permission for the Apache web server. Download your HTML file from the S3 bucket onto VM at ```/var/www/html/<file>.html```.

Verify that the web page has been hosted by using the private IP address of your web server.

Troubleshooting:
- You are required to update the permissions within the VM in order to make changes to the contents under the ```var/``` directory.
- If you cannot connect to your website after finishing installation, ensure that the web address starts with ```http://``` instead of ```https://```. TODO: check if this applies to private network

**4. Load Balancer**

For this step, only one individual is required to create the [ELB](https://aws.amazon.com/elasticloadbalancing/) but discuss with your team members about the implementation details. In order to create an ELB, you will require a target group that contains each VM as the backend server. Once your ELB is running, verify that each student are viewing the different pages created.

## Working on the Cloud: Automation

The intermediate track will focus on resource and configuration mangement of AWS resources via automation. This track will accomplish the same goals as the beginner's track but through efficient methodologies. Initializing several EC2 instances and setting them up manually is incredibly unnecessary and unpractical when the workload is high, so this track will introduce several new concepts on cloud automation. While these tools can manage several resources at a time, students are recommended to manage their own resources independently.

Before proceeding, make sure that all previously created resources have been clear for a more manageable work environment.

**1. Resource Management**

![Alt text](img/CloudFormation.png?raw=true)

[CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html) provides an Infrastructure-as-Code solution by provisioning and managing resources written with a JSON / YAML template. When a template is created and read by CloudFormation, a stack is generated which is a collection of the AWS resources managed as a single unit. Thus, you can modify several resources at once by modifying the stack.

Examine ```template.json``` which provides an example template for creating EC2 instances with the given parameters. There are several ```TODO``` which denotes a missing value and update them with the appropriate value. You will be creating multiple web servers and a control node which will be detailed later. Access CloudFormation from the console and upload the template in order to create a stack. Create the following resources:
```
- Web server 1 compute instance
- Web server 2 compute instance
- Control node compute instance
```

TODO: test the template

**2. Configuration Mangement**

[Ansible](https://docs.ansible.com/ansible/latest/network/getting_started/basic_concepts.html) allows for the deployment of software packages to several compute instances simutaneously. Ansible playbooks, written in YAML format, allows for the orchestration of procedural tasks against an inventory of hosts via the SSH protocol. In this step, you will be deploying Apache web servers to the previously created EC2 instances.

To get started, you will install Ansible on the control node. Follow the instructions on [installing Ansible on CentOS](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#installation-guide). Next, read about the [Ansible playbook](https://docs.ansible.com/ansible/latest/user_guide/intro_getting_started.html) and review ```apache.yaml``` which is a series of tasks to install Apache. Refer to the user guide to make sure that Ansible has been properly set up and includes an inventory of hosts. Run the Ansible playbook and verify that you connect to the test pages for each individual EC2.

**3. Serverless Functions**

[AWS Lambda](https://aws.amazon.com/lambda/) enables serverless functions allow you to run code with provisioning or managing infrastructure and allows you to automatically respond to events. You create a function such that whenever the S3 bucket gets updated, it will SSH automatically into your EC2 instances and pull that object. While this is not very practical, it is increase your exposure to automation with AWS Lambda.

TODO
- Lambda will require SSH permission to EC2
- Alternative solution, use API gateway that will receive a HTTP request and trigger

**4. Load Balancer**

Using CloudFormation, create an ELB that is given the necessary parameters to recreate the appropriate HTTP backend web server. Apply the necessary target group and security group.

## End of Module

By the end of this module, you will have successfully created an EC2 instance that can R/W with your S3 bucket, connect into your VM and install Apache Web Server, and have an ELB that distributes incoming traffic to the backend web servers. This work was accomplished either through the console or AWS CLI.

In the intermediate track, you will have used CloudFormation and understand how Infrastructure-as-Code allows for better resource management while using Ansible for configuration management Finally, how serverless functions allows for event-driven automation of your workflow.
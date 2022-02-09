## Module B: Objectives

- Create and connect to computer instances.
- Upload and download with Object storage.
- Host a web server and implement a load balancer. 

## Setup
```
- AWS IAM account
- Access to OCP's virtual private cloud (VPC)
```

Reminder, all permissions and access to AWS resources is denied by default. The information below details the implementations of the IAM permissions for this module.

Policies:
- Users are created with access to programmatic tools and the AWS CLI.
- Group is created for current users.
- Group is given permission to manage tagged resources for R/W EC2 and S3.
- Group is given permission to READ-only IAM and attach roles.
- Group is given permission to READ-only VPC.
- Group is given permission to manage CloudFormation.
- Group is given permission to manage AWS Lambda Functions.
- Group is given permission to manage Amazon RDS.

Roles:
- EC2 instances are given permission to communicate with S3 services.
- Lambda Functions are given permission to SSH into EC2 instances.
- Lambda Functions are given permission to communicate with S3 services.

## Working on the Cloud

In this module, students will be working within the OCP private cloud network on ```Amazon Web Services``` and provision resources required for a web hosting service. A secured connection will be required to access the resources on the private network via the provided VPN.

Outlined below are learning paths: the ```basic track``` and ```intermediate track```. The basic track serves as an introductory material for beginners and as warm-up for those familiar with cloud concepts. The intermediate track is a better representation of what is expected from entry-level cloud practitioners and will introduce new concepts and challenges. If you plan on skipping ahead to the intermediate track, please review the basic track which covers some administrative details.

## Working on the Cloud: Console (Basic)

This learning path focuses on utilizing the AWS console to create cloud resources. Each student will be provisioning their own elastic compute (EC2) instances and the required packages as well as managing objects in the simple storage service (S3). References will be provided to help resolve any troubleshooting issues that may occur but are encouraged to explore and make mistakes.

Those who are more familiar with cloud concepts are suggested to use the [AWS CloudShell](https://aws.amazon.com/cloudshell/) for provisioning and managing resources. Note, you will also being using the [AWS CLI](https://aws.amazon.com/cli/) so it is recommended to become familiar with the AWS tools, regardless.

**1. Creating and Configuring a Compute Instance**

Login with the provided AWS IAM account.

Create an EC2 instance following configurations listed below and default settings otherwise. View the documentations on [initializing](https://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html) and [launching](https://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html) EC2 instances with the AWS CLI:
```
- Amazon Linux 2 AMI with t2.micro type
- WebServerGroup security group
```

Verify the connection via SSH protocol and then install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) on the EC2. This will give permission for your EC2 instance to access AWS tools.

Troubleshooting:
- You can name your compute instances to make them much easier to manage.
- If you cannot SSH from to the remote machine, you either need to assign a public IP address or use a VPN connection for the private IP address.
- If the keypair does not authenticate, make sure to specify the entire path such as ```~/.ssh/<private_key>```.

**2. Connecting to Object Storage**

Within the S3 bucket called <TODO>, all objects will be stored under your cohort directory with your name such as ```s3://<bucket_name>/<cohort>/<name>/```. You will be using the AWS CLI from within the EC2 instance to make calls to the S3 bucket. Review the documentations on using the [s3 commands](https://docs.aws.amazon.com/cli/latest/reference/s3/) to move files within the S3 bucket.

Go to the EC2 console and ```Actions > Security > Modify IAM role``` and attach the role to enable EC2 access with S3, then create a new file called <firstname_lastname>.txt from your EC2 instance. You will upload this file to your individual folder and it should contain the following text:
```
Hello, my name is <first name> <last name>!
```

Verify through the console that the S3 bucket now contains a file called <firstname_lastname>.txt with the appropriate text content. Upload your HTML file from the previous module either through the CloudShell or Console, then download it onto your EC2. Verify that the contents are the same.

Troubleshooting:
- If the cohort directory has not been created, create one or contact the administrators. The same applies if your own individual folder is not created.
- Be careful on how you specify the path for bucket storage ```S3://<bucket_name>/<dir>/object```.
- EC2 instances cannot connect to S3 services without the AWS CLI installed and the instance role attached.

**3. Configure Web Server**

Carefully follow the instructions to install an [Apache HTTP web server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateWebServer.html) and stop once you have set the files permission for the Apache web server. Either move or re-download your HTML file within your EC2 to the destination ```/var/www/html/<file>.html```.

Verify that your web server is currently hosting the correct page.

Troubleshooting:
- You are required to update the permissions within the EC2 in order to make changes to the contents under the ```var/``` directory.
- You can access your web page from the browser using the IP address ```http://<ip_address>```.

**4. Load Balancer**

Review the documentations about the [ELB](https://aws.amazon.com/elasticloadbalancing/). Create a target group and select any web servers that are currently available (adding a backend that is not currently running Apache may unexpected errors). Create the ELB with the default settings and the following configurations:
```
WebServerGroup security group
HTTP port 80 forwarding to selected target group
```

Verify that the traffic to your backend web servers are being distributed.

Troubleshooting:
- Connecting to your ELB is similar to connecting to your EC2 from a web browser.
- If a page reload does not update the contents of the web page, clear your cache to resolve this since AWS caches DNS queries.

**5. End of the Basic Track**

By the end of this learning, you will have successfully provisioned a compute resource and managed objects with the S3 bucket, connect and install software packages on your EC2 instances, and created an ELB to distribute traffic across your backend web servers.

**REQUIRED:** _Terminate_ all resources that you have created for this module: EC2 instances, target group, ELB, and HTML file.

## Working on the Cloud: Automation (Intermediate)

This learning path will similarly create web hosting servers but with more emphasis on resource and configuration management to achieve automation. Students will be responsible for managing more than one resource at a time and all previously created resources should be terminated before moving forward.

**1. Resource Management**

![Alt text](img/CloudFormation.png?raw=true)

[CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html) provides an Infrastructure-as-Code solution by provisioning and managing resources written with a JSON / YAML template. When a template is created and read by CloudFormation, a stack is generated which is a collection of the AWS resources managed as a single unit. Thus, you can modify several resources at once by modifying the stack.

Examine ```server.json``` which provides an example template for creating EC2 instances with the given parameters. There are several ```TODO``` which denotes a missing value and update them with the appropriate value. Please refer to the CloudFormation guidelines on getting started and learning more about how format a template.

You will be creating multiple web servers and a control node which will be detailed in the next section. Update the ```server.json``` file to create the following resources below. Access CloudFormation from the console and upload the template to create a stack and choose all default settings.
```
- Web server 1 compute instance
- Web server 2 compute instance
- Control node compute instance
```

Verify that you can reach each EC2 instance through a SSH connection.

**WARNING:** the current version (2/8/2021) of this template automatically assigns a public IP address and may be deprecated in the future.

Troubleshoot:
- Common errors can occur due to syntax mistakes.
- Ensure the the public key matches the private key on your local machine, else delete the stack and choose a functional keypair.

**2. Configuration Mangement**

[Ansible](https://docs.ansible.com/ansible/latest/network/getting_started/basic_concepts.html) allows for the deployment of software packages to several compute instances simutaneously. Ansible playbooks, written in YAML format, allows for the orchestration of procedural tasks against an inventory of hosts via the SSH protocol. In this step, you will be deploying Apache web servers to the previously created EC2 instances.

To get started, you will install Ansible on the control node. Install AWS CLI onto the EC2 destinated as the control node. Please refer to [installation guide for Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#installation-guide) for additional details. Run the following command on your control node:
```
sudo yum install epel-release
sudo amazon-linux-extras install ansible2
```

Next, read about the [Ansible playbook](https://docs.ansible.com/ansible/latest/user_guide/intro_getting_started.html). Refer to the user guide on how to properly set up Ansible. Follow the example and verify that the ```/tmp/ansible_was_here``` was created. Please note, modifying the contents under ```etc/ansible``` requires root privilege which will require ```sudo <command>```. Additionally, your control node will require SSH connection to the servers, so generate a keypair and update the hosts' public key storage under ```~/.ssh/authorized_keys```.

Run ```apache.yaml``` to install the Apache HTTP web servers for your instances. Verify that the server is running by visiting the page. Note, the key-value pair ```become: yes``` allows for privilege escalation when installing software packages remotely.

Select one of the servers to be the test server. Connect via SSH and escalate your permissions with ```sudo -i```. This will grant temporary permission to modify ```/var/www/```. Create an empty HTML file and have it contain any desired text. You will not require a HTML skeleton for testing purposes. Verify that the page now reflects the text content.

Troubleshooting:
- Basic VIM commands: press ```insert``` to make changes, ```:w``` to write, ```:q``` to exit.
- If you cannot ping successfully to all hosts due to authentication issues, then manually SSH into each EC2 instance from within the control node.
- If an error occurs when running the command ```ansible-playbook```, try fixing any indentations and white spaces.
- Use an elastic IP address if you plan on provisioning new instances without having to update the inventory each time as stopped instances will have different public IP addresses when restarted or when provisioning a new stack.

**3. Serverless Functions**

[AWS Lambda](https://aws.amazon.com/lambda/) enables serverless functions allow you to run code with provisioning or managing infrastructure and allows you to automatically respond to events. You create a function such that whenever the S3 bucket gets updated, it will SSH automatically into your EC2 instances and pull that object. While this is not very practical, it is increase your exposure to automation with AWS Lambda.

create function, choose the proper role, 
- requires READ-only role with S3
- requires SSH permission to EC2

TODO
- Lambda will require SSH permission to EC2
- Alternative solution, use API gateway that will receive a HTTP request and trigger

**4. Load Balancer**

Create an ELB using ```elb.json```. This will provision an elastic load balancer, its listener, and a target group. Assign the appriopriate EC2 instances to the target group. Verify that you can reach your backend web servers through the load balancer.

Troubleshooting:
- Make sure that the ELB has the proper configurations: VPC, subnets, and security group.
- Make sure that the address starts with http:// to reach your HTTP web server.

**5. End of the Intermediate Track**

**REQUIRED:** Create a Lambda function that will _terminate_ all resources that you have created for this module: EC2 instances, target group, and ELB (can ignore contents in the S3 bucket).

In the intermediate track, you will have automated your work through the resource manager ```CloudFormation``` and configuration manager ```Ansible```. Additionally, learned how to leverage serverless functions to allow for event-driven automation of your workflow.
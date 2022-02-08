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
- Group is created for current users.
- Group is given permission to programmatic tools and AWS CLI.
- Group is given permission to manage tagged resources for R/W EC2 and S3?
- Group is given permission to READ-only roles.
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

Outlined below are learning paths: the ```basic track``` and ```intermediate track```. The basic track serves as an introductory material for beginners and as warm-up for those familiar with cloud concepts. The intermediate track is a better representation of what is expected from entry-level cloud practitioners and will introduce new concepts and challenges.

## Working on the Cloud: Console

This learning path focuses on utilizing the AWS console to create cloud resources. Each student will be provisioning their own elastic compute (EC2) instances and the required packages as well as managing objects in the simple storage service (S3). References will be provided to help resolve any troubleshooting issues that may occur. Those who are more familiar with cloud concepts are recommended to use the [AWS CLI](https://aws.amazon.com/cli/) for provisioning and managing resources.

**1. Creating and Configuring a Compute Instance**

Login with the provided AWS IAM account.

Create an EC2 instance following configurations listed below and default settings otherwise. View the documentations on [initializing](https://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html) and [launching](https://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html) EC2 instances with the AWS CLI:
```
- Amazon Linux 2 AMI with t2.micro type
- WebServerGroup security group
```

Verify the connection via SSH protocol and then install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) on the EC2. This will give permission for your EC2 instance to access AWS tools.

Troubleshooting:
- You cannot SSH from your local machine to a private network without a VPN connection.
- If the keypair does not authenticate, make sure to specify the entire path such as ```~/.ssh/<private_key>```.

**2. Connecting to Object Storage**
Once you have installed AWS CLI onto your EC2, you will be transferring objects with the designated S3 bucket. Review the documentations on using the [s3 commands](https://docs.aws.amazon.com/cli/latest/reference/s3/) to move files within the S3 bucket.

Go to the EC2 console and ```Actions > Security > Modify IAM role``` and attach the role to enable EC2 access with S3, then create a new file called <firstname_lastname>.txt from your EC2 instance. You will upload this file to your bucket and it should contain the following text:
```
Hello, my name is <first name> <last name>!
```

Verify through the console that the S3 bucket now contains a file called <firstname_lastname>.txt with the appropriate text content. Upload your HTML file from the previous module and then download it onto your EC2. Verify that the contents are the same.

Troubleshooting:
- Be careful on how you specify the path for bucket storage.
- EC2 instances cannot connect to S3 services without the AWS CLI installed and the instance role attached.

**3. Configure Web Server**
Carefully follow the instructions to install an [Apache HTTP web server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateWebServer.html) and stop once you have set the files permission for the Apache web server. Download your HTML file from the S3 bucket onto your EC2 at ```/var/www/html/<file>.html```.

Verify that your web server is currently hosting the correct page.

Troubleshooting:
- You are required to update the permissions within the VM in order to make changes to the contents under the ```var/``` directory.
- You can access your web page by addressing to the private IP address with any browser with ```http://<ip_address>```

**4. Load Balancer**

Review the documentations about the [ELB](https://aws.amazon.com/elasticloadbalancing/). While having a single load balancer to manage your backend servers is reasonable, for practicing purposes, each student will implement their own ELB. Create a target group which contains everyone's web servers and verify that the traffic is being distributed.

Troubleshooting:
- Connecting to your ELB is similar to connecting to your EC2 from a web browser.
- If a page reload does not update the contents of the web page, clear your cache to resolve this since AWS caches DNS queries.

## Working on the Cloud: Automation

This learning path will similarly create web hosting servers but with more emphasis on resource and configuration management to achieve automation. Students will be responsible for managing more than one resource at a time and all previously created resources should be terminated to have a more manageable work environment.

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

TODO: current assigns a public IP address in the template. (do not give the public subnet routing to the internet gateway)

Troubleshoot:
- Common errors can occur due to syntax mistakes.
- Ensure the the public key matches the private key on your local machine, else delete the stack and choose a working keypair.
- If connecting within a public subnet, a public IP address must be assigned.

**2. Configuration Mangement**

[Ansible](https://docs.ansible.com/ansible/latest/network/getting_started/basic_concepts.html) allows for the deployment of software packages to several compute instances simutaneously. Ansible playbooks, written in YAML format, allows for the orchestration of procedural tasks against an inventory of hosts via the SSH protocol. In this step, you will be deploying Apache web servers to the previously created EC2 instances.

To get started, you will install Ansible on the control node. Install AWS CLI onto the EC2 destinated as the control node. Please refer to [installation guide for Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#installation-guide) for additional details. Run the following command on your control node:
```
sudo yum install epel-release
sudo amazon-linux-extras install ansible2
```

Next, read about the [Ansible playbook](https://docs.ansible.com/ansible/latest/user_guide/intro_getting_started.html). Refer to the user guide on how to properly set up Ansible. Follow the example and verify that the ```/tmp/ansible_was_here``` was created. Please note, modifying the contents under ```etc/ansible``` requires root privilege which will require the ```sudo``` command. Additionally, your control node will require SSH connection to the servers, so generate a keypair and give the servers your public key stored in ```~/.ssh/authorized_keys```.

Verify that ```/temp/ansible_was_here``` has been created in the hosts. Run ```apache.yaml``` to install the Apache HTTP web servers for your instances. Verify that the server is running by visiting the page. Note, the key-value pair ```become: yes``` allows for privilege escalation.

```
sudo vim hosts
generate ssh key on control node
add public key to server nodes (~/.ssh/authorized_keys)
sudo mkdir playbook
sudo -i # get root privileges to edit /var/www/html

touch index.html
echo "test page" > index.html # note this creates a basic HTML without the header or body
```

Select one of the servers to be the test server. Connect via SSH and run the following command:
```
sudo -i
```
This will grant temporary permission to modify ```etc/var/www```. Create an empty HTML file and have it contain any text. You will not require a HTML skeleton for testing purposes. Verify that the page now reflects the text content.

Troubleshooting:
- Basic VIM commands: press ```insert``` to make changes, ```:w``` to write, ```:q``` to exit.
- If you cannot ping successfully to all hosts due to authentication issues, then manually SSH into each EC2 instance from within the control node.
- If an error occurs when running the command ```ansible-playbook```, try fixing the indentations and white spaces.
- Use an elastic IP address if you plan on provisioning new instances without having to update the inventory each time as stopped instances will have different public IP addresses when restarted or when provisioning a new stack.

**3. Serverless Functions**

[AWS Lambda](https://aws.amazon.com/lambda/) enables serverless functions allow you to run code with provisioning or managing infrastructure and allows you to automatically respond to events. You create a function such that whenever the S3 bucket gets updated, it will SSH automatically into your EC2 instances and pull that object. While this is not very practical, it is increase your exposure to automation with AWS Lambda.

TODO
- Lambda will require SSH permission to EC2
- Alternative solution, use API gateway that will receive a HTTP request and trigger

**4. Load Balancer**

Create an ELB using ```elb.json```. This will provision an elastic load balancer, its listener, and a target group. Assign the appriopriate EC2 instances to the target group. Verify that you can reach your backend web servers through the load balancer.

To test if your load balancer is dysfunctional, add your EC2 instances to the pre-created target group and use the pre-configured load balancer.

Once everyone has finished, update the target group to only contain the HTML pages created in the previous module.

Troubleshooting:
- Make sure that the ELB has the proper configurations: VPC, subnets, and security group.
- Make sure that the address starts with http:// to reach your HTTP web server.
- TODO: use a known working load balancer and update the target group to yours to see if the issues lies with the ELB from the template.

## End of Module

By the end of this module, through either learning paths, you will have successfully provision compute resources and connect with Object storage, connect and install software packages on your EC2 instances, and create an ELB to distribute traffic across your backend web server.

In the intermediate track, you will have automated your work through the resource manager ```CloudFormation``` and configuration manager ```Ansible```. Additionally, learned how to leverage serverless functions to allow for event-driven automation of your workflow.
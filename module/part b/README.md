## Module B: Objectives

- Create compute resources and upload to Object storage.
- SSH into VMs and install web servers.
- Configure a load balancer that distributes to the backend web servers.

## Working on the Cloud

In this module, you will be working with ```Amazon Web Services``` and gain valuable hands-on experience with automation on the cloud. You will be uploading the HTML file you have created from the previous module and host the page on a web server. As a team, you will work together with your team so that a load balancer will be properly configured to redirect traffic to the different web pages created. This module will be more difficult so communication with teammates will be helpful when troubleshooting.

An IAM account for AWS should have been created to access these resources on the Optimum HIT CareerPath private cloud. All security features such as policies and security list will be handled by the administrators. While working, consider what security implementations would be required.

There are two paths available: the beginner's path is recommended for those not confident with the cloud and will use the console while the intermediate path is for those already familar with the console and will leverage automation to accomplish the same goals. Those who will take the beginner's path are strongly advised to follow along the intermediate path afterwards.

## Working on the Cloud: Console
**1. Creating a Compute Instance**

TODO: through the console, create a EC2 instance and successfully SSH

**2. Uploading to Object Storage**

TODO: using Lambda function to upl

**3. Configure Web Server**

TODO: install Apache web server and download the HTML from the bucket

**4. Load Balancer**

TODO: work as a team to create a load balancer connected to the backend web servers and configure any network requirements

## Working on the Cloud: Automation
**1. Provisioning Infrastructure-As-Code**

TODO: use CloudFormation to provision the EC2 resources

**2. Serverless Functions**

TODO: use lambda function to upload to s3 bucket

**3

TODO: additional topics to explore
- resource manager to deploy multiple computer resources (e.g., Terraform)
- create backups and delete / restore
- network peering with previous cohorts
- logging / cost analysis that sends an email of a daily summary


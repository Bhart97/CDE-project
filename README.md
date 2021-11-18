# CDE-project
Project name: CDE Project

Description: Create a basic web server that will host information about the CareerPath program such as resources and cohort members. To be used as an online resource for current/past CareerPath Analysts.

Goals: 
- Implement the skills learned from technical track (cloud engineering track) and to create functional online resource.
- Create and design a project using only command line tools (whenever possible)
- Incorporate as many topics from cloud computing (VM, VPNs and subnets, RBAC, database management, serverless functions, load balancers, etc.)
- Use diagnostic analytics tools to monitor server health and costs
- Use DevOps and Agile methods to practice deploying applications and how to deliver a product

Checkpoints:
- Create administrative account and setup the configurations / notifications
- Design a webpage application that can be ran locally first
- Deploy a VM that can host the webpage and can be accessed through external IP address
- Practice with VPC and subnetting to control access
- Setup EC2 autoscaling and EBL such that a VM will always exist and route traffic between VMs
- Create a DynamoDB table to load and retrieve data, then do this with a script
- Amazon Lightsail to host the website
- Write a AWS Lambda function that emails you of changes to the DB
- Cost analysis! At each step, take note of operations / uptime costs
Helpful link: https://www.reddit.com/r/sysadmin/comments/8inzn5/so_you_want_to_learn_aws_aka_how_do_i_learn_to_be/

Application:
- Database of past and current cohort members
- Schema: name, cohort #, technical track, contact information (email, Linkedin), current location / assignment
- Queries can be used to search for cohort members or update them


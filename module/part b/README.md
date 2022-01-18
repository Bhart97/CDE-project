## Module B: Objectives

- Create compute and network resources.
- Remotely install NGINX web server and clone your project.
- Manage the security list to configure network traffic.
- Configure a load balancer that distributes to the backend web servers.

TODO:
The domain admin account will be used to create new users for the cloud service. Dynamic group policy should be used to automatically add the users to the correct group based on their tags.

The network admin account should be used to provision VCN and manage the network traffic.

Have students create a new user that is added to the appropriate group. Provision a public subnet and private subnet with the following components: 
- private and public subnet, internet gateway
- private compute instances that will host web server and run the HTML they have created
- public load balancer that will randomly distribute the traffic to any of the compute instances
- this means that each time the load balancer is accessed, the information displayed should be one of the HTML created.

## Working on the Cloud
**1. Creating a Compute Instance**

TODO: create VM with the required configurations and SSH key

**2. Pull from GitHub**

TODO: pull from their repo (sample-project)

**3. Configure Web Server**

TODO: install the appropriate web server and launch the HTML from sample-project

**4. Load Balancer**

TODO: work as a team to create a load balancer connected to the backend web servers and configure any network requirements

**5. Security List**

TODO: update the network traffic list

## Module B: Objectives

- Create a compute instance and run your script.
- Manage the security list to allow approved traffic.
- Configure a load balancer that distribute traffic successfully.
- Connecting with a VPN

## TODO:
The domain admin account will be used to create new users for the cloud service. Dynamic group policy should be used to automatically add the users to the correct group based on their tags.

The network admin account should be used to provision subnets(?) and manage the network egress.

Have students create a new user that is added to the appropriate group. Provision a public subnet and private subnet with the following components: 
- private and public subnet, internet gateway
- private compute instances that will host the Python scripts and a public load balancer that will randomly distribute the traffic to any of the compute instances
- this means that each time the load balancer is accessed, the information displayed should be one of the scripts created.

## Working on the Cloud
**1. Creating a Compute Instance**
## TODO: create VM with the required configurations
Login using the user account that you have created and a launch a VM with the following configurations:
```
OS:
CPU:
```

**2. Generate SSH Key**
## TODO: add SSH key so that you can SSH into the VM

**3. Pull from GitHub**
## TODO: pull from their repo (sample-project)
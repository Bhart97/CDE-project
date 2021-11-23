# CDE-project
## Project name: CDE Project

**Description**: Project to demostrate understanding of cloud engineering by hosting a [web application] on the cloud. Components include: cloud computing, storage and database management, virtual networks, security, and cost analysis. 

**Scope**: Project will be completed using free tier / low-cost services on AWS and will leverage open-source programs (Git, etc.) to complete this project. Assumes basic knowledge from technical track including command-line tools, Python, and SQL.

**Goals**: 
- Create and successfully run a program
- Launch and configure EC2 instance and MySQL database.
- Create a VPC that allows communication between two subnets.
- Host and connect to a web application from the public IP address.
- Diagnose and analyze the metrics of running applications on the cloud.
- Use serverless functions to automatically notify of changes to the application.

## Instruction

**Introduction - Hello, World!:**
In this section, you will create a simple Python script that will ask for your name and says hello back. Before we get started, make sure the following resources are available:
```
Windows Subsystem for Linux is enabled (provides a functional Linux CLI for Windows OS)
Python3
```

**1. Creating a GitHub repo**

Login / create a GitHub account. GitHub offers a cloud-based solution to version control and software development. GitHub will allow you to transfer code from local to remote as well as collaborate with others on your project. After you sign-in, create a new repository titled "CDE-Project".

**2. Generate Private SSH Key**

Before you can start editing and saving the changes to your project, you will need to authenticate your workstation and associate it with your GitHub account. In the Linux terminal, run the following command
```
ssh-keygen
```
Press enter for it to save at the default location and enter a password (optional). Copy the entire generated key and add it your GitHub account (under settings > SSH and GPG keys > New SSH key). This will allow GitHub to verify your identity and allow you save your changes remotely.

**3. Creating a New Repository**

On your local workstation, we will be creating a new repo and then save them to the main branch. The main branch considered as the most up-to-date, working product. Choose a working directory and then create a new directory called "CDE-project" ```(hint: "mkdir <dir_name>")``` and then run the following command within that directory:
```
git init.
```
This will create an empty Git repository where all your documents will be stored. 

**4. Python Scrupt**

Create a new python file called "hello.py" ```(hint "touch <name.py>")``` and choose your favorite text editor to open the file. Your program will ask "What is your name?", receive an input from the user, and then greets them by saying "Hello, <name>!"

Run your script:
```
python3 <name.py>
```

**5. Merging with the Main Branch**

In order to save these changes to the main branch on GitHub, you will need to commit these changes before pushing them. Commits are snapshots your code and allows you to rollback to different commits should something break.
```
git add <name.py>
git commit -m "my first commit"
git branch -M main
git remote add origin git@github.com:<username>/CDE-Project.git
git push -u origin main
```
When you push the changes to the main branch, you are letting everyone know that the changes you have made the most up-to-date and (hopefully) working product. Whenever you make a clone onto another device, those changes will be reflected.

**6. Running on a EC2 Instance**

Now we will run your Python script on AWS. Create a EC2 instance (running on Linux) and connect via SSH. Using the previous steps, create another private SSH key and associate the EC2 instance with your GitHub. This time you will pull from the main branch and clone a local copy on the instance.
```

```

















Credits: "So, you want to learn AWS? AKA, "How do I learn to be a Cloud Engineer?" by u/SpectralCoding


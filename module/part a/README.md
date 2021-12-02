## Module A: Objectives

- Explore and understand how GitHub works.
- Create a basic Python program.
- Save changes from their local repository to the remote repository.

## Setup

This project was created under the following conditions:
```
Windows 10
WSL (Windows Subsystem for Linux) enabled
Ubuntu for Linux terminal
Python 3.8.10
Visual Studio Code (Python extension installed)
```

**Helpful tips:**

- If you want to view the files within Windows, you can change the directory to ```/mnt/c/users/<user>/```
- Aliases can be used to create shortcuts and can be stored in ```/home/<user>/.bash_aliases```
- To shorten the path, you can write ```PROMPT_DIRTRIM=<#>``` at the last line of ```/home/<user>/.bash_rc```

## Hello, World!

In this module, you will create a simple Python script that will say hello to the user.

**1. Creating a GitHub repo**

Login / create a GitHub account. GitHub offers a cloud-based solution to version control and software development. GitHub will allow you to transfer code from local to remote as well as collaborate with others on your project. Create a new repository titled "CDE-Project".

**2. Generate a Private SSH Key**

Before you can start editing and saving the changes to your project, you will need to authenticate your workstation and associate it with your GitHub account. Open the Linux terminal and run the following command
```
ssh-keygen
```
Save at the default location ```\home\<user>\.ssh\id_rsa``` and enter a (optional) password. Copy the entire generated key and add it your GitHub account (under settings > SSH and GPG keys > New SSH key). This will allow GitHub to verify your identity and allow you to save your changes remotely.

**3. Creating a New Repository**

On your local workstation, you will be creating a new repo and then save them to the main branch. The main branch considered as the most up-to-date, working product. Choose a working directory and then create a new directory called "CDE-project" ```(hint: "mkdir <dir_name>")``` and then run the following command within that directory:
```
git init
```
This will create an empty Git repository where all your documents will be stored. 

**4. Python Script**

Create a new python file called "hello.py" ```(hint "touch <name.py>")``` and choose your favorite text editor to open the file. Your program will simply print ```"Hello, <name>!"```
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
When you push the changes to the main branch, you are letting everyone know that the changes you have made the most up-to-date and (hopefully) working product. Whenever you make a clone onto another device or pull to merge with your working directory, those changes will be reflected in your local repo.

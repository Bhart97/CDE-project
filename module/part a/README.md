## Module A: Objectives

- Explore and understand how GitHub works.
- Create the following: Python script and Bash script.
- Save changes from their local repository to the remote repository.

## Setup

```
Python3
Text editor
Linux terminal (enable Windows Subsystem for Linux is recommended for Windows OS or have Git installed)
```

## Hello, World!

In this module, you will learn the basics of GitHub, create a Python program, and how to automate your work. It is recommended to use the command line for most steps to get more comfortable with Linux.

**1. Creating a GitHub repo**

Login / create a GitHub account. GitHub offers a cloud-based solution to version control and software development. This service allows you to upload code to remote repositories as well as collaborate with others on your project.

**2. Generating a SSH Keypair**

Before you can start editing and saving the changes to your project, you will need to authenticate your workstation and associate it with your GitHub account. Open your Linux terminal and run the following command:
```
ssh-keygen
```
Save at the default location ```\home\<user>\.ssh\id_rsa``` and enter an optional password. Copy the entire generated key and add it your GitHub account which will allow you to push changes to your remote repository.
```
settings > SSH and GPG keys > New SSH key
```

**3. Creating a New Repository**

You will be creating very simple practice project and then save them to the main branch. The main branch is considered as the most up-to-date, stable product. Create a new project with the title ```sample-project``` on GitHub. On your workstation, choose a working directory and create a folder with the same name as the project. Run the following command to create an empty Git repository where all your documents will be stored.
```
git init
```

**4. Python Script**

Create a new python file called "hello.py" and open any text editor to create a script that will output text. Run your script to check for functionality. You can view ```hello.py``` to help get started.

**5. Merging with the Main Branch**

In order to save these changes to the main branch on GitHub, you will need to commit these changes before pushing them. Commits are snapshots your code and allows you to rollback to different commits should something break.
```
git add <name.py>
git commit -m "my first commit"
git branch -M main
git remote add origin git@github.com:<username>/sample-project.git
git push -u origin main
```
When you push the changes to the main branch, you are letting everyone know that the changes you have made the most up-to-date and (hopefully) working product. Whenever you make a clone onto another device or merge with your working directory, the source code should reflect these changes.

Note: best practice would be to create a new branch from the main branch such that you can work and save any changes without affecting the main branch until your source code is stable and working.

**6. Bash Script**

For this step, you will create a Bash script that will read the output from "hello.py" and store the content into a HTML file called "index.html". This will help familiarlize you with using automation tools via Linux

After you have successfully created a working Bash script, open the HTML and see that the webpage now displays the output of your Python script.

Note: Bash scripts must have ```#!/bin/bash``` in order to run properly. You can view ```example.sh``` to help get started.

## Helpful Tips
- If using WSL, to view the user directory you can use the following command: ```/mnt/c/users/<user>/```
- Aliases can be used to create shortcuts to different directories and can be stored in ```/home/<user>/.bash_aliases```
- To shorten the displayed path in the terminal, you can write ```PROMPT_DIRTRIM=<#>``` at the last line of ```/home/<user>/.bash_rc```
- Visual Code is a beginner-friendly text editor
- [Python resources](https://learnxinyminutes.com/docs/python/)
- [Linux resources](https://learnxinyminutes.com/docs/bash/)
- [Git resources](https://learnxinyminutes.com/docs/git/)
## Module A: Objectives

- Explore and understand how GitHub works.
- Save changes from local repository to the remote repository.
- Leverage programming tools to create a simple web page.

## Setup

```
Python3
Text editor
Linux terminal
```

Note: 
- You are not required to have an IDE to accomplish this module, but [Visual Studio Code](https://code.visualstudio.com/) is a lightweight text editor that provides versatility without much complexity. 
- For Windows OS, it is strongly recommended to have [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install) with Ubuntu installed or alternatively download [Git Bash](https://git-scm.com/).

## Hello, World!

In this module, you will learn the basics of GitHub, create a Python program, and how to automate your work. It is recommended to use the CLI whenever possible such as creating directories or files. Becoming comfortable using command lines will yield more benefits in your career as a cloud engineer.

This entire module can be completed through Linux, so use this resource for [reference](https://learnxinyminutes.com/docs/bash/).

**1. Creating a GitHub repo**

Login / create a GitHub account. GitHub offers a cloud-based solution to version control and software development. This service allows you to upload your projects to remote repositories as well as streamlining collaboration with others.

**2. Generating a SSH Keypair**

Before you can start editing and saving the changes to your project, you will need to authenticate your workstation and associate it with your GitHub account. Open your Linux terminal / Git Bash and modify the following command before running:
```
ssh-keygen -t ed25519 -C <your_email@example.com>
```
Save at the default location and enter an optional password. Copy the generated content within your public key ```.ssh/id_rsa.pub``` and add it to your GitHub account with an appropriate name. This will allow you to push changes to your remote repository from your computer.
```
settings > SSH and GPG keys > New SSH key
```

Note:
- Helpful Linux commands such as ```ls -a```, ```cd <dir>```, and ```cat <file>``` to help identify and read your public key.

**3. Creating a New Repository**

You will be creating a very simple project and then saving them to the main branch. The main branch is considered the most up-to-date, stable version of your project. Create a new project with the title ```sample-project``` on GitHub. On your workstation, choose a working directory where your project will be stored locally. The following command will initialize a Git repository within that directory which enables other Git commands:
```
git init
```

Note:
- You can directly create resources with these commands: ```mkdir <dir>``` and ```touch <file>```.
- When Git is initialized, it creates a hidden folder ```.git/``` and can be verified with ```ls -a``` .

**4. Python Script**

Within the same directory where you initialized Git, create a new python file called ```hello.py```. Your program must meet the following requirements:
```
- Cannot prompt the user for input
- Create a unique or identifiable output
- Print the output to the console
```
You can view the example ```hello.py``` to help get started.

**5. Merging with the Main Branch**

In order to save these changes to the main branch on GitHub, you will need to commit these changes before pushing them. Commits are snapshots your project and allows you to rollback to previous versions. Modify and run the following commands:
```
git add hello.py
git commit -m "my first commit"
git branch -M main
git remote add origin git@github.com:<username>/sample-project.git
git push -u origin main
```
When you push the changes to the main branch, you are letting everyone know that the changes made are stable and working. Best practice is to use [branching](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) which allows you to work in isolation without affecting other branches. Whenever you make a clone onto another device or merge with your working directory, these changes should be reflected.

**6. Bash Script**

Automation is what allows for cloud engineers to become successful in their careers. For this step, you will be creating a Bash script that will automatically run the ```hello.py``` that you have created and stored its content within a HTML file called ```<firstname_lastname>.html```. You are not required to understand web programming to complete this step but here is a quick overview: HTML provides the structural component to store data, CSS makes your web page more visually appealing and intuitive, and JavaScript gives functionality to your web page. You need only to concern with [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML).

Carefully examine ```example.sh``` to understand how the necessary HTML file is created and how the outputs from commands can be stored into variables. ```#!/bin/bash``` is the required header in order for a Bash script to run. Create a new Bash script called ```script.sh``` and run the following command through either the Linux terminal or Windows Command Prompt:
```
bash script.sh
```

Verify that your Bash script ran successfully by opening the HTML file and viewing the web page. Commit and push your work to your GitHub account once more.
```
git add -A
git commit -m "message"
git push -u origin main
```

**7. End of Module A**

By the end of this module, you should have the following files:
```
sample-project/
    - hello.py
    - <firstname_lastname>.html
    - script.sh
```
Through this module, you have learned how create a working program through Python and how to automate your work such that any changes to your Python program can quickly be reflected on your HTML file without much effort. For the next module, you will be uploading the HTML file you have created and host it on a web server on the cloud.
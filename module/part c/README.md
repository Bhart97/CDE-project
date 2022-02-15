## Module C: Maintaining and Modifying Existing Resources

After completing the previous tool modules, you are now equipped with the basic knowledge to start exploring additional topics. The only work required for this module is to simply update the existing database by adding information about your cohort into the database. Depending on whether the database is a relational database or a NoSQL database will determine how to format the data.

```
Database schema:
Database = OCP
Table = Cohorts

SQL database:
<first name>, <last name>, <cohort>, <tech track>, <profile>

NoSQL database:
{
    "FirstName"  : <first name>,
    "LastName"   : <last name>,
    "Cohort"     : <cohort>,
    "tech track" : <tech track>,
    "profile"    : <profile>
}
```

## Updating the Website

(2/14/2022) The webpage is currently running on NodeJS and using the Express framework to make GET requests to the database.

To launch the website, the software packages ```nodejs``` and ```npm``` must be installed on the server. After the installation, the root directory of the webpage should contain both ```app.js``` and ```package-lock.json```. The JavaScript file creates the server and processes HTTP requests while the JSON file lists the dependencies required to run the webpage properly. Run the command ```npm ci``` which will create the dependencies ```node_modules``` described within ```package-lock.json```.

Should the webpage require a clean installation, install ```nodejs``` and ```npm``` on the server and run ```npm init``` to create the default ```node_modules```. Then run ```npm install express``` and ```npm install mysql```.

You can simply launch the webpage through ```node app.js``` and can be modified such that the [server can be ran until the instance shuts down](https://www.npmjs.com/package/forever).

## Moving Forward
For this repository, students are encouraged to further their understanding of software management tools such as [branching](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) so that can start their until projects and showcase what they have been learning. There is a roadmap that details some of unimplemented features and suggestions of where to get started.
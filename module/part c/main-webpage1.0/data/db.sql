CREATE DATABASE OCP;

CREATE TABLE cohorts (
    id INT NOT NULL AUTO_INCREMENT,
    FirstName       VARCHAR(255) NOT NULL,
    LastName        VARCHAR(255) NOT NULL,
    Cohort          VARCHAR(255) NOT NULL,
    TechnicalTrack  VARCHAR(255) NOT NULL,
    LinkedIn        VARCHAR(255),
    PRIMARY KEY (id)
);

/* TODO replace with variable */
LOAD DATA LOCAL INFILE '/home/ec2-user/documents/master.csv'
INTO TABLE cohorts
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\r';
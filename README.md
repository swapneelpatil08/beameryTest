# webdriverIO-Javascript
This automation project is developed using WebdriverIO and Javascript, to automate given website _(http://automationpractice.com/index.php)_. 
Using this framework below scenarios have been automated.
* Registration Process.
* Order a product.
* Search a product.

This is take home task for the Senior Automation engineer role.

# Pre-requisites: 
* **[Node JS](https://www.npmjs.com/package/node/v/12.13.0 "node  -  npm")** _v12.13.0_
* **[WebdriverIO](https://webdriver.io/ "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO")** _v7_
* **[NPM](https://www.npmjs.com/package/npm/v/6.12.0 "npm - npm")** _v6.12.0_

# Installation
1. Clone respository by executing below command <br />
    `git clone https://github.com/swapneelpatil08/webdriverIO-Javascript.git`
2. Go inside the cloned the repository <br /> `cd webdriverIO-Javascript`
3. Download dependencies by running below command <br /> `npm install`
4. Now you are all set to run the tests, execute below command to run tests <br /> `npm run wdio`
 
# Project Structure

## Tests
Spec files are placed in directory `./test/specs/`. Currently this project has 3 spec files and total of 9 tests, coveinng positive and negative scenarios.

## Page Objects
This framework use Page Object Model _(aka POM)_, design pattern that creates object repository for storing web elements. Page Objects are located at `./test/pageobjects/`.

## Test data
Static test data is kept under `./test/testdata/` directory. They are stored as a javascript objects. This is single point of test data source.

## Configuration file
This project uses config file `wdio.conf.js` which is under `./config/` directory. Here we have added all the configuration needed for this project, like - 
```Javascript
    baseUrl: 'http://automationpractice.com/',
    services: ['chromedriver', 'devtools', 'image-comparison', [TimelineService]],
    reporters: [
        'spec',
        ['timeline',
            {
                outputDir: './reports/timeline',
                filename: 'timeline-report.html',
                embededImages: true,
                screenshotStrategy: 'before:click'
            }]
        ],
```
> Note: By default chrome driver will be used for the execution. 

## Locators 
In this project below locator strategies are used:
1. _id_
2. _xPath_
3. _css locators_

# Reporting
This project uses `spec reporter` and `Timeline report`. 
### Spec report:
![spec-report](https://i.imgur.com/e07AqYf_d.webp?maxwidth=760&fidelity=grand)

### Timeline report
![timeline-report](https://i.imgur.com/cMvkXAV_d.webp?maxwidth=1520&fidelity=grand)

After running the tests timeline report will be generated inside the project under `./reports/timeline`. Also, this location will be given in the terminal after the execution of the tests/suite, like -
```
--------
TIMELINE REPORTER: Created /Users/**/Documents/Personal/TestBeam/webdriverIO-Javascript/reports/timeline/timeline-report.html
--------
```
Timeline report also shows the screenshots in the report based on `screenshotStrategy: 'before:click'`. 

> Note: On each run all the previous reports and screenshots will be deleted and new reports will be created.

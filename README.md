# beameryTest
This is take home task for the Senior Automation engineer role.

# Based on 
* **Node JS** _v12.13.0_
* **[WebdriverIO](https://webdriver.io/ "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO")** _v7.#.#_

# Installation
1. Run `git clone https://github.com/swapneelpatil08/beameryTest.git`
2. Go inside the directory `cd beameryTest`
3. Run `npm install`
4. Run  `npm run wdio`

# Project Structure

## Tests
Our spec files are placed in directory `./test/specs/`. Currently this project has 3 spec files and total of 9 tests, coveinng positive and negative scenarios.

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

## Locators 
In this project below locator strategies are used:
1. _id_
2. _xPath_
3. _css locators_

# Reporting
This project uses `spec` and `Timeline Reports`. 
### Spec report:
![spec-report](https://i.imgur.com/e07AqYf_d.webp?maxwidth=760&fidelity=grand)

### Timeline 
![timeline-report](https://i.imgur.com/cMvkXAV_d.webp?maxwidth=1520&fidelity=grand)

After running the tests timeline report will be generated inside the project under `./reports/timeline`. Also, this location will be given in the terminal after the execution of the tests/suite, like -
```
--------
TIMELINE REPORTER: Created /Users/**/Documents/Personal/TestBeam/beameryTest/reports/timeline/timeline-report.html
--------
```
Timeline report also shows the screenshots in the report based on `screenshotStrategy: 'before:click'`. 

> Note: On each run all the previous reports and screenshots will be deleted and new reports will be created.

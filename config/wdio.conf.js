import { resolve } from 'path';
const { TimelineService } = require('wdio-timeline-reporter/timeline-service');

export const config = {
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'None/excluded'
    ],
 
    maxInstances: 1,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    
    // ===================
    // Test Configurations
    // ===================
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    outputDir: resolve(__dirname, '../logs'),
    
    bail: 0,
    
    baseUrl: 'http://automationpractice.com/',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,
    
    // ====================
    // Test runner services
    // ====================
    services: ['chromedriver', 'devtools', 'image-comparison', [TimelineService]],

    framework: 'mocha',
    
    // =========
    // Reporters
    // =========
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

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        compilers: ['js:@babel/register'],
    },
    
    // =====
    // Hooks
    // =====
    onPrepare: function (config, capabilities) {
        const chai = require('chai');
        global.expect = chai.expect;
        global.should = chai.should();
        global.assert = chai.assert;

        const fs = require('fs');
        fs.rmdirSync('./reports/timeline', { recursive: true });
        fs.rmdirSync('./log', { recursive: true });
    },
    
    before: function (capabilities, specs) {
        browser.maximizeWindow();
    },
    
    sync: true
}

'use strict';

var paths = require('./.yo-rc.json')['generator-gulp-angular'].props.paths;

// An example configuration file.
exports.config = {
    baseUrl: 'http://localhost:3000',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    specs: [],
    multiCapabilities: [
        {
            browserName: 'chrome',
            specs: [paths.e2e + '/**/*.spec.js'],
            exclude: [paths.e2e + '/**/*.mobile.spec.js'],
            chromeOptions: {
                args: [
                    'disable-extensions',
                    '--no-sandbox'
                ]
            }
        },
        {
            browserName: 'chrome',
            count: 1,
            shardTestFiles: false,
            maxInstances: 1,
            chromeOptions: {
                mobileEmulation: {
                    'deviceName': 'iPhone 6'
                },
                args: [
                    'disable-extensions',
                    '--no-sandbox'
                ]
            },
            loggingPrefs: {
                browser: 'ALL'
            },
            specs: [paths.e2e + '/**/*.mobile.spec.js']
        }
    ],
    maxSessions: 1,
    //----- Custom Locator -----
    onPrepare: function () {
        require("jasmine-expect");
        browser.driver.manage().window().maximize();
        global.EC = protractor.ExpectedConditions;
        by.addLocator('value', function (hook, optParentElement, optRootSelector) {
            var using = optParentElement || document.querySelector(optRootSelector) || document;
            return using.querySelector('[value=\'' + hook + '\']');
        });
        by.addLocator('valueParent', function (hook) {
            return document.querySelector('[value=\'' + hook + '\']').parentNode;
        });
        by.addLocator('dataHook', function (hook, optParentElement, optRootSelector) {
            return document.querySelector('[data-hook=\'' + hook + '\']');
        });
    }
};

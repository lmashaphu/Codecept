Feature('getDemo');
var assert = require('assert');

Scenario('smoke test @get a demo ', (I, getDemo) => {
    I.amOnPage('https://xbdxzhpmrv-stg.ksysweb.com/ksys/')
    I.waitForClickable(getDemo.getAdemo, getDemo.pauseTime)
    I.click(getDemo.getAdemo)
    I.waitForElement(getDemo.firstName, getDemo.pauseTime)
    I.fillField(getDemo.firstName,'Tester')
    I.fillField(getDemo.lastName,'QA')
    I.fillField(getDemo.email,'Tester@qa.com')
    I.fillField(getDemo.jobTitle,'Tester')
    I.fillField(getDemo.company,'ksys')
    I.fillField(getDemo.industry,'Tech')
    I.fillField(getDemo.country,'ZA')
    I.saveScreenshot('form.png', true)
    I.click(getDemo.closeButton)
    I.waitForElement(getDemo.getAdemo, getDemo.pauseTime)
});

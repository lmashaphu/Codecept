Feature('keyRisks');
var assert = require('assert');
Scenario('smoke test @ fund page keyRisks ', (I, keyRisks) => {
    I.amOnPage('https://dev.kurtosys.io/tools/ksys418/fund-page?culture=en-GB&audience=inst&fundId=SXAAAF&isin=LU0515763810')
    I.waitForElement(keyRisks.firstbulletpointtext,keyRisks.pauseTime)
    I.see(keyRisks.keyRisksText) 
    I.see(keyRisks.firstbulletpointtext)
    I.see(keyRisks.secondbulletpointtext)



});

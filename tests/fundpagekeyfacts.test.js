Feature('fundpagekeyfacts');
var assert = require('assert');
Scenario('smoke test @ fund page key facts ', (I, fundpagekeyfacts) => {
    I.amOnPage('https://dev.kurtosys.io/tools/ksys418/fund-page?culture=en-GB&audience=inst&fundId=SXAAAF&isin=LU0515763810')
    I.waitForElement(fundpagekeyfacts.keyfactstext,fundpagekeyfacts.pauseTime)
    I.see(fundpagekeyfacts.keyfactsheading)
    I.see(fundpagekeyfacts.shareclassheading)
    I.see(fundpagekeyfacts.codesheading)
    
    
});

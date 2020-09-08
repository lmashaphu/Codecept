Feature('fundpageOpportunities');
var assert = require('assert');
Scenario('smoke test @ fund page opportunities ', (I, fundpageOpportunities) => {
    I.amOnPage('https://dev.kurtosys.io/tools/ksys418/fund-page?culture=en-GB&audience=inst&fundId=SXAAAF&isin=LU0515763810')
    I.waitForElement(fundpageOpportunities.componentheading,fundpageOpportunities.pauseTime)
    I.see(fundpageOpportunities.bulletpoint1)
    I.see(fundpageOpportunities.bulletpoint2)
    I.see(fundpageOpportunities.bulletpoint3)
    I.see(fundpageOpportunities.bulletpoint4)
    I.see(fundpageOpportunities.bulletpoint5)
    I.see(fundpageOpportunities.bulletpoints6)   
    
});

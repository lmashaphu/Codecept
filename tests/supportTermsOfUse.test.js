Feature('supportTermsOfUse');
var assert = require('assert');
Scenario('smoke test @ support terms of use ', (I, supportTermsOfUse) => {
    I.amOnPage('https://xbdxzhpmrv-stg.ksysweb.com/ksys/')
    I.waitForClickable(supportTermsOfUse.resources, supportTermsOfUse.pauseTime)
    I.doubleClick(supportTermsOfUse.resources)
    I.waitForElement(supportTermsOfUse.termsOfUseButtonText,supportTermsOfUse.pauseTime)
    I.click(supportTermsOfUse.termsOfUseButtonText)
    I.waitForElement(supportTermsOfUse.supportTermsOfUseText,supportTermsOfUse.pauseTime)  
    I.see(supportTermsOfUse.firstParagraph)
    I.see(supportTermsOfUse.secondParagraph) 
});

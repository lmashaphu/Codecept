const { I } = inject();

module.exports = {

  // insert your locators and methods here
  pauseTime : 5, 
  getAdemo: "//span[text()='Get A Demo']",
  product: '[id=kurtosys-menu-item-4293]', // or product: = /'kurtosys-menu-item-4293', product: $kurtosys-menu-item-4293 > all css selectors using id 
  documents: "(//a[text()='Documents'])[1]", //indexed relative xpath using id
  documentsPage: "//p[text()='Kurtosys Documents']", //relative xpath using text
  firstName: '[id=fname]', 
  lastName: '[id=lname]', 
  email: '[id=email]', 
  jobTitle:'[id=jobtitle]',
  company: '[id=company]',
  industry: '[id=industry]',
  country: '[id=Country]',
  closeButton: "//i[@class='eicon-close']"
}

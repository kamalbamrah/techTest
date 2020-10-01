// Introduction
Nightwatch.js is an open-source, node.js powered, automated browser testing framework.

Nightwatch.js facilitates end-to-end testing of web applications and websites, by utilizing W3C Webdriver API (also known as Selenium Webdriver) as Selenium wrapper for interacting with different browsers.

Page Object model has been used to design this framework.


// To run a particular test case
nightwatch -t tests/getQuote.js

//To run all testcases
npm test

//to run testcases based on tags
nightwatch "--tag" "quote"

//screenshots for failed test cases are under screenshot folder

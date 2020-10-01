
const data = require("../data/url.json")

module.exports = {
    '@tags': ['quote'],
    'Start quote from homepage': async function (browser) {
        const homepage = browser.page.homePage()

        homepage.verifyHomePage()
        homepage.clickGetQuoteButton()
    },

    'Process the quote': async function (browser) {
        const process = browser.page.addQuote()
        
        process.clickAcceptButton()
        process.selectProductCategoryPage()
        process.addAddressPage()
        process.getBrandPage()
        process.getModelPage()
        process.getRetailValuePage()
        process.getPurchaseDatePage()
        process.getConditionPage()
        process.lastUsedDatePage()
    },
    'Verify the quote details': async function (browser) {
        const quote = browser.page.quotePage()

        quote.verifyQuoteDetails()
        quote.getQuoteFromUrl()
        quote.verifyQuoteNumber()
        quote.getDeviceInfo()
        quote.getPriceInfo()
        quote.getPaymentButtonText()
        quote.getPaymentButtonLink()

    },

    before: function (browser) {
        browser
            .url(data.COVER_GENIUS_URL)
            .waitForElementVisible('body', 1000)
            .windowMaximize();
    },

    after: function (browser) {
        browser.end();
    }
}
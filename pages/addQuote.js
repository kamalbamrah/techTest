const phoneDetails = require("../data/phoneData.json")

module.exports = {
    elements: {
        acceptButton: 'div.sc-eEVlDD> div > button',
        getAllProduct: 'div.col-6',
        electronicInsuranceButton: '#electronics-insurance',
        globalNextButton: 'button[type=submit].btn-primary',
        globalHeader: 'header > h1 > span',
        addressInputBox: 'input[id=geosuggest__input]',
        addressGeoSuggest: '#ChIJUZZN3aCiEmsR_xEYQmOUGDU > span > b',
        brandInputBox: 'input[name=brand]',
        modelInputBox: 'input[name=model]',
        retailInputBox: 'input[name=retail_value]',
        calendarIcon: 'button.SingleDatePickerInput_calendarIcon',
        calendarleftnav: 'div.DayPickerNavigation_button.DayPickerNavigation_leftButton__horizontalDefault > svg',
        calendarDate: 'div:nth-child(2) > div > table > tbody > tr > td:nth-child(3)',
        conditionContainer: "div.react-select__value-container",
        conditionNew: "#react-select-2-option-0"



    },
    commands: [
        {

            clickAcceptButton() {
                this.waitForElementVisible("@acceptButton")
                this.assert.visible("@acceptButton")
                this.click("@acceptButton")
            },

            selectProductCategoryPage() {
                this.assert.urlContains("get-quote/product/category")
                this.click("@electronicInsuranceButton")
                this.api.execute('scrollTo(510, 552)')
                this.pause(2000)
                this.api.moveTo("@globalNextButton", 10, 10)
                this.waitForElementVisible("@globalNextButton", 5000)
                this.assert.visible("@globalNextButton")
                this.click("@globalNextButton")
                return this.api
            },

            addAddressPage() {
                this.pause(2000)
                this.assert.urlContains("get-quote/product/address")
                this.getText("@globalHeader", function (result) {
                    this.assert.equal(result.value, 'WHERE DO YOU LIVE?');
                })
                this.waitForElementVisible("@addressInputBox")
                this.setValue("@addressInputBox", "24, Rowley street, Pendle Hill")
                this.click("@addressGeoSuggest")
                this.waitForElementVisible("@globalNextButton")
                this.assert.visible("@globalNextButton")
                this.click("@globalNextButton")
                return this.api;
            },

            getBrandPage() {
                this.pause(2000)
                this.assert.urlContains("get-quote/product/brand")
                this.getText("@globalHeader", function (result) {
                    this.assert.equal(result.value, 'WHO MADE YOUR PRODUCT?');
                })
                this.waitForElementVisible("@brandInputBox")
                this.setValue("@brandInputBox", phoneDetails.make)
                this.waitForElementVisible("@globalNextButton")
                this.assert.visible("@globalNextButton")
                this.click("@globalNextButton")
                return this.api;
            },

            getModelPage() {
                this.pause(2000)
                this.assert.urlContains("get-quote/product/model")
                this.getText("@globalHeader", function (result) {
                    this.assert.equal(result.value, "WHAT'S THE MODEL OR VERSION?");
                })
                this.waitForElementVisible("@modelInputBox")
                this.setValue("@modelInputBox", phoneDetails.model)
                this.waitForElementVisible("@globalNextButton")
                this.assert.visible("@globalNextButton")
                this.click("@globalNextButton")
                return this.api;
            },

            getRetailValuePage() {
                this.pause(2000)
                this.assert.urlContains("get-quote/product/retail_value")
                this.getText("@globalHeader", function (result) {
                    this.assert.equal(result.value, "HOW MUCH DID YOU PAY FOR IT?");
                })
                this.waitForElementVisible("@retailInputBox")
                this.setValue("@retailInputBox", phoneDetails.price)
                this.waitForElementVisible("@globalNextButton")
                this.assert.visible("@globalNextButton")
                this.click("@globalNextButton")
                return this.api;
            },

            getPurchaseDatePage() {
                this.pause(2000)
                this.assert.urlContains("get-quote/product/purchase_date")
                this.getText("@globalHeader", function (result) {
                    this.assert.equal(result.value, "WHEN DID YOU BUY IT?");
                })
                this.waitForElementVisible("@calendarIcon")
                this.click("@calendarIcon")
                this.waitForElementVisible('@calendarleftnav')
                this.click('@calendarleftnav')
                this.pause(8000)
                this.waitForElementVisible("@calendarDate", 4000)
                this.click("@calendarDate")
                this.waitForElementVisible("@globalNextButton")
                this.assert.visible("@globalNextButton")
                this.click("@globalNextButton")
                return this.api;
            },

            getConditionPage() {
                this.pause(2000)
                this.assert.urlContains("get-quote/product/condition")
                this.getText("@globalHeader", function (result) {
                    this.assert.equal(result.value, "WHAT WAS THE CONDITION AT TIME OF PURCHASE?");
                })
                this.waitForElementVisible("@conditionContainer")
                this.click("@conditionContainer")
                this.waitForElementVisible("@conditionNew", 9000)
                this.click("@conditionNew")
                this.waitForElementVisible("@globalNextButton")
                this.assert.visible("@globalNextButton")
                this.click("@globalNextButton")
                return this.api;
            },

            lastUsedDatePage() {
                this.pause(2000)
                this.assert.urlContains("get-quote/product/last_used_date")
                this.getText("@globalHeader", function (result) {
                    this.assert.equal(result.value, "WHEN WAS IT LAST USED?");
                })
                this.waitForElementVisible("@calendarIcon")
                this.click("@calendarIcon")
                this.waitForElementVisible('@calendarleftnav')
                this.click('@calendarleftnav')
                this.pause(8000)
                this.waitForElementVisible("@calendarDate", 4000)
                this.click("@calendarDate")
                this.waitForElementVisible("@globalNextButton")
                this.assert.visible("@globalNextButton")
                this.getText("@globalNextButton", function (result) {
                    this.assert.equal(result.value, "GET QUOTE")
                })
                this.click("@globalNextButton")
                this.pause(5000)
                return this.api;
            },

        }
    ]
};






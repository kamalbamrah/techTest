const phoneDetails = require("../data/phoneData.json")

let p
let q
module.exports = {
    elements: {
        globalHeader: 'header > h1 > span',
        quoteDeviceDetails: {
            selector: '//*[@id="Main"]/div/section/div/div[2]/div/div[1]/span',
            locatorStrategy: 'xpath'
        },
        quoteDevicePrice: 'div > h4',
        quoteNumber: 'div > div > dd:nth-child(2)',
        paymentButton: 'div:nth-child(3) > a'

    },
    commands: [
        {
            verifyQuoteDetails() {
                this.pause(5000)
                this.getText("@globalHeader", function (result) {
                    this.assert.equal(result.value, 'YOUR QUOTE FOR FULL PRODUCT PROTECTION');
                })
                this.api.elements('css selector', 'div.row > dd', function (array) {
                    for (var x = 0; x < array.value.length; x++) {
                        this.elementIdAttribute(array.value[x].ELEMENT, 'innerText', function (data) {
                            console.log('Quote details : ', data.value)
                        })
                    }
                })
                return this.api;
            },

            getQuoteFromUrl() {
                this.api.url(function (result) {
                    str1 = result.value
                    str2 = str1.split('/')
                    p = str2[5].substring(0, 15)
                })
                return this.api;
            },

            verifyQuoteNumber() {
                this.getText('@quoteNumber', function (result) {
                    q = result.value
                })
                this.assert.equal(p, q)
                return this.api;
            },

            getDeviceInfo() {
                let str
                this.getText('xpath', '//*[@id="Main"]/div/section/div/div[2]/div/div[1]/span', function (result) {
                    str = result.value.toString().split(" ")
                    this.assert.equal(phoneDetails.make.toUpperCase(), str[1])
                })
                return this.api;
            },

            getPriceInfo() {
                this.getText('@quoteDevicePrice', function (result) {
                    price = result.value.match(/\d+(,\d+)?/)[0]
                    this.assert.equal(phoneDetails.price, price)
                })
                return this.api;
            },

            getPaymentButtonLink() {
                this.api.getAttribute("div:nth-child(3) > a", "href", function (attrib) {
                    console.log('Payment button link: ', attrib.value)
                })
                return this.api;
            },

            getPaymentButtonText() {
                this.getText('@paymentButton', function (result) {
                    this.assert.equal(result.value, 'PROCEED TO PAYMENT');
                })
                return this.api;
            }
        }
    ]
};
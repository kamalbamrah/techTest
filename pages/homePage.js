module.exports = {
    elements: {

        image: 'div > a > img',
        getQuoteButton: ' div > ul > a'
    },
    commands: [
        {
            verifyHomePage() {
                //this.assert.title('XCover | Award-Winning & Global: Product Insurance, Travel Insurance, Auto Insurance, Shipping Insurance | XCover.com');
                this.assert.title('XCover.com')
                this.getAttribute('@image', 'alt', function (result) {
                    this.assert.equal(result.value, 'XCover.com')
                });
                return this.api;
            },
            clickGetQuoteButton() {
                this.waitForElementVisible('@getQuoteButton', 4000)
                this.click('@getQuoteButton', 4000);
                return this.api;
            }
        }
    ]
}

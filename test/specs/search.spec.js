import { expect } from "chai";
import indexPage from "../pageobjects/index.page"

describe('Search functionality without sign in', () => {

    beforeEach(() => {
        indexPage.open()
    })

    it('should be able to seach a product and view details', () => {
        expect(indexPage.searchProduct('Printed Dress')
            .openProductDetails('Printed Dress')
            .addToCartButton.isDisplayed()).to.be.true;
    });

    it('should show alert message when no products are found', () => {
        expect(indexPage.searchProduct('Jeans')
            .getAlertMessage()).to.contain('No results were found for your search');
    });
})
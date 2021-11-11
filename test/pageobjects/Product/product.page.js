import BasePage from "../basePage";
import shoppingCartPage from "../ShoppingCart/shoppingCart.page";

class ProductPage extends BasePage {
    locator = {
        PRICE_TEXT: '#our_price_display',
        ADD_TO_CART_BUTTON: '#add_to_cart',
        PROCEED_TO_CHECKOUT_BUTTON: 'a[title="Proceed to checkout"]'
    }

    get price() { return $(this.locator.PRICE_TEXT); }
    get addToCartButton() { return $(this.locator.ADD_TO_CART_BUTTON); }
    get proceedToCheckoutButton() { return $(this.locator.PROCEED_TO_CHECKOUT_BUTTON); }

    getPrice() {
        return this.price.getText();
    }

    addProductToCart() {
        browser.pause(2000)
        this.addToCartButton.click();
        browser.pause(5000)
        return this
    }

    proceedToCheckout() {
        this.proceedToCheckoutButton.click();
        return shoppingCartPage;
    }
}

export default new ProductPage();
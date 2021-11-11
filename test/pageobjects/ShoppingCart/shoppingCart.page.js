import BasePage from "../basePage";
import orderHistoryPage from "../OrderHistory/orderHistory.page";

class ShoppingCartPage extends BasePage {
    locator = {
        PRODUCT_PRICE_TEXT: '#total_product',
        PRODUCT_SHIPPING_CHARGES_TEXT: '#total_shipping',
        PRODUCT_TAX_TEXT: '#total_tax',
        TOTAL_PRICE: '#total_price',
        PROCEED_TO_CHECKOUT_BUTTON: 'p.cart_navigation a[title="Proceed to checkout"]',
        ADDRESS_PROCEED_TO_CHECKOUT_BUTTON: 'button[name="processAddress"]',
        TERMS_OF_SERVICE_CHECKBOX: 'input[type="checkbox"]',
        CARRIER_PROCEED_TO_CHECKOUT_BUTTON: 'button[name="processCarrier"]',
        PAYMENT_BANKWIRE_BUTTON: 'a[title="Pay by bank wire"]',
        CONFIRM_ORDER_BUTTON: '//span[text()="I confirm my order"]',
        ORDER_CONFIRMATION_TEXT: 'p[class="cheque-indent"]',
        BACK_TO_ORDERS_BUTTON: 'a[title="Back to orders"]'
    }

    get productPrice() { return $(this.locator.PRODUCT_PRICE_TEXT); }
    get shippingPrice() { return $(this.locator.PRODUCT_SHIPPING_CHARGES_TEXT); }
    get taxPrice() { return $(this.locator.PRODUCT_TAX_TEXT); }
    get totalPrice() { return $(this.locator.TOTAL_PRICE); }
    get proceedToCheckoutButton() { return $(this.locator.PROCEED_TO_CHECKOUT_BUTTON); }
    get addressProceedToCheckoutButton() { return $(this.locator.ADDRESS_PROCEED_TO_CHECKOUT_BUTTON); }
    get termsOfServiceCheckbox() { return $(this.locator.TERMS_OF_SERVICE_CHECKBOX); }
    get carrierProceedToCheckoutButton() { return $(this.locator.CARRIER_PROCEED_TO_CHECKOUT_BUTTON); }
    get paymentBankwireButton() { return $(this.locator.PAYMENT_BANKWIRE_BUTTON); }
    get confirmOrderButton() { return $(this.locator.CONFIRM_ORDER_BUTTON); }
    get orderConfirmationText() { return $(this.locator.ORDER_CONFIRMATION_TEXT); }
    get backToOrdersButton() { return $(this.locator.BACK_TO_ORDERS_BUTTON); }

    getProductPrice() {
        return this.productPrice.getText();
    }

    getShippingPrice() {
        return this.shippingPrice.getText();
    }

    getTaxPrice() {
        return this.taxPrice.getText();
    }

    getTotalPrice() {
        return this.totalPrice.getText();
    }

    clickProceedToCheckout() {
        this.proceedToCheckoutButton.click();
        return this;
    }

    clickAddressProceedToCheckout() {
        this.addressProceedToCheckoutButton.click();
        return this;
    }

    clickShippingProceedToCheckout() {
        this.termsOfServiceCheckbox.click();
        this.carrierProceedToCheckoutButton.click();
        return this;
    }

    clickPayUsingBankwire() {
        this.paymentBankwireButton.click();
        return this;
    }

    clickConfirmOrder() {
        this.confirmOrderButton.click();
        return this;
    }

    goBackToOrders() {
        this.backToOrdersButton.click();
        return orderHistoryPage;
    }

    getOrderConfirmationText() {
        return this.orderConfirmationText.getText();
    }
}

export default new ShoppingCartPage();
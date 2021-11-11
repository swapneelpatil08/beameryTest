import BasePage from "../basePage";
import productPage from "./product.page";

class ProductListPage extends BasePage {
    locator = {
        T_SHIRT_LINK: '//div//ul//li[3]/a[@title="T-shirts"]',
        PRICE_TEXT: 'div[class="right-block"] span[itemprop="price"]',
    }

    get tShirtLink() { return $(this.locator.T_SHIRT_LINK); }
    get price() { return $(this.locator.PRICE_TEXT); }

    product(name) { return $('//ul[@class="product_list grid row"]//h5/a[contains(., "' + name + '")]'); }

    gotoTShirtSection() {
        this.tShirtLink.click();
        return this;
    }

    getPrice() {
        return this.price.getText();
    }

    openProductDetails(productName) {
        this.product(productName).click();
        return productPage;
    }
}

export default new ProductListPage();
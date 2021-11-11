import BasePage from "./basePage";
import loginPage from "./login.page";
import productListPage from "./Product/productList.page";

class IndexPage extends BasePage {

    open() {
        super.open('/');
        return this;
    }

    locator = {
        SIGN_IN_BUTTON: 'a.login',
        SEARCH_INPUT: 'input[placeholder="Search"]',
        SEARCH_BUTTON: 'button[name="submit_search"]'
    }

    get signInButton() { return $(this.locator.SIGN_IN_BUTTON); }
    get searchInput() { return $(this.locator.SEARCH_INPUT); }
    get searchButton() { return $(this.locator.SEARCH_BUTTON); }


    goToSignInPage() {
        this.signInButton.click();
        return loginPage;
    }

    searchProduct(productName) {
        this.searchInput.setValue(productName);
        this.searchButton.click();
        return productListPage;
    }
}

export default new IndexPage();
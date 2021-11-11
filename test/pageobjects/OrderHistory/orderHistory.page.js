import BasePage from "../basePage";

class OrderHistoryPage extends BasePage {
    locator = {
        ORDERS: 'table tbody tr',
    }

    get orderCount() { return $$(this.locator.ORDERS); }

    getOrderCount() {
        return this.orderCount.length;
    }
}

export default new OrderHistoryPage();
import BasePage from "../basePage";

class MyAccountPage extends BasePage {

    locator = {
        SIGN_OUT_BUTTON: 'a.logout',
        ORDER_HOSTORY_DETAILS_BUTTON: 'a[title="Orders"]',
        MY_CREDIT_SLIPS_BUTTON: 'a[title="Credit slips"]',
        MY_ADDRESSES_BUTTON: 'a[title="Addresses"]',
        PERSONAL_INFORMATION_BUTTON: 'a[title="Information"]',
    }

    get signOutButton() { return $(this.locator.SIGN_OUT_BUTTON); }
    get orderHistoryAndDetailsButton() { return $(this.locator.ORDER_HOSTORY_DETAILS_BUTTON); }
    get myCreditSlipsButton() { return $(this.locator.MY_CREDIT_SLIPS_BUTTON); }
    get myAddressesButton() { return $(this.locator.MY_ADDRESSES_BUTTON); }
    get personalInformationButton() { return $(this.locator.PERSONAL_INFORMATION_BUTTON); }

}

export default new MyAccountPage();
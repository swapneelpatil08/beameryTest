import BasePage from "../basePage";
import myAccountPage from "../MyAccount/myAccount.page";

class RegistationPage extends BasePage {
    locator = {
        // YOUR PERSONAL INFORMATION section:
        TITLE_MR_RADIO_BUTTON: '#uniform-id_gender1',
        TITLE_MRS_RADIO_BUTTON: '#uniform-id_gender2',
        FIRST_NAME_INPUT: 'input[name="customer_firstname"]',
        LAST_NAME_INPUT: 'input[name="customer_lastname"]',
        EMAIL_INPUT: 'input[name="email"]',
        PASSWORD_INPUT: '#passwd',
        DOB_DAY_INPUT: '#uniform-days',
        DOB_MONTH_INPUT: '#uniform-months',
        DOB_YEAR_INPUT: '#years',
 
        // YOUR ADDRESS Section
        ADDRESS_FIRST_NAME_INPUT: 'input[name="firstname"]',
        ADDRESS_LAST_NAME_INPUT: 'input[name="lastname"]',
        ADDRESS_COMPANY_INPUT: '#company',
        ADDRESS_LINE_1_INPUT: '#address1',
        ADDRESS_LINE_2_INPUT: '#address2',
        CITY_INPUT: '#city',
        STATE_DROPDOWN: '#id_state',
        POSTCODE_INPUT: '#postcode',
        COUNTRY_DROPDOWN: '#id_country',
        MOBILE_PHONE_INPUT: '#phone_mobile',
        ADDRESS_ALIAS_INPUT: '#alias',

        REGISTER_BUTTON: '#submitAccount'
    }
    
    // YOUR PERSONAL INFORMATION section:
    get titleMrRadioButton() { return $(this.locator.TITLE_MR_RADIO_BUTTON); }
    get titleMrsRadioButton() { return $(this.locator.TITLE_MRS_RADIO_BUTTON); }
    get firstNameInputBox() { return $(this.locator.FIRST_NAME_INPUT); }
    get lastNameInputBox() { return $(this.locator.LAST_NAME_INPUT); }
    get emailInputBox() { return $(this.locator.EMAIL_INPUT); }
    get passwordInputBox() { return $(this.locator.PASSWORD_INPUT); }
    get dobDayDropdown() { return $(this.locator.DOB_DAY_INPUT); }
    get dobMonthDropdown() { return $(this.locator.DOB_MONTH_INPUT); }
    get dobYearDropdown() { return $(this.locator.DOB_YEAR_INPUT); }

    // YOUR ADDRESS Section
    get addressFirstNameInputBox() { return $(this.locator.ADDRESS_FIRST_NAME_INPUT); }
    get addressLastNameInputBox() { return $(this.locator.ADDRESS_LAST_NAME_INPUT); }
    get compannyInputBox() { return $(this.locator.ADDRESS_COMPANY_INPUT); }
    get addressLine1InputBox() { return $(this.locator.ADDRESS_LINE_1_INPUT); }
    get addressLine2InputBox() { return $(this.locator.ADDRESS_LINE_2_INPUT); }
    get cityInputBox() { return $(this.locator.CITY_INPUT); }
    get stateDropdown() { return $(this.locator.STATE_DROPDOWN); }
    get postCodeInputBox() { return $(this.locator.POSTCODE_INPUT); }
    get countryDropdown() { return $(this.locator.COUNTRY_DROPDOWN); }
    get mobilePhoneInputBox() { return $(this.locator.MOBILE_PHONE_INPUT); }
    get addressAliasInputBox() { return $(this.locator.ADDRESS_ALIAS_INPUT); }

    get registerButton() { return $(this.locator.REGISTER_BUTTON); }

    fillRegistrationForm(title, firstname, lastname, email, password, dob, company, city) {
        this.fillPersonalInformation(title, firstname, lastname, email, password, dob);
        this.fillAddress(firstname, lastname, company, city, 'Alaska', '10001', '9876543210', 'Personal address');
        this.registerButton.click();
        return myAccountPage;
    }

    fillPersonalInformation(title, firstname, lastname, email, password, dob) {
        const birthdate = dob.split('-');
        if(title == 'Mr.') 
            this.titleMrRadioButton.click();
        else
            this.titleMrsRadioButton.click();

        this.firstNameInputBox.setValue(firstname);
        this.lastNameInputBox.setValue(lastname);
        this.emailInputBox.setValue(email);
        this.passwordInputBox.setValue(password);
        this.dobDayDropdown.selectByIndex(birthdate[0]);
        this.dobMonthDropdown.selectByIndex(birthdate[1]);
        this.dobYearDropdown.selectByAttribute('value', birthdate[2]);
        return this;
    }

    fillAddress(firstname, lastname, companyName, city, state, postCode, mobile, alias) {
        this.addressFirstNameInputBox.setValue(firstname);
        this.addressLastNameInputBox.setValue(lastname);
        this.compannyInputBox.setValue(companyName);
        this.addressLine1InputBox.setValue('BB-123, city road');
        this.cityInputBox.setValue(city);
        this.postCodeInputBox.setValue(postCode);
        this.stateDropdown.selectByAttribute('value', '2');
        this.mobilePhoneInputBox.setValue(mobile);
        this.addressAliasInputBox.setValue(alias);
        return this;
    }
}

export default new RegistationPage();
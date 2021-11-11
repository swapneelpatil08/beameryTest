import BasePage from "./basePage";
import registrationPage from "./Registration/registration.page";

class LoginPage extends BasePage {

    LoginPage() {
        super.open('/');
    }

    locator = {
        CREATE_ACCOUNT_EMAIL_INPUT: '#email_create',
        CREATE_NEW_ACCOUNT_BUTTON: '#SubmitCreate',
        EMAIL_INPUT: '#email',
        PASSWORD_INPUT: '#passwd',
        SIGNIN_BUTTON: '#SubmitLogin',
        FORGOT_PASSWORD_LINK: 'p.lost_password a'
    }

    get createAccounntEmailInputBox() { return $(this.locator.CREATE_ACCOUNT_EMAIL_INPUT);}

    get createNewAccounntButton() { return $(this.locator.CREATE_NEW_ACCOUNT_BUTTON);}

    get emailInputBox() { return $(this.locator.EMAIL_INPUT);}

    get passwordInputBox() { return $(this.locator.PASSWORD_INPUT);}

    get signInButton() { return $(this.locator.SIGNIN_BUTTON);}

    get forgotPasswordLink() { return $(this.locator.FORGOT_PASSWORD_LINK);}

    createNewAccount(email) {
        this.createAccounntEmailInputBox.addValue(email);
        this.createNewAccounntButton.click();
        this.createNewAccounntButton.click();
        return registrationPage;
    }

    signInWith(email, password) {
        this.emailInputBox.setValue(email);
        this.passwordInputBox.setValue(password);
        this.signInButton.click();
        
        return this;
    }
}

export default new LoginPage();
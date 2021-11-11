import { expect } from "chai";
import { getRandomNumber } from "../helper/util";
import indexPage from "../pageobjects/index.page";
import loginPage from "../pageobjects/login.page";
import myAccountPage from "../pageobjects/MyAccount/myAccount.page";
import { registraionData } from "../testdata/registrationData";

describe('Registration form', () => {
    const emailId = 'testBeam' + getRandomNumber() + '@gmail.com';
    console.log(emailId);
    const testData = registraionData;
    let isNegativeTest = false;

    beforeEach(() => {
        isNegativeTest = false;
        indexPage.open().goToSignInPage();
    });

    afterEach(() => {
        if (!isNegativeTest)
            myAccountPage.signOut();
    })

    it('should create new account', () => {
        expect(loginPage.getTitle()).to.equal('Login - My Store');

        let myAccountPage = loginPage
            .createNewAccount(emailId)
            .fillRegistrationForm(testData.title, testData.firstname, testData.lastname,
                emailId, testData.password, testData.dateOfBirth, testData.company, testData.city);

        expect(myAccountPage.getTitle()).to.equal('My account - My Store');
        expect(myAccountPage.signOutButton.isDisplayed()).equal(true);
    });

    it('should login with newly created account', () => {
        expect(loginPage.getTitle()).to.equal('Login - My Store');
        let myAccountPage = loginPage.signInWith(emailId, testData.password);

        expect(myAccountPage.getTitle()).to.equal('My account - My Store');
        expect(myAccountPage.signOutButton.isDisplayed()).equal(true);
    });

    it('should fail login with incorrect password', () => {
        isNegativeTest = true;
        loginPage.signInWith(emailId, testData.wrongPassword);

        expect(loginPage.getTitle()).to.not.equal('My account - My Store');
        expect(loginPage.getErrorMessage()).to.equal('There is 1 error');
    });
});
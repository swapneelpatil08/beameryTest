import { expect } from "chai";
import { getRandomNumber } from "../helper/util";
import indexPage from "../pageobjects/index.page";
import loginPage from "../pageobjects/login.page";
import { registraionData } from "../testdata/registrationData";
 
describe('Registration form', () =>{
    const emailId = 'testBeam' + getRandomNumber() + '@gmail.com';
    const testData = registraionData;
    
    beforeEach(() => {
        console.log(emailId);
        indexPage.open().goToSignInPage();
    });

    it('should create new account', () => {
        expect(loginPage.getTitle()).to.equal('Login - My Store');

        let myAccountPage = loginPage
                                .createNewAccount(emailId)
                                .fillRegistrationForm(testData.title, testData.firstname, testData.lastname, 
                                    emailId, testData.password, testData.dateOfBirth, testData.company, testData.city);

        expect(myAccountPage.getTitle()).to.equal('My account - My Store');
        expect(myAccountPage.signOutButton.isDisplayed()).equal(true);
    });
});
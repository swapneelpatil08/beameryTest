import { expect } from "chai";
import indexPage from "../pageobjects/index.page";

describe('navigate to site', () =>{

    it('should navigate to website', ()=>{
        expect(indexPage.open().goToSignInPage().getTitle()).to.equal('Login - My Store')
    })
});
// import { expect } from "chai";
// import { getRandomNumber } from "../helper/util";
// import indexPage from "../pageobjects/index.page";
// import productListPage from "../pageobjects/Product/productList.page";
// import { registraionData } from "../testdata/registrationData";
// import { orderData } from "../testdata/orderData";
// import shoppingCartPage from "../pageobjects/ShoppingCart/shoppingCart.page";
// import myAccountPage from "../pageobjects/MyAccount/myAccount.page";

// describe('Order a product', () => {
//     const emailId = 'testBeam' + getRandomNumber() + '@gmail.com';
//     console.log(emailId);
//     const testData = registraionData;

//     before(() => {
//         indexPage.open()
//             .goToSignInPage()
//             .createNewAccount(emailId)
//             .fillRegistrationForm(testData.title, testData.firstname, testData.lastname,
//                 emailId, testData.password, testData.dateOfBirth, testData.company, testData.city);
//     })

//     after(() => {
//         myAccountPage.signOut();
//     });

//     it('should be able to add product into cart with same product price', () => {
//         let productPage = productListPage.gotoTShirtSection()
//             .openProductDetails(orderData.productName);
//         let productPrice = productPage.getPrice();
//         expect(productPage.addProductToCart().proceedToCheckout().getProductPrice()).to.equal(productPrice);
//     })

//     it('should show correct calculation in shopping cart', () => {
//         let productPrice = shoppingCartPage.getProductPrice().replace('$', '');
//         let shippingPrice = shoppingCartPage.getShippingPrice().replace('$', '');
//         let taxPrice = shoppingCartPage.getTaxPrice().replace('$', '');
//         let expectedPrice = parseFloat(productPrice + shippingPrice + taxPrice).toFixed(2);
//         expect(shoppingCartPage.getProductPrice().replace('$', '')).to.equal(expectedPrice);
//     })

//     it('should be able to place an order', () => {
//         expect(shoppingCartPage.clickProceedToCheckout()
//             .clickAddressProceedToCheckout()
//             .clickShippingProceedToCheckout()
//             .clickPayUsingBankwire()
//             .clickConfirmOrder()
//             .getOrderConfirmationText()).to.equal('Your order on My Store is complete.');
//     })

//     it('should be able to see order in history', () => {
//         expect(shoppingCartPage.goBackToOrders()
//             .getOrderCount()).to.equal(1);
//     })
// });
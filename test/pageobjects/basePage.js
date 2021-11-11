
export default class BasePage {

     open(path) {
         return browser.url(path)
     }

    getTitle() {
         return browser.getTitle();
     }
}
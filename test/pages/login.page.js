//const Page = require(' ./Page')
const Page = require('./page');
console.log(Page);

class LoginPage extends Page{
    //definisikan locator dari element
    get usernameInput(){
        return $('email');
    }

    get Page(){
        return $('https://kasirdemo.vercel.app/login');
    }

    get passwordInput(){
        return $('password');
    }

    get loginButton(){
        return $('#login');
    }


    get errorMsg(){
        return $('//*[@data-test="error"]');
    }

    //definisikan action/interaksi yang akan dilakukan pada element tersebut

    async login(email,password){
        //masukin email
        await this.usernameInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
        await this.Page.open(page);
    }

    async assertErrorMessage(expectedErrorMessage){
        await expectedErrorMessage(this.errorMsg).toHaveTextContaining(expectedErrorMessage); 
    }

    async getErrorMessage(){
        return this.errorMsg.getText();
    }
}
module.exports = new LoginPage();

//definisikan action/interaksi yang akan dilakukan pada element tersebut

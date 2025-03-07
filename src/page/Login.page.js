const {BasePage} = require('./Base.page');

export class LoginPage extends BasePage {
    get userName() {return this.page.getByRole('textbox', {name:'Username'})};

    get password() {return this.page.getByRole('textbox', {name:'Password'})};

    get loginBtn() {return this.page.getByRole('button', {name: 'Login'})};

    get error() {return this.page.getByRole('heading', {name: 'Epic sadface: Username and password do not match any user in this service'})};

    async performLogin(userName, password){
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.loginBtn.click();
    };
}
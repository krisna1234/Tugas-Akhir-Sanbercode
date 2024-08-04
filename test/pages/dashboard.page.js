const Page = require('./page');

class inventoryPage extends Page{
    constDashboardPageUrl = 'https://kasirdemo.vercel.app/dashboard'
    get DashboardPageUrl(){
        return 'https://kasirdemo.vercel.app/dashboard'

    }

    async assertDashboardUrl(parents){
        await expect(browser).toHaveUrl(this.DashboardPageUrl)
    }
}

module.exports - new DashboardPage();

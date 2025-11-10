export default class GlobalData{
    static Instance = new GlobalData();
    constructor() {
        this.ComponentKeys = {
            HeaderComponent: "header-component",
            FooterComponent: "footer-component",
            HomeSite: "home-site",
        };

        this.AppRef = null;
    };
};
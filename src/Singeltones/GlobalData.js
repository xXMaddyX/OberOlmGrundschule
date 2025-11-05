export default class GlobalData{
    static Instance = new GlobalData();
    constructor() {
        this.ComponentKeys = {
            HeaderComponent: "header-component",
            FooterComponent: "footer-component"
        };
    };
};
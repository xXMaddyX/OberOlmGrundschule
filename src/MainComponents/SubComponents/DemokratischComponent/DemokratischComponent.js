import MakeSubSiteNav from "../../../Singeltones/MakeSubSiteNavigation.js";

export default class DemokratischComponent extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        const rawHTML = await fetch("src/MainComponents/SubComponents/DemokratischComponent/DemokratischComponent.html");
        const HTML = await rawHTML.text();
        this.shadow.innerHTML = HTML;
        
        MakeSubSiteNav.Instance.createSiteNavigation(this);
    }
}
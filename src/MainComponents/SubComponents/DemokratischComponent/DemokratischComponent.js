import MakeSubSiteNav from "../../../Singeltones/MakeSubSiteNavigation.js";
import DemokratischComponentHTML from "./DemokratischComponentHTML.js";

export default class DemokratischComponent extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        //const rawHTML = await fetch("src/MainComponents/SubComponents/DemokratischComponent/DemokratischComponent.html");
        //const HTML = await rawHTML.text();
        this.shadow.innerHTML = DemokratischComponentHTML;
        
        MakeSubSiteNav.Instance.createSiteNavigation(this);
    }
}
import MakeSubSiteNav from "../../../Singeltones/MakeSubSiteNavigation.js";
import KinderHTML from "./KinderHTML.js";

export default class KinderComponent extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        //const rawHTML = await fetch("src/MainComponents/SubComponents/KinderComponent/Kinder.html");
        //const HTML = await rawHTML.text();
        this.shadow.innerHTML = KinderHTML;

        MakeSubSiteNav.Instance.createSiteNavigation(this);
    }
}
import MakeSubSiteNav from "../../../Singeltones/MakeSubSiteNavigation.js";
import SchuleDerZukunftHTML from "./SchuleDerZukunftHTML.js";

export default class SchuleDerZukunftComponent extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        //const rawHTML = await fetch("src/MainComponents/SubComponents/SchuleDerZukunftComponent/SchuleDerZukunft.html");
        //const HTML = await rawHTML.text();
        this.shadow.innerHTML = SchuleDerZukunftHTML;

        MakeSubSiteNav.Instance.createSiteNavigation(this);
    }
}
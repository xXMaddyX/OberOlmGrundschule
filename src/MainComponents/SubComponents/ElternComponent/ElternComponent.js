import MakeSubSiteNav from "../../../Singeltones/MakeSubSiteNavigation.js";
import ElternHTML from "./ElternHTML.js";

export default class ElternComponent extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        const rawHTML = await fetch("src/MainComponents/SubComponents/ElternComponent/Eltern.html");
        const HTML = await rawHTML.text();
        this.shadow.innerHTML = HTML;

        MakeSubSiteNav.Instance.createSiteNavigation(this);
    }
}
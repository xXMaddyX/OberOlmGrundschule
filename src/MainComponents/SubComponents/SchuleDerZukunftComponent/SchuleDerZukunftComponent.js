import MakeSubSiteNav from "../../../Singeltones/MakeSubSiteNavigation.js";

export default class SchuleDerZukunftComponent extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        const rawHTML = await fetch();
        const HTML = rawHTML.text();
        this.shadow.innerHTML = HTML;

        MakeSubSiteNav.Instance.createSiteNavigation(this);
    }
}
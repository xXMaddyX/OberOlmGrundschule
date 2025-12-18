import MakeSubSiteNav from "../../../Singeltones/MakeSubSiteNavigation.js";
import Impressum_DatenschutzHTML from "./Impressum_DatenschutzHTML.js";

export default class ImpressumComponent extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        //const rawHTML = await fetch("src/MainComponents/sites/impressum_datenschutz/Impressum_Datenschutz.html");
        //const HTML = await rawHTML.text();
        this.shadow.innerHTML = Impressum_DatenschutzHTML;

        MakeSubSiteNav.Instance.createSiteNavigation(this);
    }
}
import MakeSubSiteNav from "../../../Singeltones/MakeSubSiteNavigation.js";
import NeusUndAktuellesHTML from "./NeuesUndAktuellesComponentHTML.js";

export default class NeuesUndAktuellesComponent extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };
    async connectedCallback() {
        //const rawHTML = await fetch("src/MainComponents/SubComponents/NeuesUndAktuellesComponent/NeuesUndAktuelles.html");
        //const HTML = await rawHTML.text();
        this.shadow.innerHTML = NeusUndAktuellesHTML;


        MakeSubSiteNav.Instance.createSiteNavigation(this);
    }
}
import SoLernenWirHTML from "./SoLernenWirHTML.js";
import MakeSubSiteNav from "../../../Singeltones/MakeSubSiteNavigation.js";

export default class SoLernenWirComponent extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
        
    }
    async connectedCallback() {
        //const rawHTML = await fetch("src/MainComponents/SubComponents/SoLernenWirComponent/SoLernenWir.html");
        //const HTML = await rawHTML.text();
        this.shadow.innerHTML = SoLernenWirHTML;

        MakeSubSiteNav.Instance.createSiteNavigation(this);
    };
}
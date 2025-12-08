import MakeSubSiteNav from "../../../Singeltones/MakeSubSiteNavigation.js";
import UnserTeamHTML from "./UnserTeamHTML.js";

export default class UnserTeamComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        //let rawHTML = await fetch("src/MainComponents/SubComponents/UnserTeam/UnserTeam.html");
        //let HTML = await rawHTML.text();
        this.shadow.innerHTML = UnserTeamHTML;

        MakeSubSiteNav.Instance.createSiteNavigation(this);
    };
};
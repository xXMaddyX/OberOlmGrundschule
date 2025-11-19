import HomeHTML from "./HomeSite.HTML.js";

export default class HomeSite extends HTMLElement{
    static get observedAttributes() {
        return []
    };
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        //SET UNCOMANTED FOR DEVELOPMENT
        //let rawhtml = await fetch("src/MainComponents/sites/HomeSite/Home.html")
        //let HTML = await rawhtml.text();
        this.shadow.innerHTML = HomeHTML
    };

    attributeChangedCallback(name, oldValue, newValue) {

    };
};
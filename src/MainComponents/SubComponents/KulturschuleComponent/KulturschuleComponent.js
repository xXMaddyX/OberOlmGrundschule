import KulturschuleHTMLComponent from "./Kulturschule.HTML.js";

export default class KulturschuleElement extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        //let rawHTML = await fetch("src/MainComponents/SubComponents/KulturschuleComponent/Kulturschule.html");
        //let HTML = await rawHTML.text();
        this.shadow.innerHTML = KulturschuleHTMLComponent;
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }

    disconnectedCallback() {

    }
}
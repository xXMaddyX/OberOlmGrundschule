import FooterHTML from "./FooterComponentHTML.js";

export default class FooterComponent extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        const rawHTML = await fetch("src/MainComponents/Footer/footer.html");
        const HTML = await rawHTML.text();

        this.shadow.innerHTML = FooterHTML;
    };
};
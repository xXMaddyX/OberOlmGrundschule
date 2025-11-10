export default class HomeSite extends HTMLElement{
    static get observedAttributes() {
        return []
    };
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        let rawhtml = await fetch("src/MainComponents/sites/HomeSite/Home.html")
        let HTML = await rawhtml.text();
        this.shadow.innerHTML = HTML
    };

    attributeChangedCallback(name, oldValue, newValue) {

    };

    disconnectedCallback() {

    };
};
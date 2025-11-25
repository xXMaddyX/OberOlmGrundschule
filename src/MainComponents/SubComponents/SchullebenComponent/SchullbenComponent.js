export default class SchullbenComponent extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        //const rawHTML = await fetch();
        //const HTML = await rawHTML.text();
    }
}
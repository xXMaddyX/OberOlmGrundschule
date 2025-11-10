import leavesHTML from "./leaves.HTML.js";


export default class Leaves extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        this.shadow.innerHTML = leavesHTML
    };
};
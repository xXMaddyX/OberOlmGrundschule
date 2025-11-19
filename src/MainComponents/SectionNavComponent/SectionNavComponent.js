import SectionNavComponentHTML from "./SectionNavComponentHTML.js";

export default class SectionNavComponent extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
        /**@type {HTMLElement} */
        this.ParentRef = this.getRootNode();
        /**@type {HTMLTemplateElement} */
    };
    async connectedCallback() {
        //let rawHTML = await fetch("src/MainComponents/SectionNavComponent/SectionNavComponent.html");
        //let HTML = await rawHTML.text();
        this.shadow.innerHTML = SectionNavComponentHTML;

        this.template = this.ParentRef.getElementById("nav-element-template");
        this.templateContent = this.template.content;
        this.Node = this.templateContent.cloneNode(true);
        this.shadow.appendChild(this.Node);

        let buttonNameAttr = this.getAttribute("button-name");
        let buttonTarget = this.getAttribute("nav-target");
        /**@type {HTMLButtonElement} */
        let button = this.shadow.querySelector("#nav-element-button");
        button.setAttribute("nav-target", buttonTarget);
        button.textContent = buttonNameAttr;

        
    }
}
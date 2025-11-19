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
        const navElement = this.shadow.querySelector("section-nav-component");
        if (navElement) navElement.parentShadow = this.shadow;
        
        this.navListElements = this.shadow.querySelectorAll(".section-nav-element")
        this.navListElements.forEach(/**@type {HTMLButtonElement}*/(button) => {
            button.addEventListener("click", () => {
                let target = button.getAttribute("nav-target");
                let targetElement = this.shadow.querySelector(`section[name="${target}"]`)
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" })
            })
        })
    }
    
    attributeChangedCallback(name, oldValue, newValue) {}
    disconnectedCallback() {}
}
import KulturschuleHTMLComponent from "./Kulturschule.HTML.js";

export default class KulturschuleElement extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
        this.eventlistenerPool = [];
    };
    
    async connectedCallback() {
        //let rawHTML = await fetch("src/MainComponents/SubComponents/KulturschuleComponent/Kulturschule.html");
        //let HTML = await rawHTML.text();
        this.shadow.innerHTML = KulturschuleHTMLComponent;
        const navElement = this.shadow.querySelector("section-nav-component");
        if (navElement) navElement.parentShadow = this.shadow;
        
        this.navListElements = this.shadow.querySelectorAll(".section-nav-element")
        this.navListElements.forEach(/**@type {HTMLButtonElement}*/(button) => {
            let listener = button.addEventListener("click", () => {
                let target = button.getAttribute("nav-target");
                let targetElement = this.shadow.querySelector(`section[name="${target}"]`)
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" })
            })
            this.eventlistenerPool.push(listener);
        })

        /**@type {HTMLButtonElement} */
        this.toggleSiteNavButton = this.shadow.querySelector("#open-site-nav");
        this.siteNavList = this.shadow.querySelector("#nav-section-list");
        
        this.toggleSiteNavButtonListener = this.toggleSiteNavButton.addEventListener("click", () => {
            this.siteNavList.classList.toggle("active");
        })

        this.toggleSiteNavButtonBlure = this.toggleSiteNavButton.addEventListener("blur", () => {
            this.siteNavList.classList.remove("active");
            this.toggleSiteButton.classList.remove("active");
        });

        /**@type {HTMLButtonElement} */
        this.toggleSiteButtonListener = this.toggleSiteButton = this.shadow.querySelector("#open-site-nav");
        this.toggleSiteButton.addEventListener("click", () => {
            this.toggleSiteButton.classList.toggle("active")
        })
    }
    
    attributeChangedCallback(name, oldValue, newValue) {}
    disconnectedCallback() {
        this.eventlistenerPool.forEach(item => window.removeEventListener(item));
        window.removeEventListener(this.toggleSiteNavButtonListener);
        window.removeEventListener(this.toggleSiteNavButtonBlure);
        window.removeEventListener(this.toggleSiteButtonListener);
    }
}
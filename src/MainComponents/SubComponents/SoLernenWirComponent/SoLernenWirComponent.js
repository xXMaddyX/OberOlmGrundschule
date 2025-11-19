export default class SoLernenWirComponent extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
        
    }
    async connectedCallback() {
        const rawHTML = await fetch("src/MainComponents/SubComponents/SoLernenWirComponent/SoLernenWir.html");
        const HTML = await rawHTML.text();
        this.shadow.innerHTML = HTML;

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

        /**@type {HTMLButtonElement} */
        this.toggleSiteNavButton = this.shadow.querySelector("#open-site-nav");
        this.siteNavList = this.shadow.querySelector("#nav-section-list");
        
        this.toggleSiteNavButton.addEventListener("click", () => {
            this.siteNavList.classList.toggle("active");
        })

        this.toggleSiteNavButton.addEventListener("blur", () => {
            this.siteNavList.classList.remove("active");
            this.toggleSiteButton.classList.remove("active");
        });

        /**@type {HTMLButtonElement} */
        this.toggleSiteButton = this.shadow.querySelector("#open-site-nav");
        this.toggleSiteButton.addEventListener("click", () => {
            this.toggleSiteButton.classList.toggle("active")
        })
    };
}
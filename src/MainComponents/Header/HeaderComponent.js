import { OwlImage } from "../../Assets/AssetLoader";

export default class HeaderComponent extends HTMLElement{
    constructor() {
        super();
        /**@type {ShadowRoot} */
        this.shadow = this.attachShadow({mode: "open"});
        /**@type {HTMLDivElement} */
        this.ImageContainer = null;
        this.isActive = false;
    };

    async connectedCallback() {
        const rawHTML = await fetch("src/MainComponents/Header/header.html")
        const HTML = await rawHTML.text();
        this.shadow.innerHTML = HTML
        this.initElementRefs();
        this.addImageToHeader();

        /**@type {HTMLButtonElement} */
        this.ToggleButton = this.shadow.querySelector(".mobile-menu-toggle");
        this.ToggleButton.addEventListener("blur", () => {
            this.ToggleButton.classList.remove("active")
            this.NavListElement.classList.remove("isActive");
            this.isActive = false;
        })
        this.ToggleButton.addEventListener("click", () => {
            this.isActive = !this.isActive
            this.toggleMobileMenue();
        });
        /**@type {HTMLUListElement} */
        this.NavListElement = this.shadow.querySelector("#nav-list");
    };

    initElementRefs() {
        this.ImageContainer = this.shadow.querySelector("#image-container");
    };

    addImageToHeader() {
        const OwlImageElement = document.createElement("img");
        OwlImageElement.id = "owl-img"
        OwlImageElement.src = OwlImage;
        this.ImageContainer.append(OwlImageElement)
    };

    toggleMobileMenue() {
        if (this.isActive) {
            this.NavListElement.classList.add("isActive");
        } else {
            this.NavListElement.classList.remove("isActive");
        }
    };
};
import { OwlImage } from "../../Assets/AssetLoader";

export default class HeaderComponent extends HTMLElement{
    constructor() {
        super();
        /**@type {ShadowRoot} */
        this.shadow = this.attachShadow({mode: "open"});

        /**@type {HTMLDivElement} */
        this.ImageContainer = null;
    };

    async connectedCallback() {
        const rawHTML = await fetch("src/MainComponents/Header/header.html")
        const HTML = await rawHTML.text();
        this.shadow.innerHTML = HTML
        this.initElementRefs();
        this.addImageToHeader();
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
};
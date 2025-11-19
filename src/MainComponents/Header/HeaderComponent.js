import { OwlImage } from "../../Assets/AssetLoader";
import GlobalData from "../../Singeltones/GlobalData.js";
import HeaderComponentHtml from "./HeaderComponentHTML.js";

const routes = {
    "#home": "home-site",
    "#demo": "",
    "#news": "",
    "#kult": "kulturschule-site",
    "#team": "",
    "#living": ""
}

export default class HeaderComponent extends HTMLElement{
    constructor() {
        super();
        /**@type {ShadowRoot} */
        this.shadow = this.attachShadow({mode: "open"});
        /**@type {HTMLDivElement} */
        this.ImageContainer = null;
        /**@type {boolean} */
        this.isActive = false;
        /**@type {HTMLElement} */
        this.App = GlobalData.Instance.AppRef;
    };

    async connectedCallback() {
        //SET UNCOMENTED FOR DEVELOPMENT
        //const rawHTML = await fetch("src/MainComponents/Header/header.html")
        //const HTML = await rawHTML.text();
        this.shadow.innerHTML = HeaderComponentHtml;
        this.initElementRefs();
        this.addImageToHeader();
        this.addListener();

        /**@type {HTMLButtonElement} */
        this.ToggleButton = this.shadow.querySelector(".mobile-menu-toggle");
        this.ToggleButton.addEventListener("blur", () => {
            this.ToggleButton.classList.remove("active");
            this.NavListElement.classList.remove("isActive");
            this.isActive = false;
        })
        this.ToggleButton.addEventListener("click", () => {
            this.isActive = !this.isActive;
            this.toggleMobileMenue();
        });
        /**@type {HTMLUListElement} */
        this.NavListElement = this.shadow.querySelector("#nav-list");
    };

    initElementRefs() {
        this.ImageContainer = this.shadow.querySelector("#image-container");
        this.NavItems = this.shadow.querySelectorAll(".nav-items");
    };

    addListener() {
        this.NavItems.forEach((/**@type {HTMLOListElement}*/item) => {
            item.addEventListener("click", (e) => {
                let target = e.currentTarget.getAttribute("name");
                if (target) {
                    window.location.hash = target
                    this.routing(target);
                };
            });
        });
    };

    addImageToHeader() {
        const OwlImageElement = document.createElement("img");
        OwlImageElement.id = "owl-img";
        OwlImageElement.src = OwlImage;
        this.ImageContainer.append(OwlImageElement);
    };

    toggleMobileMenue() {
        if (this.isActive) {
            this.NavListElement.classList.add("isActive");
        } else {
            this.NavListElement.classList.remove("isActive");
        };
    };

    routing(link) {
        /**@type {string} */
        let elementToRender = routes[link] || "not-found";
        this.App.innerHTML = "";

        if (elementToRender === "not-found") {
            const Err = document.createElement("h1");
            Err.textContent = "404 Not Found";
            this.App.append(Err);
        } else {
            let item = document.createElement(elementToRender);
            this.App.append(item);
        };
    };
};
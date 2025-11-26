import MakeSubSiteNav from "../../../Singeltones/MakeSubSiteNavigation.js";
import SchullebenComponentHTML from "./SchullebenComponentHTML.js";
import SchullebenData from "./SchullebenData.js";

export default class SchullebenComponent extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        const rawHTML = await fetch("src/MainComponents/SubComponents/SchullebenComponent/Schulleben.html");
        const HTML = await rawHTML.text();
        this.shadow.innerHTML = HTML;

        MakeSubSiteNav.Instance.createSiteNavigation(this);
        this.addRefsToElems();
        this.generateElements();
    }

    addRefsToElems() {
        this.AGSRef = this.shadow.querySelector(".AGS");
    }

    generateElements() {
        SchullebenData.forEach(({header, imagesSrc, text}) => {
            /**@type {HTMLSpanElement} */
            const SpanElement = document.createElement("span");
            SpanElement.style.height = "1px"
            SpanElement.style.width = "80%"
            SpanElement.style.backgroundColor = "black"
            this.AGSRef.append(SpanElement);

            /**@type {HTMLDivElement} */
            const elementContainer = document.createElement("div");
            elementContainer.classList.add("ags-element-container");

            /**@type {HTMLHeadingElement} */
            const headerElem = document.createElement("h2");
            headerElem.style.alignSelf = "center"
            headerElem.textContent = header;
            elementContainer.append(headerElem);

            /**@type {HTMLDivElement} */
            const imageContainer = document.createElement("div");
            imageContainer.classList.add("ags-element-img-container");

            imagesSrc.forEach(/**@type {string}*/(item) => {
                /**@type {HTMLImageElement} */
                const imgItem = document.createElement("img");
                imgItem.src = item;
                imageContainer.append(imgItem);
            });

            elementContainer.append(imageContainer);

            /**@type {HTMLParagraphElement} */
            const textElem = document.createElement("p");
            textElem.textContent = text;
            elementContainer.append(textElem);

            
            this.AGSRef.append(elementContainer);
        });
    }
}
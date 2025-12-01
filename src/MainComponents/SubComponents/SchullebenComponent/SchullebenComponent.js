import MakeSubSiteNav from "../../../Singeltones/MakeSubSiteNavigation.js";
import SchullebenComponentHTML from "./SchullebenComponentHTML.js";
import { SchullebenData, SchullebenDataKooperationen, SchullebenDataHausordung } from "./SchullebenData.js";

export default class SchullebenComponent extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        //const rawHTML = await fetch("src/MainComponents/SubComponents/SchullebenComponent/Schulleben.html");
        //const HTML = await rawHTML.text();
        this.shadow.innerHTML = SchullebenComponentHTML;

        MakeSubSiteNav.Instance.createSiteNavigation(this);
        this.addRefsToElems();
        this.generateElements();
        this.generateKooperation();
        this.generateHausordung();
    }

    addRefsToElems() {
        this.AGSRef = this.shadow.querySelector(".AGS");
        this.KoopRef = this.shadow.querySelector(".kooperationen");
        this.HausordungRef = this.shadow.querySelector(".haus-ordnung");
    }

    generateHausordung() {
        SchullebenDataHausordung.forEach(({header, textArr}) => {
            /**@type {HTMLDivElement} */
            const elementContainer = document.createElement("div");
            elementContainer.classList.add("hausordung-element-container");
            
            /**@type {HTMLHeadingElement} */
            const headerElem = document.createElement("h2");
            headerElem.textContent = header;
            elementContainer.append(headerElem);
            
            textArr.forEach((item) => {
                let textarrElem = document.createElement("p");
                textarrElem.textContent = item;
                elementContainer.append(textarrElem);
            });

            const SpanElement = document.createElement("span");
            SpanElement.classList.add("spacer-elem");

            this.HausordungRef.append(SpanElement, elementContainer);
        });

    }

    generateKooperation() {
        SchullebenDataKooperationen.forEach(({header, text, link, linktext}) => {
            /**@type {HTMLDivElement} */
            const elementContainer = document.createElement("div");
            elementContainer.classList.add("koop-element-container");

            /**@type {HTMLHeadingElement} */
            const headerElem = document.createElement("h2");
            headerElem.textContent = header;
            elementContainer.append(headerElem);

            /**@type {HTMLParagraphElement} */
            const textElem = document.createElement("p");
            textElem.textContent = text;
            elementContainer.append(textElem);

            if (link && linktext) {
                /**@type {HTMLLinkElement} */
                const linkElem = document.createElement("a");
                linkElem.classList.add("koop-link-button");
                linkElem.textContent = linktext;
                linkElem.href = link;
                elementContainer.append(linkElem);
            }

            const SpanElement = document.createElement("span");
            SpanElement.classList.add("spacer-elem");

            this.KoopRef.append(SpanElement, elementContainer);
        });
    }

    generateElements() {
        SchullebenData.forEach(({header, imagesSrc, text}) => {
            /**@type {HTMLSpanElement} */
            const SpanElement = document.createElement("span");
            SpanElement.classList.add("spacer-elem")
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
                imgItem.loading = "lazy";
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
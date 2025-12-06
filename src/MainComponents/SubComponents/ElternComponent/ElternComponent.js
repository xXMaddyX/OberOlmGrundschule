import MakeSubSiteNav from "../../../Singeltones/MakeSubSiteNavigation.js";
import ElternComponentData from "./ElternComponentData.js";
import ElternHTML from "./ElternHTML.js";

export default class ElternComponent extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        const rawHTML = await fetch("src/MainComponents/SubComponents/ElternComponent/Eltern.html");
        const HTML = await rawHTML.text();
        this.shadow.innerHTML = HTML;

        MakeSubSiteNav.Instance.createSiteNavigation(this);

        this.initRefs();
        this.render();
    }

    initRefs() {
        this.sebClass = this.shadow.querySelector(".seb");
    }

    render() {
        this.renderSEBCards();
    }

    renderSEBCards() {
        ElternComponentData.forEach(({imageLink, headingH1, cardName, cardNameDes, cardList, cardFooterLine}) => {
            /**@type {HTMLDivElement} */
            const Card = document.createElement("div");
            Card.classList.add("seb-card-container");

            /**@type {HTMLImageElement} */
            const CardImage = document.createElement("img");
            CardImage.src = imageLink;

            /**@type {HTMLHeadingElement} */
            const CardHeading = document.createElement("h1");
            CardHeading.innerText = headingH1;

            /**@type {HTMLHeadingElement} */
            const CardName = document.createElement("h2");
            CardName.innerText = cardName;

            /**@type {HTMLParagraphElement} */
            const CardNameDes = document.createElement("p");
            CardNameDes.innerText = cardNameDes;

            const CardListElement = this.renderSevListElem(cardList);

            /**@type {HTMLHeadingElement} */
            const CardFooter = document.createElement("h2");
            CardFooter.innerText = cardFooterLine;

            Card.append(
                CardImage,
                CardHeading,
                CardName,
                CardNameDes,
                CardListElement,
                CardFooter
            );
            this.sebClass.append(Card);
        })

    }
    renderSevListElem(cardList) {
        /**@type {HTMLDivElement} */
        const ListContainer = document.createElement("div");
        ListContainer.classList.add("seb-card-list-elem")

        /**@type {HTMLHeadingElement} */
        const CardListHeading = document.createElement("h2");
        CardListHeading.innerText = cardList.listHeading;

        /**@type {HTMLUListElement} */
        const ListBody = document.createElement("ul");

        cardList.listPoints.forEach((item) => {
            /**@type {HTMLLIElement} */
            let listElem = document.createElement("li");
            listElem.innerText = item;
            ListBody.appendChild(listElem);
        });

        ListContainer.append(
            CardListHeading,
            ListBody,
        );
        return ListContainer;
    }
}
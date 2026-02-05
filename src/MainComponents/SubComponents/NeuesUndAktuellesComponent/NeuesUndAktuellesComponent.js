import MakeSubSiteNav from "../../../Singeltones/MakeSubSiteNavigation.js";
import NeusUndAktuellesHTML from "./NeuesUndAktuellesComponentHTML.js";
import Termine from "./NeuesUndAktuellesTermine.js";

export default class NeuesUndAktuellesComponent extends HTMLElement{
    constructor() {
        super();
        this.CurrentMonth = "";
        this.shadow = this.attachShadow({mode: "open"});
    };
    async connectedCallback() {
        //const rawHTML = await fetch("src/MainComponents/SubComponents/NeuesUndAktuellesComponent/NeuesUndAktuelles.html");
        //const HTML = await rawHTML.text();
        this.shadow.innerHTML = NeusUndAktuellesHTML;
        this.currentIndex = 0;

        MakeSubSiteNav.Instance.createSiteNavigation(this);
        this.initCarlenderNav();
        this.renderTermine();
    }

    renderTermine() {
        this.terminDisplayer.innerHTML = "";
        Termine[this.currentIndex].forEach(element => {
            if (element.month) {
                this.CurrentMonth = element.month;
            }
            if (!element.month) {
                this.createTerminElements(element)
            }
        });
    }

    createTerminElements(dataArr) {
        /**@type {HTMLElement} */
        const container = document.createElement("div");
        container.classList.add("calendar-item");

        const heading = document.createElement("h2");
        heading.innerText = dataArr.heading
        container.append(heading);

        const date = document.createElement("p");
        date.innerText = dataArr.date;
        container.append(date);

        if (dataArr.discription != "") {
            const discription = document.createElement("p");
            discription.innerText = dataArr.discription;
            container.append(discription);
        }

        this.terminDisplayer.append(container)
    }

    initCarlenderNav() {
         this.NumberDisplay = this.shadow.querySelector("#termin-page-display");
         this.NumberDisplay.innerText = Termine[0][0].month;
         this.terminDisplayer = this.shadow.querySelector("#termin-displayer");

        this.leftTerminBtn = this.shadow.querySelector("#termin-btn-left");
        this.leftTerminBtn.addEventListener("click", () => {
            if (this.currentIndex == 0) {
                this.currentIndex = 0;
            } else {
                this.currentIndex -= 1
            }
            this.renderTermine();
            this.NumberDisplay.innerText = this.CurrentMonth;
        });

        this.rightTerminBtn = this.shadow.querySelector("#termin-btn-right");
        this.rightTerminBtn.addEventListener("click", () => {
            if (this.currentIndex >= Termine.length -1) {
                this.currentIndex = Termine.length -1;
            } else {
                this.currentIndex += 1
            }
            this.renderTermine();
            this.NumberDisplay.innerText = this.CurrentMonth;
        })

    }
}
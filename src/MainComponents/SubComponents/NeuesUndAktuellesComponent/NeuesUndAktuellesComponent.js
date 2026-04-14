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
        this.shadow.innerHTML = NeusUndAktuellesHTML;

        const currentMonth = new Date().getMonth() + 1;
        const idx = Termine.findIndex(m => parseInt(m.monthNative) >= currentMonth);
        this.currentIndex = idx !== -1 ? idx : 0;

        MakeSubSiteNav.Instance.createSiteNavigation(this);
        this.initCarlenderNav();
        this.renderTermine();
    }

    renderTermine() {
        this.terminDisplayer.innerHTML = "";
        const monthData = Termine[this.currentIndex];
        this.NumberDisplay.innerText = monthData.month;
        monthData.days.forEach(day => {
            this.createTerminElements(day);
        });
    }

    createTerminElements(dataArr) {
        const currentDate = new Date().toLocaleDateString();
        /**@type {HTMLElement} */
        const container = document.createElement("div");
        container.classList.add("calendar-item");

        let [day, month, year] = currentDate.split(".")
        let [dayData, monthData, yearData] = dataArr.dateNative.split(".")

        if (day == dayData && month == monthData && year == yearData) {
            container.style.backgroundColor = "orange"
        }
        
        if (
            Number(month) == Number(monthData) && 
            Number(dayData) < Number(day) + 3 && 
            Number(dayData) > Number(day)
        ) {
            container.style.backgroundColor = "yellow"
        }

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
         this.NumberDisplay.innerText = 0;
         this.terminDisplayer = this.shadow.querySelector("#termin-displayer");

        this.leftTerminBtn = this.shadow.querySelector("#termin-btn-left");
        this.leftTerminBtn.addEventListener("click", () => {
            if (this.currentIndex > 0) this.currentIndex -= 1;
            this.renderTermine();
        });

        this.rightTerminBtn = this.shadow.querySelector("#termin-btn-right");
        this.rightTerminBtn.addEventListener("click", () => {
            if (this.currentIndex < Termine.length - 1) this.currentIndex += 1;
            this.renderTermine();
        });

    }
}
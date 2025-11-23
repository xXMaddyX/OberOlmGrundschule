import './style.css'
import "./Assets/AssetLoader.js"
import GlobalData from './Singeltones/GlobalData.js';
import { OwlImage } from './Assets/AssetLoader.js';
import HomeSite from './MainComponents/sites/HomeSite/HomeSite.js';
import Leaves from './MainComponents/leaves/leaves.js';
import KulturschuleElement from './MainComponents/SubComponents/KulturschuleComponent/KulturschuleComponent.js';
import SectionNavComponent from './MainComponents/SectionNavComponent/SectionNavComponent.js';
import SoLernenWirComponent from './MainComponents/SubComponents/SoLernenWirComponent/SoLernenWirComponent.js';
import NeuesUndAktuellesComponent from './MainComponents/SubComponents/NeuesUndAktuellesComponent/NeuesUndAktuellesComponent.js';

//customElements.define(GlobalData.Instance.ComponentKeys.HeaderComponent, HeaderComponent);
customElements.define(GlobalData.Instance.ComponentKeys.Leaves, Leaves);
customElements.define("home-site", HomeSite);
customElements.define("kulturschule-site", KulturschuleElement);
customElements.define("section-nav-component", SectionNavComponent);
customElements.define("so-lernen-wir-site", SoLernenWirComponent);
customElements.define("neues-und-aktuelles-site", NeuesUndAktuellesComponent);

const routes = {
    "#home": "home-site",
    "#solernenwir": "so-lernen-wir-site",
    "#news": "neues-und-aktuelles-site",
    "#kult": "kulturschule-site",
    "#team": "",
    "#living": ""
}

const AppHeader = document.querySelector("#header-section");
const App = document.querySelector("#app");
let isActive = false;
let ImageContainer = null;
let NavItems = null;
let NavListElement = null;

const initElementRefs = () => {
        ImageContainer = document.querySelector("#image-container");
        NavItems = document.querySelectorAll(".nav-items");
};

const addListener = () => {
  NavItems.forEach((/**@type {HTMLOListElement}*/item) => {
    item.addEventListener("click", (e) => {
      let target = e.currentTarget.getAttribute("name");
      if (target) {
        window.location.hash = target
        routing(target);
      };
    });
  });
};

const addImageToHeader = () => {
  const OwlImageElement = document.createElement("img");
  OwlImageElement.id = "owl-img";
  OwlImageElement.src = OwlImage;
  ImageContainer.append(OwlImageElement);
};

const toggleMobileMenue = () => {
  if (isActive) {
    NavListElement.classList.add("isActive");
  } else {
    NavListElement.classList.remove("isActive");
  };
};

const routing = (link) => {
  /**@type {string} */
  let elementToRender = routes[link] || "not-found";
  App.innerHTML = "";

  if (elementToRender === "not-found") {
    const Err = document.createElement("h1");
    Err.textContent = "404 Not Found";
    App.append(Err);
  } else {
    let item = document.createElement(elementToRender);
    App.append(item);
  };
};

const initNavBar = () => {
  initElementRefs();
  addImageToHeader();
  addListener();

  /**@type {HTMLButtonElement} */
        const ToggleButton = document.querySelector(".mobile-menu-toggle");
        ToggleButton.addEventListener("blur", () => {
            ToggleButton.classList.remove("active");
            NavListElement.classList.remove("isActive");
            isActive = false;
        })
        ToggleButton.addEventListener("click", () => {
            isActive = !isActive;
            toggleMobileMenue();
        });
        /**@type {HTMLUListElement} */
        NavListElement = document.querySelector("#nav-list");
}

const initApp = () => {
  GlobalData.Instance.AppRef = App;
  const hashRoute = window.location.hash;
  AddHeader();
  LoadHomeSiteOnLoad();
  AddleavesBackground();
  AddBackToTopButton();
  initNavBar();
  if (hashRoute === "") {
    routing("#home")
  } else {
    routing(hashRoute);
  }
}

const AddleavesBackground = () => {
  let leavesElement = document.createElement(GlobalData.Instance.ComponentKeys.Leaves);
  leavesElement.id = "leave-elem"
  document.querySelector("body").append(leavesElement);
};

const AddHeader = () => {
  const HeaderComponent = document.createElement(GlobalData.Instance.ComponentKeys.HeaderComponent);
  AppHeader.append(HeaderComponent);
}

const AddBackToTopButton = () => {
  /**@type {HTMLButtonElement} */
  const backToTopButton = document.querySelector("#back-to-Top");
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({top, behavior: "smooth"})
  })
}

const LoadHomeSiteOnLoad = () => {
  let homeSite = document.createElement(GlobalData.Instance.ComponentKeys.HomeSite);
  GlobalData.Instance.AppRef.append(homeSite)
}
initApp();
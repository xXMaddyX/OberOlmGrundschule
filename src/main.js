import './style.css'
import "./Assets/AssetLoader.js"
import GlobalData from './Singeltones/GlobalData.js';
import HeaderComponent from './MainComponents/Header/HeaderComponent.js';
import HomeSite from './MainComponents/sites/HomeSite/HomeSite.js';
import Leaves from './MainComponents/leaves/leaves.js';
import KulturschuleElement from './MainComponents/SubComponents/KulturschuleComponent/KulturschuleComponent.js';
import SectionNavComponent from './MainComponents/SectionNavComponent/SectionNavComponent.js';

customElements.define(GlobalData.Instance.ComponentKeys.HeaderComponent, HeaderComponent);
customElements.define(GlobalData.Instance.ComponentKeys.Leaves, Leaves);
customElements.define("home-site", HomeSite);
customElements.define("kulturschule-site", KulturschuleElement);
customElements.define("section-nav-component", SectionNavComponent);


const AppHeader = document.querySelector("#header-section");
const App = document.querySelector("#app");


const initApp = () => {
  GlobalData.Instance.AppRef = App;
  AddHeader();
  LoadHomeSiteOnLoad();
  AddleavesBackground();
  AddBackToTopButton();
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
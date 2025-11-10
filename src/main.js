import './style.css'
import "./Assets/AssetLoader.js"
import GlobalData from './Singeltones/GlobalData.js';
import HeaderComponent from './MainComponents/Header/HeaderComponent.js';
import FooterComponent from './MainComponents/Footer/FooterComponent.js';
import HomeSite from './MainComponents/sites/HomeSite/HomeSite.js';
import Leaves from './MainComponents/leaves/leaves.js';

customElements.define(GlobalData.Instance.ComponentKeys.HeaderComponent, HeaderComponent);
customElements.define(GlobalData.Instance.ComponentKeys.FooterComponent, FooterComponent);
customElements.define(GlobalData.Instance.ComponentKeys.Leaves, Leaves);
customElements.define("home-site", HomeSite);


const AppHeader = document.querySelector("#header-section");
const App = document.querySelector("#app");
/**@type {HTMLElement} */
const AppBackground = document.querySelector("#background-wrapper");
const AppFooter = document.querySelector("#footer-section");

const initApp = () => {
  GlobalData.Instance.AppRef = App;
  AddHeader();
  LoadHomeSiteOnLoad();
  AddleavesBackground();
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

const LoadHomeSiteOnLoad = () => {
  let homeSite = document.createElement(GlobalData.Instance.ComponentKeys.HomeSite);
  GlobalData.Instance.AppRef.append(homeSite)
}

initApp();
import './style.css'
import "./Assets/AssetLoader.js"
import GlobalData from './Singeltones/GlobalData.js';
import HeaderComponent from './MainComponents/Header/HeaderComponent.js';
import FooterComponent from './MainComponents/Footer/FooterComponent.js';

customElements.define(GlobalData.Instance.ComponentKeys.HeaderComponent, HeaderComponent);
customElements.define(GlobalData.Instance.ComponentKeys.FooterComponent, FooterComponent);


const AppHeader = document.querySelector("#header-section");
const App = document.querySelector("#app");
const AppFooter = document.querySelector("#footer-section");

const initApp = () => {
  const HeaderComponent = document.createElement(GlobalData.Instance.ComponentKeys.HeaderComponent);
  AppHeader.append(HeaderComponent);
}

initApp();
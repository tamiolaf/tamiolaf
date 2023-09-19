import data from '../../copy/seefood.json'
import PortfolioItem from '../PortfolioItem';
import logo from '../../img/SeeFood/Logos/seefood-logo.png';
import logoBinoculars from '../../img/SeeFood/Logos/seefood-binoc.png';
import businessCardFront from '../../img/SeeFood/BusinessCard/seefood-business-card-front.png';
import businessCardBack from '../../img/SeeFood/BusinessCard/seefood-business-card-back.png'
import appsScriptScreenshot1 from '../../img/SeeFood/AppsScriptSite/screenshot1.png';
import appsScriptScreenshot2 from '../../img/SeeFood/AppsScriptSite/screenshot2.png';
import staticSiteScreenshot1 from '../../img/SeeFood/StaticSite/screenshot1.png';
import staticSiteScreenshot2 from '../../img/SeeFood/StaticSite/screenshot2.png';
import staticSiteScreenshot3 from '../../img/SeeFood/StaticSite/screenshot3.png';
import staticSiteScreenshot4 from '../../img/SeeFood/StaticSite/screenshot4.png';
import staticSiteScreenshot5 from '../../img/SeeFood/StaticSite/screenshot5.png';
import staticSiteScreenshot6 from '../../img/SeeFood/StaticSite/screenshot6.png';
import staticSiteScreenshot7 from '../../img/SeeFood/StaticSite/screenshot7.png';
import webAppScreenshot1 from '../../img/SeeFood/WebApp/screenshot1.png';
import webAppScreenshot2 from '../../img/SeeFood/WebApp/screenshot2.png';
import webAppScreenshot3 from '../../img/SeeFood/WebApp/screenshot3.png';
import webAppScreenshot4 from '../../img/SeeFood/WebApp/screenshot4.png';
import webAppScreenshot5 from '../../img/SeeFood/WebApp/screenshot5.png';
import webAppScreenshot6 from '../../img/SeeFood/WebApp/screenshot6.png';
import webAppScreenshot7 from '../../img/SeeFood/WebApp/screenshot7.png';
import webAppScreenshot8 from '../../img/SeeFood/WebApp/screenshot8.png';
import webAppScreenshot9 from '../../img/SeeFood/WebApp/screenshot9.png';
import webAppScreenshot10 from '../../img/SeeFood/WebApp/screenshot10.png';
import webAppScreenshot11 from '../../img/SeeFood/WebApp/screenshot11.png';
import webAppScreenshot12 from '../../img/SeeFood/WebApp/screenshot12.png';
import webAppScreenshot13 from '../../img/SeeFood/WebApp/screenshot13.png';
import webAppScreenshot14 from '../../img/SeeFood/WebApp/screenshot14.png';
import enterpreneurPic from '../../img/SeeFood/PeoplePics/enterpreneurSeeFood.jpg';
import groupGogglesPic from '../../img/SeeFood/PeoplePics/groupGogglesPic.jpg';
import chikfilaEventGif from '../../img/SeeFood/PeoplePics/chikfilaEvent.gif';
import soloTablingEvent from '../../img/SeeFood/PeoplePics/soloTablingEvent.jpg';
import soloGogglesPic from '../../img/SeeFood/PeoplePics/soloGogglesPic.jpg';

const galleryMap = new Map([
  ["Overview", [
    logo,
    logoBinoculars,
    businessCardFront,
    businessCardBack
  ]],
  ["Bot Solutions", [
    appsScriptScreenshot1,
    appsScriptScreenshot2,
  ]],
  ["Landing Page", [
    staticSiteScreenshot1,
    staticSiteScreenshot2,
    staticSiteScreenshot3,
    staticSiteScreenshot4,
    staticSiteScreenshot5,
    staticSiteScreenshot6,
    staticSiteScreenshot7
  ]],
  ["Web App", [
    webAppScreenshot1,
    webAppScreenshot2,
    webAppScreenshot3,
    webAppScreenshot4,
    webAppScreenshot5,
    webAppScreenshot6,
    webAppScreenshot7,
    webAppScreenshot8,
    webAppScreenshot9,
    webAppScreenshot10,
    webAppScreenshot11,
    webAppScreenshot12,
    webAppScreenshot13,
    webAppScreenshot14,
  ]],
  ["Impact", [
    soloTablingEvent,
    enterpreneurPic,
    chikfilaEventGif,
    soloGogglesPic,
    groupGogglesPic
  ]]
]);

const SeeFood = () => {
  return (
    <dov>
      <PortfolioItem data={data} galleryMap={galleryMap}/>
      <p>For more details including an interview about SeeFood, please see this <a className="home_link" href="https://medium.com/@tamiolaf/see-food-the-free-food-event-calendar-e342f69f6cf7">article</a>.</p>
    </dov>
  )
}
export default SeeFood;

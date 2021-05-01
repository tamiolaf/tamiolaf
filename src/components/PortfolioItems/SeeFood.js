import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Logo from '../../img/SeeFood/Logos/SeeFoodLogo.png';
import AppsScriptScreenshot1 from '../../img/SeeFood/AppsScriptSite/screenshot1.png';
import AppsScriptScreenshot2 from '../../img/SeeFood/AppsScriptSite/screenshot2.png';
import StaticSiteScreenshot1 from '../../img/SeeFood/StaticSite/screenshot1.png';
import StaticSiteScreenshot2 from '../../img/SeeFood/StaticSite/screenshot2.png';
import StaticSiteScreenshot3 from '../../img/SeeFood/StaticSite/screenshot3.png';
import StaticSiteScreenshot4 from '../../img/SeeFood/StaticSite/screenshot4.png';
import StaticSiteScreenshot5 from '../../img/SeeFood/StaticSite/screenshot5.png';
import StaticSiteScreenshot6 from '../../img/SeeFood/StaticSite/screenshot6.png';
import StaticSiteScreenshot7 from '../../img/SeeFood/StaticSite/screenshot7.png';
import WebAppScreenshot1 from '../../img/SeeFood/WebApp/screenshot1.png';
import WebAppScreenshot2 from '../../img/SeeFood/WebApp/screenshot2.png';
import WebAppScreenshot3 from '../../img/SeeFood/WebApp/screenshot3.png';
import WebAppScreenshot4 from '../../img/SeeFood/WebApp/screenshot4.png';
import WebAppScreenshot5 from '../../img/SeeFood/WebApp/screenshot5.png';
import WebAppScreenshot6 from '../../img/SeeFood/WebApp/screenshot6.png';
import WebAppScreenshot7 from '../../img/SeeFood/WebApp/screenshot7.png';
import WebAppScreenshot8 from '../../img/SeeFood/WebApp/screenshot8.png';
import WebAppScreenshot9 from '../../img/SeeFood/WebApp/screenshot9.png';
import WebAppScreenshot10 from '../../img/SeeFood/WebApp/screenshot10.png';
import WebAppScreenshot11 from '../../img/SeeFood/WebApp/screenshot11.png';
import WebAppScreenshot12 from '../../img/SeeFood/WebApp/screenshot12.png';
import WebAppScreenshot13 from '../../img/SeeFood/WebApp/screenshot13.png';
import WebAppScreenshot14 from '../../img/SeeFood/WebApp/screenshot14.png';
// import enterpreneurPic from '../../img/SeeFood/PeoplePics/enterpreneurSeeFood.jpg';
// import soloGogglesPic from '../../img/SeeFood/PeoplePics/soloGogglesPic.jpg';
// import groupGogglesPic from '../../img/SeeFood/PeoplePics/groupGogglesPic.jpg';
// import chikfilaEventGif from '../../img/SeeFood/PeoplePics/chikfilaEvent.gif';


//dislplay screenshots on computers where you can "scroll down"
const SeeFood = () => 
{
    const AppsScriptCaousel = () => {
        return (
            <div class="carousel-wrapper">
                <Carousel>
                    <div><img src={AppsScriptScreenshot1} alt=""/></div>
                    <div><img src={AppsScriptScreenshot2} alt=""/></div>
                </Carousel>
            </div>
        )
    }

    const StaticSiteCarousel = () => {
        return (
            <div class="carousel-wrapper">
                <Carousel>
                    <div><img src={StaticSiteScreenshot1} alt=""/></div>
                    <div><img src={StaticSiteScreenshot2} alt=""/></div>
                    <div><img src={StaticSiteScreenshot3} alt=""/></div>
                    <div><img src={StaticSiteScreenshot4} alt=""/></div>
                    <div><img src={StaticSiteScreenshot5} alt=""/></div>
                    <div><img src={StaticSiteScreenshot6} alt=""/></div>
                    <div><img src={StaticSiteScreenshot7} alt=""/></div>
                </Carousel>
            </div>
        )
    }

    const WebAppCarousel = () => {
        return (
            <div class="carousel-wrapper">
                <Carousel>
                    <div><img src={WebAppScreenshot1} alt=""/></div>
                    <div><img src={WebAppScreenshot2} alt=""/></div>
                    <div><img src={WebAppScreenshot3} alt=""/></div>
                    <div><img src={WebAppScreenshot4} alt=""/></div>
                    <div><img src={WebAppScreenshot5} alt=""/></div>
                    <div><img src={WebAppScreenshot6} alt=""/></div>
                    <div><img src={WebAppScreenshot7} alt=""/></div>
                    <div><img src={WebAppScreenshot8} alt=""/></div>
                    <div><img src={WebAppScreenshot9} alt=""/></div>
                    <div><img src={WebAppScreenshot10} alt=""/></div>
                    <div><img src={WebAppScreenshot11} alt=""/></div>
                    <div><img src={WebAppScreenshot12} alt=""/></div>
                    <div><img src={WebAppScreenshot13} alt=""/></div>
                    <div><img src={WebAppScreenshot14} alt=""/></div>
                </Carousel>
            </div>
        )
    }

    return (
        <div>
            <article>
                <header>
                    <h1>SeeFood</h1>
                    <h2>The Food Event Calendar</h2>
                    <img src={Logo} alt={'SeeFood Logo'}/>
                </header>
                <main>
                    <div>
                        {AppsScriptCaousel()}
                    </div>
                    <div>
                        {StaticSiteCarousel()}
                    </div>
                    <div>
                        {WebAppCarousel()}
                    </div>
                    <div>
                        {/*consider making an embed for this? Maybe to add custom styles*/}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/azGCJujnUGU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    </div>
                </main>
            </article>
        </div>
    )
};



export default SeeFood;

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import election2020QCU from '../../img/BuzzFeed/election2020QCU/election2020QCU.png';
import ccpaFooterMobile from '../../img/BuzzFeed/ccpa/ccpa-footer-mobile.png';
import ccpaMenuMobile from '../../img/BuzzFeed/ccpa/ccpa-menu-mobile.png';
import fincenFilesBannerDesktop from '../../img/BuzzFeed/fincen-files/fincen-files-banner-desktop.png';
import fincenFilesBannerMobile from '../../img/BuzzFeed/fincen-files/fincen-files-banner-mobile.png';
import fincenFilesPackage1Mobile from '../../img/BuzzFeed/fincen-files/fincen-files-package-1-mobile.png';
import fincenFilesPackage1 from '../../img/BuzzFeed/fincen-files/fincen-files-package-1.png';
import fincenFilesPackage2Mobile from '../../img/BuzzFeed/fincen-files/fincen-files-package-2-mobile.png';
import fincenFilesPackage2 from '../../img/BuzzFeed/fincen-files/fincen-files-package-2.png';
import fincenFilesPackage3 from '../../img/BuzzFeed/fincen-files/fincen-files-package-3.png';
import fincenFilesPackage4 from '../../img/BuzzFeed/fincen-files/fincen-files-package-4.png';
import fincenFilesPackage5 from '../../img/BuzzFeed/fincen-files/fincen-files-package-5.png';
import nativeInstream1 from '../../img/BuzzFeed/native-instream/native-instream-1.png';
import nativeInstreamMobile from '../../img/BuzzFeed/native-instream/native-instream-iphone.png';
import nativeInstreamDesktop from '../../img/BuzzFeed/native-instream/native-instream-desktop.png';
import newsTickerMobileGif from '../../img/BuzzFeed/news-ticker/news-ticker-mobile.gif';
import newsTickerDesktop from '../../img/BuzzFeed/news-ticker/news-ticker-desktop.png';

const BuzzFeed = () => {
    const ccpaCarousel = () => {
        return (
            <div>
                <Carousel>
                    <div><img src={ccpaMenuMobile} alt=""/></div>
                    <div><img src={ccpaFooterMobile} alt=""/></div>
                </Carousel>
            </div>
        )
    }

    const fincenFilesPackageCarousel = () => {
        return (
            <div>
                <Carousel>
                    <div><img src={fincenFilesPackage1} alt=""/></div>
                    <div><img src={fincenFilesPackage2} alt=""/></div>
                    <div><img src={fincenFilesPackage3} alt=""/></div>
                    <div><img src={fincenFilesPackage4} alt="" /></div>
                    <div><img src={fincenFilesPackage5} alt=""/></div>
                    <div><img src={fincenFilesPackage1Mobile} alt=""/></div>
                    <div><img src={fincenFilesPackage2Mobile} alt=""/></div>
                </Carousel>
            </div>
        )
    }

    const fincenFilesBannerCarousel = () => {
        return (
            <div>
                <Carousel>
                    <div><img src={fincenFilesBannerDesktop} alt=""/></div>
                    <div><img src={fincenFilesBannerMobile} alt=""/></div>
                </Carousel>
            </div>
        )
    }

    const nativeInstreamCarousel = () => {
        return (
            <div>
                <Carousel>
                    <div><img src={nativeInstream1} alt=""/></div>
                    <div><img src={nativeInstreamMobile} alt=""/></div>
                    <div><img src={nativeInstreamDesktop} alt=""/></div>
                </Carousel>
            </div>
        )
    }

    const newsTickerCarousel = () => {
        return (
            <div>
                <Carousel>
                    <div><img src={newsTickerDesktop} alt=""/></div>
                    <div><img src={newsTickerMobileGif} alt=""/></div>
                </Carousel>
            </div>
        )
    }

    return (
        <div>
            <h1>BuzzFeed</h1>
            <h3>Things I'm working on</h3>

            <section>
                Ads Team
                <div>
                Native Instream Video Unit
                {nativeInstreamCarousel()}
                </div>
                <div>
                    BAM
                </div>
            </section>
            <section>
                BuzzFeed News
                <div>
                    FinCEN Files

                    {fincenFilesBannerCarousel()}
                    {fincenFilesPackageCarousel()}
                </div>

                <div>
                    News ticker
                    {newsTickerCarousel()}
                </div>
                <div>
                    2020 Election
                    <img src={election2020QCU} alt=""/>
                </div>
                <div>
                    ccpa
                    {ccpaCarousel()}
                </div>
            </section>
        </div>
    )

    {/* https://twitter.com/SchoofsFeed/status/1307726238027452416?s=20
    https://twitter.com/brknyc/status/1307760906131120128?s=20 */}
};

export default BuzzFeed;

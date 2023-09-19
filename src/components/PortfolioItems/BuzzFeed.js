import data from '../../copy/buzzfeed.json';
import PortfolioItem from '../PortfolioItem';
import nativeInstreamDesktop from '../../img/BuzzFeed/native-instream/native-instream-desktop.png';
import nativeInstream1 from '../../img/BuzzFeed/native-instream/native-instream-1.png';
import breakingTrendingBar from '../../img/BuzzFeed/breaking-trending-bar/breaking-trending-bar.png';
import fincenFilesBannerDesktop from '../../img/BuzzFeed/fincen-files/fincen-files-banner-desktop.png';
import fincenFilesBannerMobile from '../../img/BuzzFeed/fincen-files/fincen-files-banner-mobile.png';
import fincenFilesPackage1Mobile from '../../img/BuzzFeed/fincen-files/fincen-files-package-1-mobile.png';
import fincenFilesPackage1 from '../../img/BuzzFeed/fincen-files/fincen-files-package-1.png';
import fincenFilesPackage2Mobile from '../../img/BuzzFeed/fincen-files/fincen-files-package-2-mobile.png';
import fincenFilesPackage2 from '../../img/BuzzFeed/fincen-files/fincen-files-package-2.png';
import fincenFilesPackage3 from '../../img/BuzzFeed/fincen-files/fincen-files-package-3.png';
import fincenFilesPackage4 from '../../img/BuzzFeed/fincen-files/fincen-files-package-4.png';
import fincenFilesPackage5 from '../../img/BuzzFeed/fincen-files/fincen-files-package-5.png';
import newsTickerMobileGif from '../../img/BuzzFeed/news-ticker/news-ticker-mobile.gif';
import newsTickerDesktop from '../../img/BuzzFeed/news-ticker/news-ticker-desktop.png';
import election2020QCU from '../../img/BuzzFeed/election2020QCU/election2020QCU.png';
import branchIO from '../../img/BuzzFeed/branch-io/branch-io.png';
import ccpaFooterMobile from '../../img/BuzzFeed/ccpa/ccpa-footer-mobile.png';
import ccpaMenuMobile from '../../img/BuzzFeed/ccpa/ccpa-menu-mobile.png';

const galleryMap = new Map([
  ['Native Instream Video Unit', [nativeInstreamDesktop, nativeInstream1]],
  ['BAM (BuzzFeed Ad Manager)', []],
  ['Chinstrap', []],
  ['Trending/Breaking Bar', [breakingTrendingBar]],
  ['FinCEN Files', [
    fincenFilesBannerDesktop,
    fincenFilesBannerMobile,
    fincenFilesPackage1Mobile,
    fincenFilesPackage1,
    fincenFilesPackage2Mobile,
    fincenFilesPackage2,
    fincenFilesPackage3,
    fincenFilesPackage4,
    fincenFilesPackage5
  ]],
  ['News Ticker', [newsTickerDesktop, newsTickerMobileGif]],
  ['Election 2020', [election2020QCU]],
  ['Branch IO', [branchIO]],
  ['CCPA', [ccpaFooterMobile, ccpaMenuMobile]],
  ['Accessibility Team', []],
]);

const BuzzFeed = () => <PortfolioItem data={data} galleryMap={galleryMap}/>

export default BuzzFeed;

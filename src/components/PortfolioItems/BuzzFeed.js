import data from '../../copy/buzzfeed.json';
import PortfolioItemSection from '../PortfolioItemSection';
import nativeInstreamDesktop from '../../img/BuzzFeed/native-instream/native-instream-desktop.png';
import nativeInstream1 from '../../img/BuzzFeed/native-instream/native-instream-1.png';
import breakingTrendingBar from '../img/BuzzFeed/breaking-trending-bar/breaking-trending-bar.png';
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
import branchIO from '../img/BuzzFeed/branch-io/branch-io.png';
import ccpaFooterMobile from '../../img/BuzzFeed/ccpa/ccpa-footer-mobile.png';
import ccpaMenuMobile from '../../img/BuzzFeed/ccpa/ccpa-menu-mobile.png';

const galleryMap = new Map([
  ['Native Instream Video Unit', [nativeInstreamDesktop, nativeInstream1]],
  ['BAM (BuzzFeed Ad Manager)', []],
  ['Chinstrap', []],
  ['Trending/Breaking Bar', []],
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
  ['Branch IO', []],
  ['CCPA', [ccpaFooterMobile, ccpaMenuMobile]],
  ['Accessibility Team', []],
]);

const rowStyle = {
  display: "flex",
  flexWrap: "wrap",
  padding: "0 4px"
}

const colStyle = {
  flex: "25%",
  maxWidth: "25%",
  padding: "0 4px"
}

const imageDisplay = (title) => {
  switch(title) {
    case 'Native Instream Video Unit':
      return (
        <div style={colStyle} class="col">
          <div style={rowStyle} class="row">
            <img style={{'height':'25rem'}} src={nativeInstream1} />
            <img style={{'width':'100%'}}src={nativeInstreamDesktop} />
          </div>
        </div>
      )
    case 'BAM (BuzzFeed Ad Manager)':
      return (
        <div>
        </div>
      )
    case 'Chinstrap/Badges':
      return (
        <div>
          chinstrap pics
        </div>
      )
    case 'Trending/Breaking Bar':
      return (
        <div>
          breaking bar pics
        </div>
      )
    case 'FinCEN Files':
      return (
        <div style={colStyle} class="col">
          <div style={rowStyle} class="row">
            <img style={{'width': '100%'}} src={fincenFilesBannerDesktop} />
            <img src={fincenFilesBannerMobile} />
            <img src={fincenFilesPackage1Mobile} />
            <img src={fincenFilesPackage2Mobile} />
            <img src={fincenFilesPackage1} />
            <img src={fincenFilesPackage2} />
            <img src={fincenFilesPackage3} />
            <img src={fincenFilesPackage4} />
            <img src={fincenFilesPackage5} />
          </div>
        </div>
      )
    case 'Election 2020':
      return (
        <div>
          <img style={{'width': '100%'}} src={election2020QCU}/>
        </div>
      )
    case 'News Ticker':
      return (
        <div>
          <img src={newsTickerMobileGif}/>
          <img src={newsTickerDesktop}/>
          news ticker picks
        </div>
      )
    case 'Branch IO':
      return (
        <div>
          branch io pics
        </div>
      )
    case 'Accessibility Team':
      return (
        <div>
          Accessibility pics
        </div>
      )
    case 'CCPA':
      return (
        <div>
          <img src={ccpaFooterMobile}/>
          <img src={ccpaMenuMobile}/>
          ccpa footer mobile
        </div>
      )
    default: 
      return (
        <div>
          nothing
        </div>
      )
  }
}

const BuzzFeed = () => {
  return (
    <div>
      <h1>{data.title}</h1> 
      {data.sections.map((section, i) => {
        const sectionAndImages = {
        ...section,
        images: galleryMap.get(section.title)
        }
        return <PortfolioItemSection key={i} {...sectionAndImages} />
        
      })}
    </div>
  )
}

export default BuzzFeed;

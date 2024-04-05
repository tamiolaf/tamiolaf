import data from '../../copy/equals-equals.json';
import PortfolioItem from '../PortfolioItem';

import equalsEqualsLogo from '../../img/EqualsEquals/equalsEqualsLogo.jpg';
import equalsEqualsLogoMini from '../../img/EqualsEquals/equalsEqualsLogoMini.png';
import FirstPlacePic from '../../img/EqualsEquals/FirstPlacePic.jpg';
import SecondPlacePic from '../../img/EqualsEquals/SecondPlacePic.jpg';
import allWinnersPic from '../../img/EqualsEquals/allWinnersPic.jpg';
import equals_equals_flyer from '../../img/EqualsEquals/equals_equals_flyer.png';
import podiumPic from '../../img/EqualsEquals/podiumPic.jpg';
import judgingPic1 from '../../img/EqualsEquals/judgingPic1.jpg';

const galleryMap = new Map([
  ["Overview", [
    equalsEqualsLogo,
    equals_equals_flyer,
    equalsEqualsLogoMini,
  ]],

  ["Hackathon", [
    podiumPic,
    judgingPic1,
    FirstPlacePic,
    SecondPlacePic,
    allWinnersPic,
  ]]
])
const EqualsEquals = () => {
  return (
    <div>
      <PortfolioItem data={data} galleryMap={galleryMap}/>
      <p>
        Here was our <a href="https://docs.google.com/presentation/d/1X7s1h0Um4QkyGGtf4HdQlxc7-MnPZ5AISoj1UMVKFCQ/"> presentation </a> to kick off the hackday.
        And here's my <a href="https://docs.google.com/presentation/d/1hwNWNgbE4iO77YcHU0Y4fhiAlWnNTGy0C2G2Gm_FrQg/">presentation</a> for the Twitter Bot workshop (Twitter has changed dramatically and this may be outdated).
        This <a href="https://www.reddit.com/r/UMD/comments/axhaq2/upcoming_free_hackathon_this_weekend_march_910/">reddit</a> post and <a href="https://equals-equals.devpost.com/">devpost</a> page served as marketing material for Equals Equals 2019.
      </p>
    </div>
  )
};

export default EqualsEquals;

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
  ]],
  ["Subsequent Years", []]
])
const EqualsEquals = () => {
  return (
    <div>
      <PortfolioItem data={data} galleryMap={galleryMap}/>
      <h1>Equals Equals</h1>
      <h3>A hackathon for underrepresented minorities</h3>
     {/* <img src={equalsEqualsLogo} alt=''></img>*/}
    </div>
  )
};

export default EqualsEquals;

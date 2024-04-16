import data from '../../copy/code2040.json';
import PortfolioItem from '../PortfolioItem';

import rooftopEvent from '../../img/Code2040/rooftopEvent.JPG';
import careerFair from '../../img/Code2040/careerFair.jpg';
import faceCollage from '../../img/Code2040/faceCollage.jpg';

const galleryMap = new Map([
  ["Overview", [
    rooftopEvent,
    careerFair,
    faceCollage,
  ]],
])
const Code2040 = () => {
  return (
    <div>
      <PortfolioItem data={data} galleryMap={galleryMap}/>
      {console.log(galleryMap)}
    </div>
  )
}

export default Code2040;

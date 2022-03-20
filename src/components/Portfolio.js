import { Routes, Route } from 'react-router-dom';
import { BUZZFEED, SEEFOOD, MIT_DCI, EQUALS_EQUALS, CODE2040, ARDUINO_IPOD } from '../routes';
import Preview from './Preview';
import BuzzFeed from './PortfolioItems/BuzzFeed';
import SeeFood from './PortfolioItems/SeeFood';
import MITDCI from './PortfolioItems/MITDCI'
import EqualsEquals from './PortfolioItems/EqualsEquals';
import Code2040 from './PortfolioItems/Code2040';
import ArduinoIpod from './PortfolioItems/ArduinoIpod';
import { data } from '../PreviewData.js';

const ShowPreviews = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      {data.map(item => <Preview key={item.key} {...item}/>)}
    </div>
  )
}
function Portfolio() {

  return (
    <div>     
      <Routes>
        <Route path={'/'} element={ <ShowPreviews/>}/>
        <Route path={BUZZFEED} element={<BuzzFeed/>}/>
        <Route path={SEEFOOD} element={<SeeFood/>}/>
        <Route path={EQUALS_EQUALS} element={<EqualsEquals/>}/>
        <Route path={MIT_DCI} element={<MITDCI/>}/>
        <Route path={CODE2040} element={<Code2040/>}/>
        <Route path={ARDUINO_IPOD} element={<ArduinoIpod/>}/>
      </Routes>
    </div>

  )
}

export default Portfolio;

/*- order chonologically
            - make sure to include what I used to build the project
            separate undergrand a postgrad? */

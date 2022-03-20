import './scss/App.scss';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as routes from './routes';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Playground from './components/Playground';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import BuzzFeed from './components/PortfolioItems/BuzzFeed';
// import EqualsEquals from './components/PortfolioItems/EqualsEquals';
// import MITDCI from './components/PortfolioItems/MITDCI';
// import SeeFood from './components/PortfolioItems/SeeFood';

function App() {

  return (
    <div className="page__container" >

      <Router>
      <header>
        <Navbar/>
      </header>
      <Routes>
      {/*  <Route 
          path={routes.PORTFOLIO}
          render={({ match: { url } }) => (
            <>
              <Route path={`${url}/`} element={<Portfolio/>} /> */} 
       {/*       <Route path={`${url}${routes.BUZZFEED}`} component={BuzzFeed} /> */}
          {/*    <Route path={`${url}${routes.EQUALS_EQUALS}`} component={EqualsEquals} />  */}
             {/* <Route path={`${url}${routes.EQUALS_EQUALS}`} component={EqualsEquals} />  */}
            {/*  <Route path={`${url}${routes.MIT_DCI}`} component={MITDCI} />  */}
            {/*  <Route path={`${url}${routes.SEEFOOD}`} component={SeeFood} />  */}
            {/*</>
          )} 
            />*/}
        <Route path={routes.PORTFOLIO + '/*'} element={<Portfolio/>} />
        <Route path={routes.BLOG} element={<Blog/>} />
        <Route path={routes.ABOUT_ME} element={<AboutMe/>} />
        <Route path={routes.CONTACT} element={<Contact/>} />
        <Route path={routes.RESUME} element={<Resume/>} />
        <Route path={routes.PLAYGROUND} element={<Playground/>} />
        <Route exact path={`${routes.HOME}`} element={<Home/>} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;

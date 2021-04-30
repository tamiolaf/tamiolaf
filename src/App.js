import './App.scss';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as routes from './routes';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Playground from './components/Playground';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BuzzFeed from './components/PortfolioItems/BuzzFeed';
import EqualsEquals from './components/PortfolioItems/EqualsEquals';
import MITDCI from './components/PortfolioItems/MITDCI';
import SeeFood from './components/PortfolioItems/SeeFood';

function App() {

  return (
    <div className="" >

      <Router>
      <header>
        <Navbar/>
      </header>
      <Switch>
        <Route 
          path={routes.PORTFOLIO}
          render={({ match: { url } }) => (
            <>
              <Route path={`${url}/`} component={Portfolio} /> {/*exact />*/}
       {/*       <Route path={`${url}${routes.BUZZFEED}`} component={BuzzFeed} /> */}
          {/*    <Route path={`${url}${routes.EQUALS_EQUALS}`} component={EqualsEquals} />  */}
             {/* <Route path={`${url}${routes.EQUALS_EQUALS}`} component={EqualsEquals} />  */}
            {/*  <Route path={`${url}${routes.MIT_DCI}`} component={MITDCI} />  */}
            {/*  <Route path={`${url}${routes.SEEFOOD}`} component={SeeFood} />  */}
            </>
          )} 
        />
        <Route path={routes.BLOG} component={Blog} />
        <Route path={routes.ABOUT_ME} component={AboutMe} />
        <Route path={routes.CONTACT} component={Contact} />
        <Route path={routes.RESUME} component={Resume} />
        <Route path={routes.PLAYGROUND} component={Playground} />
        <Route exact path={routes.HOME} component={Home} />
      </Switch>
    </Router>

    </div>
  );
}

export default App;

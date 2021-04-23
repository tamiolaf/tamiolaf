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

function App() {

  return (
    <div className="">

      <Router>
      <header>
        <Navbar/>
      </header>
      <Switch>
        <Route path={routes.PORTFOLIO} component={Portfolio} />
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

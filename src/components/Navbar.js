import { NavLink } from 'react-router-dom'
import * as routes from '../routes';

// add active/inactive states for NavLinks based on hover and currently visiting
function Navbar() {
  return (
    <div>
      <nav>
        <ul className="navbar__container">
          <li><NavLink className="link" to={routes.HOME}>Home</NavLink></li>
          <li><NavLink className="link" to={routes.ABOUT_ME}>About Me</NavLink></li>
          <li><NavLink className="link" to={routes.PORTFOLIO}>Portfolio</NavLink></li>
          <li><a className="link" href={'https://medium.com/@tamiolaf'}>Blog</a></li>
          {/* <li><NavLink to={routes.BLOG}>Blog</NavLink></li> */}
          <li><NavLink className="link" to={routes.CONTACT}>Contact</NavLink></li>
          {/*  <li><NavLink to={routes.RESUME}>Resume</NavLink></li> */} {/* can i make this interactive somehow? more than just a pdf*/}
          {/*  <li><NavLink to={routes.PLAYGROUND}>Playground</NavLink></li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

import { NavLink } from 'react-router-dom'
import * as routes from '../routes';

// add active/inactive states for NavLinks based on hover and currently visiting
function Navbar() {
    return (
        <div style={{'backgroundColor': 'white'}}>
                <nav>
                    <ul style={{'listStyleType': 'none', 'display': 'flex', 'justifyContent':'space-around'}}>
                        <li><NavLink to={routes.HOME}>Home</NavLink></li>
                        <li><NavLink to={routes.PORTFOLIO}>Portfolio</NavLink></li>
                        <li><NavLink to={routes.BLOG}>Blog</NavLink></li>
                        <li><NavLink to={routes.ABOUT_ME}>About Me</NavLink></li>
                        <li><NavLink to={routes.CONTACT}>Contact</NavLink></li>
                        <li><NavLink to={routes.RESUME}>Resume</NavLink></li> {/* can i make this interactive somehow? more than just a pdf*/}
                        <li><NavLink to={routes.PLAYGROUND}>Playground</NavLink></li>
                    </ul>
                </nav>
        </div>
    );
}

export default Navbar;
// import { PORTFOLIO } from "../routes";
// import { Link } from 'react-router-dom';
import '../scss/AboutMe.scss';
import aboutMe from '../copy/about-me'
function AboutMe() {
  return (
    <div className="page__container">
      <h1>{aboutMe.title}</h1>
      <div className="app_box-text">
        {aboutMe.body.map(paragraph => {
          return (
            <div className="app_box-text__paragraph">
              {paragraph}
            </div>
            )
        })}
        {/*Check out my <Link to={PORTFOLIO}>portfolio</Link>!*/}
      </div>
    </div>)
}

export default AboutMe;

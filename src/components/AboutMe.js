// import { PORTFOLIO } from "../routes";
// import { Link } from 'react-router-dom';
import '../scss/AboutMe.scss';

function AboutMe() {
    return (
        <div className="page__container">
            <h1>About Me</h1>
            <div className="app_box-text">
                <div className="app_box-text__paragraph">
                    I'm a full stack software engineer based in Washington, D.C. I graduated from the University of Maryland 
                    in 2019 with a bachelor's degree in Mechanical Engineering, but realized I liked software more than hardware!
                    I've done a few internships in fintech and I'm currently working as a software engineer for <a href='https://www.buzzfeed.com'> BuzzFeed</a>
                    . I'm on the BuzzFeed News team where I've helped build products that enhance the experience of our readers, and 
                    lighten the load for our reporters. 
                </div>
                <div className="app_box-text__paragraph">    
                    When I'm not learning about the newest frontend JavaScript framework, I love playing music and skateboarding. I spend 
                    a lot of time trying out new recipes I found on Tik Tok. I'm currently learning more about open-source and web accessibility.
                    {/*Check out my <Link to={PORTFOLIO}>portfolio</Link>!*/}
                </div>
            </div>
        </div>)
}

export default AboutMe;

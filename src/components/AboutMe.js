import { PORTFOLIO } from "../routes";
import { Link } from 'react-router-dom';
function AboutMe() {
    return (
        <div style={{padding: '0 1rem'}}>
            <h1>About Me</h1>
            <div style={{border: '.1875rem solid black', padding: '0 1rem'}}>
                <p>
                    I'm a full stack software engineer based in Washington, D.C. I graduated from the University of Maryland 
                    in 2019 with a bachelor's degree in Mechanical Engineering, but realized I liked software more than hardware!
                    I've done a few internships in fintech and I'm currently working as a software engineer for <a href='https://www.buzzfeed.com'> BuzzFeed</a>
                    . I'm on the BuzzFeed News team where I've helped build products that enhance the experience of our readers, and 
                    lighten the load for our reporters. 
                </p>
                <p>    
                    When I'm not learning about the newest frontend JavaScript framework, I love playing music and skateboarding. I spend 
                    a lot of time trying out new recipes I found on Tik Tok. I'm currently learning more about open-source and web accessibility.
                    Check out my <Link to={PORTFOLIO}>portfolio</Link>!
                </p>
            </div>

        </div>)
}

export default AboutMe;
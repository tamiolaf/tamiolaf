import Pronunciation from './Pronunciation';
import profile_pic from '../img/profile-pic.jpeg';
import '../scss/Home.scss';

const Home = () => {

return (
  <div className="home">
    <main className="home_main">
      <img src={profile_pic} alt={'Tami Olafunmiloye'} className="profile-pic"/>
      
      <div className="app_box-text">Hi, I'm Tami Olafunmiloye. <Pronunciation/></div>
      <div className="app_box-text">
        I'm a full stack engineer with experience in finance and media! Check out my latest <a className="home_link" href="https://drive.google.com/file/d/1rQhSaJow16yhyrydc6dTgVXeZ4yILL2Q/view?usp=sharing">tech talk</a>.
      </div>
      
      <ul className="home_box-icon">
        <li>
        <a className="icon" href="https://www.github.com/tamiolaf">
          <i className="fab fa-github-square fa-3x"></i>
        </a>
        </li>
        <li> <a className="icon" href="https://www.linkedin.com/in/tamiolaf">
          <i className="fab fa-linkedin fa-3x"></i>
        </a></li>
        <li>
        <a className="icon" href="https://www.twitter.com/tamiolaf">
          <i className="fab fa-twitter-square fa-3x"></i>
        </a>
        </li>
        <li>
          <a className="icon" href="mailto:tamiolaf@gmail.com">
            <i className="fas fa-envelope-square fa-3x"></i>
          </a>
        </li>
      </ul>
    </main>
  </div>
  )
}

export default Home;

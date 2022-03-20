
import '../scss/Preview.scss';
import { NavLink } from 'react-router-dom';

function Preview({title, year, description, route, displayImage, toolsUsed}) {
  return (
    <div className="preview__container">
      <article className="preview__item">
        {/*<div>
          <img className="preview__image" src={displayImage} alt=''/>
</div>*/}
        <div className="preview__title-date-line">
          <NavLink style={{'color':'black'}}to={'/portfolio' + route}><h2>{title}</h2></NavLink> <p>{year}</p>
        </div>
        <div>{description}</div>
        <span>{toolsUsed.join(', ')}</span>
      </article>
    </div>
  )
}

export default Preview;

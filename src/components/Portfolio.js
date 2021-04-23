import { Link, Switch, useRouteMatch, Route } from 'react-router-dom';
import * as routes from '../routes';
import PortfolioItem from './PortfolioItem';
import Preview from './Preview';

function Portfolio() {

    let { path, url } = useRouteMatch();
    let description = 'This is an example description for a project that I did.';
    let toolsUsed = ['HTML', 'CSS', 'React.js', 'Firebase']; //include logos for these maybe?
    return (
        <div> 
            {/*- order chonologically
            - make sure to include what I used to build the project
            separate undergrand a postgrad? */}
            <h1>Portfolio</h1>
            <div style={{'listStyleType': 'none'}}>
                <li>
                    <Link style={{textDecoration: 'none'}} to={`${url}${routes.BUZZFEED}`}>
                     <Preview title={'hi'} description={description} year={2020} displayImage={''} toolsUsed={toolsUsed}/>
                    </Link>
                </li>
                <li><Link to={`${url}${routes.SEEFOOD}`}>See Food</Link></li>
                <li><Link to={`${url}${routes.EQUALSEQUALS}`}>Equals Equals</Link></li>
                <li>pics from MIT</li>
                <li>interview with MIT bitcoin scientist</li>
                <li>bit by bit</li>
                <li>link linkedin article</li>
                <li><Link to={`${url}${routes.CODE2040}`}>Code2040!</Link></li>
                <li>arduino ipod video</li>
                <li>senior capstone project video (this is a maybe)</li>
            </div>

            <Switch>
                <Route exact path={path} component={() => <h3>Please select a topic.</h3>} />
                <Route path={`${path}/:itemName`} component={PortfolioItem} />
            </Switch>
        </div>)
}

export default Portfolio;
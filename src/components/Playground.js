import { Link, Switch, useRouteMatch, Route }from 'react-router-dom';
import PlaygroundGame from './PlaygroundGame';
import { SNAKE } from '../routes';

function Playground() {

    let { path, url } = useRouteMatch();

    return (
        <div>
            <div>
                <li><Link to={`${url}${SNAKE}`}>snake</Link></li>
            </div>
            <Switch>
                <Route path={`${path}/:gameName`} component={PlaygroundGame} />
            </Switch>
        </div>
    )
}
 
export default Playground;
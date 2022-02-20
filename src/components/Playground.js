import { Link, Routes, useMatch, Route }from 'react-router-dom';
import PlaygroundGame from './PlaygroundGame';
import { SNAKE } from '../routes';

function Playground() {

    let { path, url } = useMatch();

    return (
        <div>
            <div>
                <li><Link to={`${url}${SNAKE}`}>snake</Link></li>
            </div>
            <Routes>
                <Route path={`${path}/:gameName`} component={PlaygroundGame} />
            </Routes>
        </div>
    )
}
 
export default Playground;

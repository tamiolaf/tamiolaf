import { Link, useMatch } from 'react-router-dom';
// import { BUZZFEED, SEEFOOD, MIT_DCI, EQUALS_EQUALS, CODE2040 } from '../routes';
import Preview from './Preview';
import { data } from '../PreviewData.js';

function Portfolio() {

    let { url } = useMatch();

    const showPreviews = data.map(previewData => (
               <div key={previewData.id.toString()}>
                    <Link style={{textDecoration: 'none', color: 'black'}} to={`${url}${previewData.route}`}>
                        <Preview {...previewData}/>
                    </Link>
               </div>
           )
       )
    
    return (
        
        <div className="page-container">
                <h1>Portfolio</h1>
                <div>{showPreviews}</div>
        </div>
    )
}

export default Portfolio;

/*- order chonologically
            - make sure to include what I used to build the project
            separate undergrand a postgrad? */

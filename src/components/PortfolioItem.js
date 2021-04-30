import { useParams, useRouteMatch } from 'react-router-dom';
import BuzzFeed from './PortfolioItems/BuzzFeed';
import SeeFood from './PortfolioItems/SeeFood';
import EqualsEquals from './PortfolioItems/EqualsEquals';
import MITDCI from './PortfolioItems/MITDCI';
/*
- title
- subtitle?
- time worked on (start date to end date)
- description
- display image
- technologies worked on

 */
//add 404 for prjoects that don't exist

//should probably load this based on state and not based on url link
function PortfolioItem() {
    let { itemName } = useParams();

    let { path, url } = useRouteMatch();


    const renderPortfolioItem = () => {
        switch(itemName) {
            case 'buzzfeed':
                return <BuzzFeed/>
            case 'seefood':
                return <SeeFood/>
            case 'equalsequals':
                return <EqualsEquals/>
            case 'mitdci':
                return <MITDCI/>
            default:
                return (
                    <div>
                        coming soon!
                    </div>
                )
        }

    }

    return (
        <div>
            {console.log(url)}
           {renderPortfolioItem()}
        </div>
    )
}

export default PortfolioItem;
import { useParams } from 'react-router-dom';
/*
- title
- subtitle?
- time worked on (start date to end date)
- description
- display image
- technologies worked on

 */
//add 404 for prjoects that don't exist
function PortfolioItem() {
    let { itemName } = useParams();

    return (
        <div>
           <h3> { itemName } </h3>
        </div>
    )
}

export default PortfolioItem;
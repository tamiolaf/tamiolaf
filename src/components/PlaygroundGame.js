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
function PlaygroundGame() {

    let { gameName } = useParams();

    return (
        <div>
 

           <h3> { gameName } </h3>
        </div>
    )
}

export default PlaygroundGame;
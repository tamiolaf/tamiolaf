
function Preview({ title, description, year, displayImage, toolsUsed }) {
    return (
        <div style={{padding: '.5rem 1rem', width: '70%'}}>
            <div style={{border: '1px solid gray', borderRadius:'6px', boxShadow:'2px 3px 5px gray', padding: '0 1rem 1rem 1rem'}}>
                <article>
                    <h3 style={{padding: '0px'}}>{title} - {year}</h3>
                    <img src={displayImage}/>
                    <div>{description}</div>
                    <span>{toolsUsed.join(', ')}</span>
                </article>
            </div>
        </div>
    )
}

export default Preview;
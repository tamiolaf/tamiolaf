
function Preview({title, year, displayImage, description, toolsUsed}) {
    return (
        <div style={{padding: '.5rem 0'}}>
            {console.log('hi')}
            <div style={{border: '.1875rem solid black', borderRadius:'0px', padding: '0 1rem 1rem 1rem'}}>
                <article>
                    <h3 style={{padding: '0px'}}>{title} ~ {year}</h3>
                    <img style={{maxWidth: '100%'}} src={displayImage} alt=''/>
                    <div>{description}</div>
                   <span>{toolsUsed.join(', ')}</span>
                </article>
            </div>
        </div>
    )
}

export default Preview;
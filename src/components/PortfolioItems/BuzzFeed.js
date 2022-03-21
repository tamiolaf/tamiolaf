import data from '../../copy/buzzfeed.json'
import nativeInstreamDesktop from '../../img/BuzzFeed/native-instream/native-instream-desktop.png';
import nativeInstream1 from '../../img/BuzzFeed/native-instream/native-instream-1.png';

const imageDisplay = (title) => {
  switch(title) {
    case 'Native Instream Video Unit':
      return (
        <div>
          <img style={{'height':'25rem'}} src={nativeInstream1} />
          <img style={{'width':'100%'}}src={nativeInstreamDesktop} />
        </div>
      )
    case 'BAM (BuzzFeed Ad Manager)':
      return (
        <div>
          Bam pics
        </div>
      )
    case 'Chinstrap/Badges':
      return (
        <div>
          chinstrap pics
        </div>
      )
    case 'Trending/Breaking Bar':
      return (
        <div>
          breaking bar pics
        </div>
      )
    case 'FinCEN Files':
      return (
        <div>
          fincen files pics
        </div>
      )
    case 'Election 2020':
      return (
        <div>
          election 2020s pics
        </div>
      )
    case 'Branch IO':
      return (
        <div>
          branch io pics
        </div>
      )
    case 'Accessibility Team':
      return (
        <div>
          Accessibility pics
        </div>
      )
    default: 
      return (
        <div>
          nothing
        </div>
      )
  }
}

const BuzzFeed = () => {
  return (
    <div>
      <h1>{data.title}</h1> 
      {data.sections.map(section => {
        return (
          <div>
            <h2>{section.title}</h2>
            {section.details.map(detail => {
              return (
                <div>
                  {detail}
                </div>
              )
            })}
            {imageDisplay(section.title)}
          </div>
        )
      })}
    </div>
  )
}

export default BuzzFeed;

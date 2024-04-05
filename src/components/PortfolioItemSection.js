import PortfolioItemGallery from './PortfolioItemGallery';

const PortfolioItemSection = ({title, details, images}) => {
  const showDetails = (details) => {
    return details.join(' ').split("\n").map(str => <p>{str}</p>)
  }
  return (
    <div>
        <h2>{title}</h2>
        {showDetails(details)}
        <PortfolioItemGallery images={images}/>
    </div>
  )
};

export default PortfolioItemSection;

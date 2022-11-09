import PortfolioItemGallery from './PortfolioItemGallery';

const PortfolioItemSection = ({title, details, images}) => {
  return (
    <div>
      {}
        <h2>{title}</h2>
        <p>{details.join(' ')}</p>
        <PortfolioItemGallery images={images}/>
    </div>
  )
};

export default PortfolioItemSection;

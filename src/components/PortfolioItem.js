import PortfolioItemSection from './PortfolioItemSection';

const PortfolioItem = ({data, galleryMap}) => {
  return (
    <div>
      <h1>{data.title}</h1>
      {data.sections.map((section, i) => {
        const sectionAndImages = {
        ...section,
        images: galleryMap.get(section.title)
        }
        return <PortfolioItemSection key={i} {...sectionAndImages} />
      })}
    </div>
  )
}

export default PortfolioItem;

import { useState } from 'react';
import ImageModal from './ImageModal';

import '../scss/PortfolioItemGallery.scss'

const PortfolioItemGallery = ({images}) => {
  const [ selectedImage, setSelectedImage ] = useState(null);
  return (
    <div>
      <div className='portfolio-item-gallery__container'>
        {images?.map((image, i) => {
          return (
            <img 
              className='portfolio-item-gallery__image'
              key={i}
              onClick={e => setSelectedImage(e.target.src)}
              src={image}
              alt=''
            />
          )
        })}
      </div>
      <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
    </div>
  )
}
export default PortfolioItemGallery;

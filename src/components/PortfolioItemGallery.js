import { useState } from 'react';
import ImageModal from './ImageModal';

import "../scss/PortfolioItemGallery.scss"
const PortfolioItemGallery = ({images}) => {
  const [ selectedImage, setSelectedImage ] = useState(null);
  return (
    <div>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}>
        {images?.map((image, i) => {
          return (
            <img style={{
              flex: '30%',
              maxWidth: '30%',
              padding: '.5rem .5rem'
            }} key={i} onClick={e => setSelectedImage(e.target.src)} src={image}/>
          )
        })}
      </div>
      <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
    </div>
  )
}
export default PortfolioItemGallery
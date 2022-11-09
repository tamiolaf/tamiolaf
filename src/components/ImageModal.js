import '../scss/ImageModal.scss';

const ImageModal = ({selectedImage, setSelectedImage}) => {
  return (
    selectedImage ? (
    <div
      id='image-modal__container'
      onClick={e => {
        if (e.target.id === 'image-modal__container') setSelectedImage(null);        
      }}
    >
      <img
        id='image-modal__image' src={selectedImage} alt=""/>
    </div>
    )
    :
    (<div></div>)
  )
}

export default ImageModal;

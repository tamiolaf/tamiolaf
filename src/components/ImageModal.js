
const ImageModal = ({selectedImage, setSelectedImage}) => {
  return (
    selectedImage ? (
    <div
      id='image-modal__background'
      style={{
        zIndex: 1,
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        backgroundColor: 'rgba(0,0,0,0.75)',
        top: 0,
        left: 0,
        display: 'flex',
      }}
      onClick={e => {
        if (e.target.id == 'image-modal__background') setSelectedImage(null);        
      }}
    >
   
      <img
        id='image-modal__image'
        style={{
          zIndex: 2,
          opacity: 1,
          margin: '15% auto',
          height: 'auto',
          maxWidth: '90%'
        }}
        src={selectedImage} />
    </div>
    )
    :
    (<div></div>)
  )
}

export default ImageModal;
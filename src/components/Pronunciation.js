import pronunciation from "../audio/name_pronunciation.mp3"

const name = new Audio(pronunciation);

const Pronunciation = () => {
  return (
    <span>
      <i onClick={() => name.play()} className="far fa-play-circle"></i>
    </span>
  )
};

export default Pronunciation;

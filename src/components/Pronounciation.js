import pronunciation from "../audio/name_pronunciation.mp3"

const name = new Audio(pronunciation);

const Pronounciation = () => {
  const play = () => {
    name.play();
  }

  return (
    <span>
      <i onClick={play} class="far fa-play-circle"></i>
    </span>
  )
};

export default Pronounciation;
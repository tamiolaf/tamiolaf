import data from '../../copy/arduino-ipod.json'

const ArduinoIpod = () => {
  return (
    <div>
      <h1>{data.title}</h1>
      <iframe width="560" height="315" src={data.externalLinks.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )}

export default ArduinoIpod;

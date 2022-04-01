import './Hud.css'

const Hud = ({data, setHudKey}) => {
  return (
    <>
    {data ?
    <div className="Hud" >
      <img id="img" src="assets/face.png"/>
      <div className="info">
        <h1>{data.title}</h1>
        <p>£100</p>
      </div>
    </div> : null }
    </>
  );
}

export default Hud;

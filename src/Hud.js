import './Hud.css'

const Hud = ({data, setHudKey}) => {
  return (
    <>
    {data ?
    <div className="Hud" >
      <div className="info">
        <img id="img" src="assets/face.png"/>
        <h1>{data.title}</h1>
      </div>
    </div> : null }
    </>
  );
}

export default Hud;

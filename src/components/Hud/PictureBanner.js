import './PictureBanner.css'
import { isMobile } from 'react-device-detect';

const PictureBanner = ({ picture }) => {

  const _className = isMobile ? "MobilePictureBanner" : "DesktopPictureBanner"

  return (
    <>
      {
        picture &&
        <div className="PictureBanner" >
          <div className={_className} >
            <img id="img" src={`assets/${picture.filename}`} alt={picture.title}/>
            <div className="info">
              <h1>{picture.title}</h1>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default PictureBanner;

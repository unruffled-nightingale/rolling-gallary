import PictureBanner from './PictureBanner.js'
import IntroBanner from './IntroBanner.js'
import MobileControls from './Controls/MobileControls.js';
import DesktopControls from './Controls/DesktopControls.js';
import AudioButton from './AudioButton.js';
import { isMobile } from 'react-device-detect';


const Hud = ({ picture, invisible, setMovement }) => {

  return (
    <>
      <PictureBanner picture={picture} />
      <IntroBanner invisible={invisible} />
      <AudioButton />
      {
        isMobile ?
          <MobileControls setMovement={setMovement} /> :
          <DesktopControls setMovement={setMovement} />
      }
    </>
  );
}

export default Hud;

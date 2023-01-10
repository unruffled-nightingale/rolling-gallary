import './IntroBanner.css'
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

const IntroBanner = ({ invisible, loaded }) => {

  const [controlsVisible, setControlsVisible] = useState(false);

  useEffect(() => {
    if (!loaded) return
    setTimeout(() => {
      setControlsVisible(true)
    }, 3000);
  }, [loaded])

  return (
    <div className={"IntroBanner " + (invisible ? 'fadeOutBanner' : "")}>
      <div className={"controls " + (controlsVisible && !invisible ? 'fadeInControls' : "")}>
        {!isMobile ?
          <>
            <p><b> &nbsp;&nbsp;&nbsp;w </b></p>
            <p><b>a &nbsp;s &nbsp;d</b>&nbsp;&nbsp;&nbsp; to move </p>
          </>
          : 
          <>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;use joystick</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to move </p>
          <p></p>
        </>
        }
      </div>
      <p></p>
      <p></p>
      <p>works by susannah simms</p>
    </div>
  );
}

export default IntroBanner;

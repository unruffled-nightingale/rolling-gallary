import './IntroBanner.css'
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

const IntroBanner = ({ invisible }) => {

  const [controlsVisible, setControlsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setControlsVisible(true)
    }, 3000);
  }, [])

  return (
    <div className={"IntroBanner " + (invisible ? 'fadeOutBanner' : "")}>
      <p>works by susannah simms</p>
      <p></p>
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
        </>
        }
      </div>
    </div>
  );
}

export default IntroBanner;

import { useMemo } from "react";
import "./LMSHeader.css";

const LMSHeader = ({ lMSHeaderPosition, lMSHeaderTop, lMSHeaderLeft }) => {
  const lMSHeaderStyle = useMemo(() => {
    return {
      position: lMSHeaderPosition,
      top: lMSHeaderTop,
      left: lMSHeaderLeft,
    };
  }, [lMSHeaderPosition, lMSHeaderTop, lMSHeaderLeft]);

  return (
    <div className="lms-header" style={lMSHeaderStyle}>
      <div className="lms-header-child" />
      <div className="courses">Courses</div>
      <div className="community">Community</div>
      <div className="my-classes">My Classes</div>
      <div className="image-1" />
      <div className="frame-div">
        <div className="pp-wrapper">
          <div className="pp">PP</div>
        </div>
        <img className="menu-icon" alt="" src="/menu.svg" />
      </div>
      <div className="frame-parent1">
        <img className="frame-child" alt="" src="/frame-402513826.svg" />
        <img className="frame-child" alt="" src="/frame-402513825.svg" />
        <img className="frame-child" alt="" src="/frame-402513827.svg" />
      </div>
    </div>
  );
};

export default LMSHeader;

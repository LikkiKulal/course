import TypeprimaryStateactiveSi from "./TypeprimaryStateactiveSi";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="rectangle-parent">
      <div className="instance-child" />
      <TypeprimaryStateactiveSi
        ctaText="Enroll Today"
        leadingIcon={false}
        trailingIcon={false}
        typeprimaryStateactiveSiWidth="130px"
        typeprimaryStateactiveSiBorderRadius="4px"
        typeprimaryStateactiveSiBackgroundColor="unset"
        typeprimaryStateactiveSiHeight="40px"
        typeprimaryStateactiveSiPosition="absolute"
        typeprimaryStateactiveSiTop="285px"
        typeprimaryStateactiveSiLeft="66px"
        typeprimaryStateactiveSiBackground="linear-gradient(92.65deg, #ff5a56, #ff2171 54.17%, #fc6549), #ff5a56"
      />
      <b className="full-web-designing-container">
        <p className="day-better-living">21 Day Better Living</p>
        <p className="day-better-living">Course</p>
      </b>
      <div className="offer-ends-in1">Offer ends in 14:23:18</div>
    </div>
  );
};

export default FrameComponent1;

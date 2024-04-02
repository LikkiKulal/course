import FrameComponent1 from "../components/FrameComponent1";
import LMSHeader from "../components/LMSHeader";
import StateinactiveSizelarge from "../components/StateinactiveSizelarge";
import FrameComponent from "../components/FrameComponent";
import TypemediumThemelight from "../components/TypemediumThemelight";
import "./CourseHomePage.css";

const CourseHomePage = () => {
  return (
    <div className="course-home-page">
      <FrameComponent1 />
      <LMSHeader
        lMSHeaderPosition="absolute"
        lMSHeaderTop="0px"
        lMSHeaderLeft="calc(50% - 720px)"
      />
      <div className="frame-parent">
        <div className="find-your-learning-path-with-t-parent">
          <b className="find-your-learning">Find your learning path with TYI</b>
          <div className="discover-your-passion">
            Discover your passion and achieve your goals with TYI's personalized
            learning paths. Choose from a wide range of topics and create a
            learning journey that fits your interests and needs.
          </div>
        </div>
        <StateinactiveSizelarge
          inputText="Choose Learning Path"
          showBottomRow={false}
          showValidationTexthelpText={false}
          stateinactiveSizelargeWidth="700px"
          bottomRowAlignSelf="unset"
          bottomRowWidth="328px"
          bottomRowHeight="16px"
          validationTexthelpTextFlex="unset"
          validationTexthelpTextWidth="328px"
        />
      </div>
      <div className="ttc-1-parent">
        <b className="find-your-learning">TTC #1</b>
        <div className="here-are-few">
          Here are few recommendations based on your interests. We’ll keep
          updating them as you go along the learning path journey
        </div>
      </div>
      <div className="health-camp-2-parent">
        <b className="find-your-learning">Health Camp #2</b>
        <div className="here-are-few">
          Here are few recommendations based on your interests. We’ll keep
          updating them as you go along the learning path journey
        </div>
      </div>
      <div className="frame-group">
        <FrameComponent />
        <FrameComponent />
        <FrameComponent />
      </div>
      <TypemediumThemelight
        icondocumentVerified="/icondocumentverified@2x.png"
        ctaText="See all courses"
        vector1Stroke="/vector-1-stroke1.svg"
        leadingIcon={false}
        trailingIcon
        typemediumThemelightPosition="absolute"
        typemediumThemelightTop="876px"
        typemediumThemelightLeft="1182px"
        ctaTextColor="#ff5a56"
        vector1StrokeTop="16.88%"
        vector1StrokeBottom="16.25%"
      />
      <TypemediumThemelight
        icondocumentVerified="/icondocumentverified@2x.png"
        ctaText="See all courses"
        vector1Stroke="/chevron.svg"
        leadingIcon={false}
        trailingIcon
        typemediumThemelightPosition="absolute"
        typemediumThemelightTop="1477px"
        typemediumThemelightLeft="1182px"
        ctaTextColor="#ff5a56"
        vector1StrokeTop="16.88%"
        vector1StrokeBottom="16.25%"
      />
      <div className="frame-container">
        <FrameComponent />
        <FrameComponent />
        <FrameComponent />
      </div>
      <div className="not-able-to-find-the-right-cou-parent">
        <div className="not-able-to">
          Not able to find the right course based on your interest?
        </div>
        <TypemediumThemelight
          icondocumentVerified="/icondocumentverified1@2x.png"
          ctaText="Explore all courses"
          vector1Stroke="/vector-1-stroke2.svg"
          leadingIcon={false}
          trailingIcon
          typemediumThemelightPosition="unset"
          typemediumThemelightTop="unset"
          typemediumThemelightLeft="unset"
          ctaTextColor="#fff"
          vector1StrokeTop="16.88%"
          vector1StrokeBottom="16.25%"
        />
      </div>
      <div className="not-able-to-find-the-right-cou-group">
        <div className="not-able-to1">
          Not able to find the right course based on your interest?
        </div>
        <TypemediumThemelight
          icondocumentVerified="/icondocumentverified1@2x.png"
          ctaText="Explore all courses"
          vector1Stroke="/Vector 3 (Stroke).svg"
          leadingIcon={false}
          trailingIcon
          typemediumThemelightPosition="absolute"
          typemediumThemelightTop="174px"
          typemediumThemelightLeft="-521px"
          ctaTextColor="#fff"
          vector1StrokeTop="83.13%"
          vector1StrokeBottom="-50%"
          vector1Strokecolor="#fff"
        />
      </div>
    </div>
  );
};

export default CourseHomePage;

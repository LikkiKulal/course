import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <div className="image-bg-parent">
      <div className="image-bg" />
      <div className="full-web-designing1">
        Full Web Designing Course With 42 Web Template and videos
      </div>
      <div className="lessons-11-week">
        <div className="week">
          <img className="icon" alt="" src="/Icon (2).svg" />
          <div className="week1">12 Week</div>
        </div>
        <div className="lessons">
          <img className="icon1" alt="" src="/icon.svg" />
          <div className="lessons1">35 Lessons</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;

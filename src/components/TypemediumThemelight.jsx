import { useMemo } from "react";
import "./TypemediumThemelight.css";

const TypemediumThemelight = ({
  icondocumentVerified,
  ctaText,
  leadingIcon = true,
  trailingIcon = true,
  typemediumThemelightPosition,
  typemediumThemelightTop,
  typemediumThemelightLeft,
  ctaTextColor,
  vector1StrokeTop,
  vector1StrokeBottom,
}) => {
  const typemediumThemelightStyle = useMemo(() => {
    return {
      position: typemediumThemelightPosition,
      top: typemediumThemelightTop,
      left: typemediumThemelightLeft,
    };
  }, [
    typemediumThemelightPosition,
    typemediumThemelightTop,
    typemediumThemelightLeft,
  ]);

  const ctaTextStyle = useMemo(() => {
    return {
      color: ctaTextColor,
    };
  }, [ctaTextColor]);

  return (
    <div className="typemedium-themelight" style={typemediumThemelightStyle}>
      {leadingIcon && (
        <img
          className="icondocument-verified"
          alt=""
          src={icondocumentVerified}
        />
      )}
      <div className="cta-text2" style={ctaTextStyle}>
        {ctaText}
      </div>
      {trailingIcon && (
        <div className="iconchevron">
          <div className="iconchevron-child" />
          {/* Render red color vector only if ctaText is not "Explore all courses" */}
          {ctaText !== "Explore all courses" && (
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.558646 11.1296C0.859049 11.4012 1.3461 11.4012 1.6465 11.1296L6.77471 6.49188C7.07511 6.22021 7.07511 5.77975 6.77471 5.50808L1.6465 0.870399C1.3461 0.59873 0.859048 0.59873 0.558645 0.870399C0.258242 1.14207 0.258242 1.58253 0.558645 1.8542L5.14292 5.99998L0.558646 10.1458C0.258243 10.4174 0.258243 10.8579 0.558646 11.1296Z"
                fill="#FF5956" // Red color
                stroke="#FF5956" // Red color
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {/* Render white color vector only if ctaText is "Explore all courses" */}
          {ctaText === "Explore all courses" && (
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.558646 11.1296C0.859049 11.4012 1.3461 11.4012 1.6465 11.1296L6.77471 6.49188C7.07511 6.22021 7.07511 5.77975 6.77471 5.50808L1.6465 0.870399C1.3461 0.59873 0.859048 0.59873 0.558645 0.870399C0.258242 1.14207 0.258242 1.58253 0.558645 1.8542L5.14292 5.99998L0.558646 10.1458C0.258243 10.4174 0.258243 10.8579 0.558646 11.1296Z"
                fill="#FFFFFF" // White color
                stroke="#FFFFFF" // White color
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      )}
    </div>
  );
};

export default TypemediumThemelight;

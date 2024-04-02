import { useMemo } from "react";
import "./StateinactiveSizelarge.css";

const StateinactiveSizelarge = ({
  inputText,
  showBottomRow,
  showValidationTexthelpText,
  stateinactiveSizelargeWidth,
  bottomRowAlignSelf,
  bottomRowWidth,
  bottomRowHeight,
  validationTexthelpTextFlex,
  validationTexthelpTextWidth,
}) => {
  const stateinactiveSizelargeStyle = useMemo(() => {
    return {
      width: stateinactiveSizelargeWidth,
    };
  }, [stateinactiveSizelargeWidth]);

  const bottomRowStyle = useMemo(() => {
    return {
      alignSelf: bottomRowAlignSelf,
      width: bottomRowWidth,
      height: bottomRowHeight,
    };
  }, [bottomRowAlignSelf, bottomRowWidth, bottomRowHeight]);

  const validationTexthelpTextStyle = useMemo(() => {
    return {
      flex: validationTexthelpTextFlex,
      width: validationTexthelpTextWidth,
    };
  }, [validationTexthelpTextFlex, validationTexthelpTextWidth]);

  return (
    <div
      className="stateinactive-sizelarge"
      style={stateinactiveSizelargeStyle}
    >
      <div className="input">
        <div className="input-text">{inputText}</div>
        <div className="input-trailing-icon">
          <div className="input-trailing-icon-child" />
          <img className="vector-1-stroke" alt="" src="/Vector 1 (Stroke).svg" />
        </div>
      </div>
      {showBottomRow && (
        <div className="bottom-row" style={bottomRowStyle}>
          {showValidationTexthelpText && (
            <div
              className="validation-texthelp-text"
              style={validationTexthelpTextStyle}
            >
              Validation Text/help text
            </div>
          )}
          <div className="div">9999/9999</div>
        </div>
      )}
    </div>
  );
};

export default StateinactiveSizelarge;

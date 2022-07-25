import { ProgressBar, Step } from "react-step-progress-bar";
import "./multiStepProgressBar.css";
import "react-step-progress-bar/styles.css";

export default function MultiStepProgressBar(props){
    var stepPercentage = 0;
  
    if (props.currentStep === 1) {
      stepPercentage = 0;
    } else if (props.currentStep === 2) {
      stepPercentage = 50;
    } else if (props.currentStep === 3) {
      stepPercentage = 100;
    } else {
      stepPercentage = 0;
    }
  
    return (
      <ProgressBar percent={stepPercentage}>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
      </ProgressBar>
    );
  };
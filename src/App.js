import React, { useState } from "react";
import SingleStep from './components/SingleStep';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialStepsArray = [
  { id: 1, StepStatus: "", StepTitle: "Zamówione" },
  { id: 2, StepStatus: "", StepTitle: "W tranzycie" },
  { id: 3, StepStatus: "", StepTitle: "W doręczeniu" },
  { id: 4, StepStatus: "", StepTitle: "Dostarczone" },
];

const App = () => {
  const [completedSteps, setCompletedSteps] = useState([
  ]);
  const [stepsArray, setStepsArray] = useState(initialStepsArray);
  const [selectedStepTitle, setSelectedStepTitle] = useState("");

  const handleCofnij = () => {
    if (completedSteps.length > 0) {
      console.log(completedSteps);
      const lastCompletedStep = completedSteps[completedSteps.length - 1];
      const updatedStepsArray = stepsArray.map((step) => {
        if (step.id === lastCompletedStep) {
          return { ...step, StepStatus: "" };
        }
        return step;
      });
      setCompletedSteps(completedSteps.slice(0, -1));
      setStepsArray(updatedStepsArray);
      const remainingSteps = completedSteps.slice(0, -1);
      const newSelectedStepTitle = completedSteps.length > 1 ? stepsArray.find((step) => step.id === remainingSteps[remainingSteps.length - 1]).StepTitle : ""
      setSelectedStepTitle(newSelectedStepTitle);
    }
  };

  const handleDalej = () => {
    const incompleteSteps = stepsArray.filter((step) => !completedSteps.includes(step.id));

    if (incompleteSteps.length > 0) {
      const nextStep = incompleteSteps[0];
      const updatedStepsArray = stepsArray.map((step) => {
        if (step.id === nextStep.id) {
          return { ...step, StepStatus: "completed" };
        }
        return step;
      });
      setCompletedSteps([...completedSteps, nextStep.id]);
      setStepsArray(updatedStepsArray);
      setSelectedStepTitle(nextStep.StepTitle);
    }
  };

  const handleAdd = () => {
    const newStep = { id: stepsArray.length + 1, StepStatus: "", StepTitle: `Nowy krok ${stepsArray.length + 1}` };
    setStepsArray([...stepsArray, newStep]);
    
  };

  const handleStepClick = (stepId, stepTitle) => {
    const isCompleted = completedSteps.includes(stepId);

    if (!isCompleted) {
      setCompletedSteps([...completedSteps, stepId]);
      setSelectedStepTitle(stepTitle);
    } else {
      const updatedCompletedSteps = completedSteps.filter((id) => id !== stepId);
      setCompletedSteps(updatedCompletedSteps);
      setSelectedStepTitle("");
    }
  };

  return (
    <div className="main_container">
      <div className="container">
        <h3 className="selected-step-title">{selectedStepTitle}</h3>
        <div className="card-body pt-5">
          <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
            {stepsArray.map((step) => (
              <SingleStep
                key={step.id}
                StepStatus={step.StepStatus}
                id={step.id}
                StepTitle={step.StepTitle}
                onClick={() => handleStepClick(step.id, step.StepTitle)}
              />
            ))}
          </div>
          <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
            <button className="btn btn-primary" type="button" onClick={handleCofnij}>
              Cofnij
            </button>
            <button className="btn btn-primary" type="button" onClick={handleDalej}>
              Dalej
            </button>
            <button className="btn btn-primary" type="button" onClick={handleAdd}>
              Dodaj
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

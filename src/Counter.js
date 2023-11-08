import { useEffect, useState } from "react";
import ButtonsPanel from "./components/ButtonsPanel";
import Clock from "./components/Clock";
import Display from "./components/Display";
import Step from "./components/Step";
import "./Counter.css";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.counterInitValue);
  const [showClock, setShowClock] = useState(true);
  const [step, setStep] = useState(1);

  //const step setstep 1
  //metoda w counter metoda z parametrem ktora wywola set step
  // wywoluje na onChange w inpucie ta metoda przekazana jako props, e.target.value

  const updateCounter = (action) => {
    if (action === "add") {
      setCounter(counter + step);
    } else if (action === "reset") {
      setCounter(props.counterInitValue);
    } else {
      setCounter(0);
    }
  };

  // funkcja ustawiająca step. Jako parametr przyjmuje nową wartość, która przypisywana jest do zmienej step
  // korzystając z funkcji setStep.
  // parapemtr newstep rzutowany jest na typ Number (przez dodawanie, zeby nie bylo konkatenacji)
  const updateStep = (newStep) => {
    // || zapobiega przypadkowi gdy newStep = 0 lub null lub pusty string - step na 1 w takim przypadku
    setStep(Number(newStep || 1));
  };

  useEffect(() => {
    console.log('wywołanie use effecta');
  }, [counter])

  return (
    <div className="counter">
      <Display counter={counter} />
      <ButtonsPanel updateCounter={updateCounter} step={step} />
      <Step setStep={updateStep} />
      {showClock ? (
        <Clock setShowClock={setShowClock} />
      ) : (
        <p className="clockControl" onClick={() => setShowClock(true)}>
          pokaż zegar
        </p>
      )}
    </div>
  );
};

export default Counter;

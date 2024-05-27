import { useMemo, useState } from "react";
import styles from "./BmiCalculatorDemo.module.css";

const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 150;

export default function BmiCalculatorDemo() {
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);
  const [height, setHeight] = useState(DEFAULT_HEIGHT);

  function onHeightChange(event) {
    setHeight(event.target.value);
  }

  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  const output = useMemo(() => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
  }, [weight, height]);

  return (
    <div className={styles.bmiMain}>
      <h1 className={styles.bmiH1}>BMI CALCULATOR</h1>
      <div className={styles.inputSection}>
        <p className={styles.slider - output}>Weight: {weight} kg</p>
        <input
          className={styles.inputSlider}
          onChange={onWeightChange}
          type="range"
          step="1"
          min="40"
          max="220"
        />
        <p className={styles.slider - output}>Height: {height} cm</p>
        <input
          className={styles.inputSlider}
          onChange={onHeightChange}
          type="range"
          min="140"
          max="220"
        />
      </div>
      <div className={styles.outputSection}>
        <p>Your BMI is</p>
        <p className={styles.output}>{output}</p>
      </div>
    </div>
  );
}

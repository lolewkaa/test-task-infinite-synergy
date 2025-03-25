import React from "react";
import styles from "./Button.module.css";

type PropsButton = {
  text: string;
  clickButton: () => void;
  buttonStyle: string;
  type: "submit" | "button";
};

const Button: React.FC<Partial<PropsButton>> = ({
  text,
  clickButton,
  type,
}) => {
  
  return (
    <button
      className={styles.button}
      onClick={clickButton}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
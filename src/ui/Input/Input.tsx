import React, { ChangeEvent } from "react";
import styles from "./Input.module.css";

type PropsInput = {
  value: string;
  // eslint-disable-next-line no-unused-vars
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputStyle: string;
  name: string;
  label: string;
};

const Input: React.FC<PropsInput> = ({ value, handleChange, inputStyle, name, label }) => (
  <label className={styles.input}>
      {label}
  <input name={name} className={inputStyle} maxLength={50} type="text" value={value} onChange={handleChange} />
  </label>
);

export default Input;
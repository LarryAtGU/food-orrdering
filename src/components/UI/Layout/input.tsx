import React, { LegacyRef, MutableRefObject } from "react";
import "./input.css";
type Prop = {
  label: string;
  input: {
    id: undefined | string;
    type?: string;
    min?: string;
    max?: string;
    step?: string;
    defaultValue?: string;
  };
};
const Input = React.forwardRef((prop: Prop, ref: any) => {
  return (
    <div className="input">
      <label htmlFor={prop.input.id}>{prop.label}</label>
      <input ref={ref} {...prop.input} />
    </div>
  );
});
export default Input;

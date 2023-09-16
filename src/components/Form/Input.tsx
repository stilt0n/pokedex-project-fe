import { Dispatch, ChangeEvent, forwardRef } from 'react';

export interface InputProps {
  name: string;
  title: string;
  value: string;
  onChange: Dispatch<ChangeEvent<HTMLInputElement>>;
  type?: string;
  className?: string;
  placeholder?: string;
  autoComplete?: string;
  errorMsg?: string;
  errorDiv?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <input
        type={props.type}
        className={props.className}
        id={props.name}
        ref={ref}
        onChange={props.onChange}
        name={props.name}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        value={props.value}
      />
      <div className={props.errorDiv}>{props.errorMsg}</div>
    </div>
  );
});

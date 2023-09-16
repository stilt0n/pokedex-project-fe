import { AlertProps } from './types';

export const Alert = (props: AlertProps) => (
  <div className={`alert ${props.className}`} role="alert">
    {props.message}
  </div>
);

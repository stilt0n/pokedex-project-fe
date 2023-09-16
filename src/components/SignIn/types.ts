import { Dispatch, SetStateAction } from 'react';

export interface AlertContext {
  setAlertMessage: Dispatch<SetStateAction<string>>;
  setAlertClassName: Dispatch<SetStateAction<string>>;
}

import { MouseEventHandler } from 'react';

interface Routes {
  handleRoute: (curPage: string) => void;
  handleGameModal: MouseEventHandler<HTMLButtonElement>;
  gameModal: boolean;
}
export default Routes;
export interface Experience {
  employer: string;
  employer_url: string;
  location: string;
  title: string;
  dates: string;
  responsibilities: string[];
}

export interface Form {
  name: string;
  email: string;
  subject: string;
  message: string;
}

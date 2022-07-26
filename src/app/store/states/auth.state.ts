import { User } from 'src/app/components1/Types/user';

export interface AuthentificationState {
  loggedUser: User | null;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialAuthentificationState: AuthentificationState = {
  loggedUser: null,
  error: '',
  status: 'pending',
};

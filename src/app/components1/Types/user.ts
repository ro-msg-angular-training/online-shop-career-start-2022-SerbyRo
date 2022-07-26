export type UserRoles = 'admin' | 'user' | 'customer';

export const customer = 'customer';
export const admin = 'admin';

export interface User {
  username: string;
  fullName: string;
  roles: UserRoles[];
}

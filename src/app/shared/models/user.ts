export interface User {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  gender: string;
}

export interface UserForm {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

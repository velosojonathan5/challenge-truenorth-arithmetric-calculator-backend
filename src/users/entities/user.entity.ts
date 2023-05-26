export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export class User {
  id: number;

  username: string;

  password: string;

  status: UserStatus;
}

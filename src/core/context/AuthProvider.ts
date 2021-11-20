import React from 'react';
import {LoginRepositoryImpl} from '../../features/login/data/repositories/LoginRepositoryImpl';
import {
  GetUserData,
  GetUserParams,
} from '../../features/login/domain/usecases/GetUserData';
import {User} from '../../features/login/data/entities/LoginResponse';

export interface AuthProvider {
  user: User;
  fn: Function;
}

export const AuthContext = React.createContext<AuthProvider>({} as any);

export const UserLogin = async (username: string, password: string) => {
  let usecase = new GetUserData(new LoginRepositoryImpl());
  let result = await usecase.call(new GetUserParams(username, password));
  return result;
};

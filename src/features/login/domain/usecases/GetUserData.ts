import {Failure} from 'core/error/failure';
import {Either} from 'core/usecases/Either';
import {Params, UseCase} from 'core/usecases/UseCase';
import {User} from 'features/login/data/entities/LoginResponse';
import {LoginRepository} from '../repositories/LoginRepository';

export class GetUserParams implements Params {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

export class GetUserData implements UseCase<User, GetUserParams> {
  private repository: LoginRepository;
  constructor(repository: LoginRepository) {
    this.repository = repository;
  }
  async call(arg: GetUserParams): Promise<Either<Failure, User>> {
    return await this.repository.login(arg.username, arg.password);
  }
}

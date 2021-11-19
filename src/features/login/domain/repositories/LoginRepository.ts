import {Failure} from '../../../../core/error/failure';
import {Either} from '../../../../core/usecases/Either';
import {User} from '../../data/entities/LoginResponse';

export interface LoginRepository {
  login(username: string, password: string): Promise<Either<Failure, User>>;
}

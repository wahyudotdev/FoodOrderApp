import {Failure} from '../../../../core/error/failure';
import {Either} from '../../../../core/usecases/Either';
import {LoginRepository} from '../../domain/repositories/LoginRepository';
import {User} from '../entities/LoginResponse';

export class LoginRepositoryImpl implements LoginRepository {
  async login(
    _username: string,
    _password: string,
  ): Promise<Either<Failure, User>> {
    const formData = new FormData();
    formData.append('username', _username);
    formData.append('password', _password);
    // let response = await fetch(baseUrl + '/login', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //   },
    // });
    throw new Error();
    // if (response.status === 200) {
    //   let result = Convert.toLoginResponse();
    //   return right(result.data);
    // } else {
    //   return left(new ServerError('Server error', 'Error response'));
    // }
  }
}

import {baseUrl} from '../../../../../src/config/ApiUrl';
import {Failure, ServerFailure} from '../../../../core/error/failure';
import {Either, left, right} from '../../../../core/usecases/Either';
import {LoginRepository} from '../../domain/repositories/LoginRepository';
import {Convert, User} from '../entities/LoginResponse';

export class LoginRepositoryImpl implements LoginRepository {
  async login(
    _username: string,
    _password: string,
  ): Promise<Either<Failure, User>> {
    try {
      const formData = new FormData();
      formData.append('username', _username);
      formData.append('password', _password);
      let response = await fetch(baseUrl + '/login', {
        method: 'POST',
        headers: {
          'content-type': 'multipart/form-data',
        },
        body: formData,
      });
      let jsonString = await response.text();
      let result = Convert.toLoginResponse(jsonString);
      if (result.status === 200) {
        return right(result.data);
      } else {
        return left(new ServerFailure(result.message));
      }
    } catch (error) {
      return left(new ServerFailure(String(error)));
    }
  }
}

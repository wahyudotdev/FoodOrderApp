import {NetworkError, ServerError} from 'core/error/exception';
import {Failure, NetworkFailure, ServerFailure} from 'core/error/failure';
import {Either, left, right} from 'core/usecases/Either';
import {FoodRepository} from '../../domain/repositories/FoodRepository';
import {Food} from '../entities/FoodList';
import {FoodNetworkDatasource} from '../datasource/FoodNetworkDatasource';

export class FoodRepositoryImpl implements FoodRepository {
  networkDataSource: FoodNetworkDatasource;

  constructor(networkDataSource: FoodNetworkDatasource) {
    this.networkDataSource = networkDataSource;
  }

  async getFoodList(): Promise<Either<Failure, Food[]>> {
    try {
      let result = await this.networkDataSource.getFoodList();
      return right(result);
    } catch (error) {
      switch (error) {
        case ServerError:
          return left(new ServerFailure('Error dari server'));
        case NetworkError:
          return left(new NetworkFailure('Periksa koneksi jaringan anda'));
        default:
          return left(new ServerFailure('Error tidak diketahui'));
      }
    }
  }
}

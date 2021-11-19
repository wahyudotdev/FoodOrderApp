import {Failure} from '../error/failure';
import {Either} from './Either';

export interface UseCase<T, Params> {
  call(arg: Params): Promise<Either<Failure, T>>;
}

export interface Params {}

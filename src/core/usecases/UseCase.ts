import {Either} from './Either';

export interface UseCase<T, U> {
  call(): Promise<Either<Error, T>>;
}

import {Failure} from 'core/error/failure';
import {Either} from 'core/usecases/Either';
import {Food} from '../../data/entities/FoodList';

export interface FoodRepository {
  getFoodList(): Promise<Either<Failure, Array<Food>>>;
}

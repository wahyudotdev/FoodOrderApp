import {Failure} from 'core/error/failure';
import {Either} from 'core/usecases/Either';
import {NoParams, UseCase} from 'core/usecases/UseCase';
import {Food} from 'features/home/data/entities/FoodList';
import {FoodRepository} from '../repositories/FoodRepository';

export class GetFoodList implements UseCase<Array<Food>, NoParams> {
  repository: FoodRepository;

  constructor(repository: FoodRepository) {
    this.repository = repository;
  }

  async call(_arg: NoParams): Promise<Either<Failure, Food[]>> {
    return await this.repository.getFoodList();
  }
}

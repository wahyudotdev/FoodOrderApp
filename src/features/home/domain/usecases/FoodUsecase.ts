import {FoodNetworkDatasourceImpl} from 'features/home/data/datasource/FoodNetworkDatasource';
import {FoodRepositoryImpl} from 'features/home/data/repositories/FoodRepositoryImpl';

const Repository = async () => {
  let datasource = new FoodNetworkDatasourceImpl();
  return new FoodRepositoryImpl(datasource);
};

export const getFoodList = async () => {
  let datasource = Repository();
  let result = await (await datasource).getFoodList();
  return result;
};

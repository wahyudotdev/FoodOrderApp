import {baseUrl} from 'config/ApiUrl';
import {NetworkError, ServerError} from 'core/error/exception';
import {Convert, Food} from '../entities/FoodList';

export interface FoodNetworkDatasource {
  getFoodList(): Promise<Food[]>;
}

export class FoodNetworkDatasourceImpl implements FoodNetworkDatasource {
  async getFoodList(): Promise<Food[]> {
    try {
      let response = await fetch(baseUrl + '/foods');
      if (response.status === 200) {
        let data = Convert.toFoodListResponse(await response.text());
        if (data.data !== undefined) {
          return data.data;
        } else {
          return [];
        }
      } else {
        throw new ServerError('Server error', response.status.toString());
      }
    } catch (error) {
      throw new NetworkError('Network error', 'Network error');
    }
  }
}

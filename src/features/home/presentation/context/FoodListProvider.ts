import {Food} from 'features/home/data/entities/FoodList';
import React from 'react';

export interface FoodListProvider {
  foodList: Food[];
  fn: Function;
}

export const FoodListProvider = React.createContext<FoodListProvider>(
  {} as any,
);

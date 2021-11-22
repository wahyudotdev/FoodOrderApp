export interface FoodListResponse {
  status?: number;
  message?: string;
  data?: Food[];
}

export interface Food {
  id: number;
  name: string;
  price: number;
  photo: string;
  description: string;
  createdAt: Date;
}

export class Convert {
  public static toFoodListResponse(json: string): FoodListResponse {
    return JSON.parse(json);
  }

  public static foodListResponseToJson(value: FoodListResponse): string {
    return JSON.stringify(value);
  }
}

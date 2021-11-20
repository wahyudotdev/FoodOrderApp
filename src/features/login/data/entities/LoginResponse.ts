export interface LoginResponse {
  status: number;
  message: string;
  data: User;
}

export interface User {
  id?: number;
  name?: string;
  photo?: string;
}

export class Convert {
  public static toLoginResponse(json: string): LoginResponse {
    return JSON.parse(json);
  }

  public static loginResponseToJson(value: LoginResponse): string {
    return JSON.stringify(value);
  }
}

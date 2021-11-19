export class ServerError implements Error {
  name: string;
  message: string;
  stack?: string | undefined;

  constructor(_name: string, _message: string, _stack?: string) {
    this.name = _name;
    this.message = _message;
    this.stack = _stack;
  }
}

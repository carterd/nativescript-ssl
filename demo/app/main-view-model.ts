import { Observable } from 'tns-core-modules/data/observable';
import { Ssl } from 'nativescript-ssl';

export class HelloWorldModel extends Observable {
  public message: string;
  private ssl: Ssl;

  constructor() {
    super();

    this.ssl = new Ssl();
    this.message = this.ssl.message;
  }
}

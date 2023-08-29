import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppCommonService {
  parse: JSON['parse'];
  stringify: JSON['stringify'];
  localStorage: Storage;

  constructor(private http: HttpClient) {
    this.parse = JSON.parse;
    this.stringify = JSON.stringify;
    this.localStorage = localStorage;
  }
  getStoredObject<T>(objectName: string): T | undefined {
    const objectString = this.localStorage.getItem(objectName);
    if (!objectString) {
      return undefined;
    }
    return this.parse(objectString) as T;
  }

  storeObject(objectName: string, objectToStore: {}): void {
    this.localStorage.setItem(objectName, this.stringify(objectToStore));
  }
}

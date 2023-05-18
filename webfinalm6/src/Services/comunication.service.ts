import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentComunicationService {
  public refreshComponentEvent = new EventEmitter();

  constructor() { }
}

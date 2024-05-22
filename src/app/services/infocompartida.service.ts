import { Injectable } from '@angular/core';
import { Mientidad } from '../models/mientidad';

@Injectable({
  providedIn: 'root'
})
export class InfocompartidaService {
  mientidad: Mientidad = new Mientidad(null, null, null, null, null, null, null, null, null)

  constructor() { }

  getMientidad(): Mientidad{
    return this.mientidad;
  }
  setMientidad(mientidad: Mientidad){
    this.mientidad = mientidad;
  }
}

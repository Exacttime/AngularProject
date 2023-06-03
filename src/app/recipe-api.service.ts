import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class RecipeAPIService {
  name!: string
  status!: string
  getRandomJoke() {
    return axios.get("https://rickandmortyapi.com/api/character/?page=1", {
       params: {
        'results':{
          'id': 1,
          'name': this.name,
         'status': this.status
        }
       }
    });
  }
  constructor() { }
}

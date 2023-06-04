import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentsModule } from './Components/components.module';
import { CardClass } from './Components/CardClass';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
interface apiResponse{
  results: any[];
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  getObjetosAPI(): Observable<apiResponse> {
    return this.http.get<apiResponse>('https://rickandmortyapi.com/api/character/?page=1'); // Substitua 'URL_DA_API' pela URL real da sua API
  }
  criarInstanciasClasse() {
    return this.getObjetosAPI().pipe(
      map((response) => {
        const objetos = response.results;
        const instancias: CardClass[] = [];
        console.log(objetos);
        for (const objeto of objetos) {
          const tittle = objeto.name
          const content = objeto.episode
          const status = objeto.status
          const id = objeto.id
          const age = objeto.age
          const image = objeto.image

          const instancia = new CardClass(tittle, content,status,id,age,image);
          instancias.push(instancia);
        }
        return instancias;
      })
    );
  }
}

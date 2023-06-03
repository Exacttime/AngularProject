import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RecipeAPIService } from 'src/app/recipe-api.service';
import axios from 'axios';


@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})


export class CardItemComponent  implements OnInit {
  content!: string;
  name!: string;
  id!: number;
  image!: ImageData;
  resultsArray: any[] = [];
  private apiUrl = "https://rickandmortyapi.com/api/character/?page=1";
  public headers = {
    'name': this.name,
    'id': this.id
  };
  constructor(private recipeApi: RecipeAPIService) { }
  ngOnInit() {  axios.get(this.apiUrl, { headers: this.headers })
  .then(response => {
    for (let i = 0; i < response.data.results.length; i++){
      const result = response.data.results[i];
      const character = {
        nome: result.name,
        id:   result.id,
        status: result.status,
        image: result.image,
      }
    this.resultsArray.push(character);
    this.name = character.nome;
    this.content = character.status;
    this.image = character.image;
    console.log(character);
    }
    //console.log(response.data.results);
  })
  .catch(error => {
    console.error(error);
  });}
  getCharacter(){
  }
};

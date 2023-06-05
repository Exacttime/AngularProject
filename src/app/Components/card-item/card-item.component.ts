import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApiService } from 'src/app/recipe-api.service';
import { CardClass } from '../CardClass';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})

export class CardItemComponent  implements OnInit {
  instancias: CardClass[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.criarInstanciasClasse().subscribe((instancias) => {
      this.instancias = instancias;
    });
  }
}

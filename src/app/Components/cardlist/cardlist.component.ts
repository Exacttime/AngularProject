import { Component, inject , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss'],
})
export class CardlistComponent  implements OnInit {
  public folder!: string;
  constructor() {}
  ngOnInit() {
    this.folder;
  }
}

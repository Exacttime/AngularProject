import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FolderPage } from './folder.page';
import { CardlistComponent } from '../Components/cardlist/cardlist.component';

const routes: Routes = [
  {path: '',component: FolderPage},
  {path: 'cardlist',component:CardlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}

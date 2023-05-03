import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './components/cardapio/cardapio.component';

const routes: Routes = [
  {path: '', redirectTo: 'cardapio', pathMatch: 'full'},
  {path: 'cardapio', component: CardapioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

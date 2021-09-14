import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import {DKmagicComponent} from './others/d-kmagic/d-kmagic.component';


const routes: Routes = [
  {    path: '', component: MainComponent  },
  {    path: 'dKmagic', component: DKmagicComponent  }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

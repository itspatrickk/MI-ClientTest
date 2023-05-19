import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegissterComponent } from '../regisster.component';

const routes: Routes = [
  {
    path:'',
    component:RegissterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegissterRoutingModule { }

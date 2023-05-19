import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';

const routes: Routes = [
	{
		path:'',
		redirectTo:'login',
		pathMatch:'full'
	},
	{
		path:'login',
		loadChildren:()=> import('./login/login.module').then(m=> m.LoginModule)
	},
	{
		path:'register',
		loadChildren: ()=>import('./register/register.module').then(m=>m.RegisterModule)
	},
	{
		path:'usermanagement',
		loadChildren: ()=>import('./usermanagement/usermanagement.module').then(m=>m.UsermanagementModule)
	},
	{
		path:'regisster',
		loadChildren: ()=>import('./regisster/regisster/regisster.module').then(m=>m.RegissterModule)
	}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
  
})
export class AppRoutingModule {
	
 }

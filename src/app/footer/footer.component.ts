import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
	constructor (private routes : Router){
		
	}
	
	/*goToPageRegister(){
		this.routes.navigate(RegisterComponent);
	}*/
	
}

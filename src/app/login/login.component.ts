import { Component } from '@angular/core';
import { FormGroup , FormBuilder , FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
	/*form: FormGroup = new FormGroup ({})
	
	constructor(private fb: FormBuilder){
		this.form = fb.group({
			  number: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
		})
	}
	
	get f(){
		return this.form.controls;
	}
	*/
	/*numberOnly(event):boolean{
		const charCode =(event.which)? event.which : event.keycode;
		if(charCode > 31 && (charCode < 48 || charCode >57)){
			return false;
		}
		return false;
		}
	*/
}

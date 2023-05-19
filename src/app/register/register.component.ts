import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {BsDatepickerConfig} from'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent {
	
	@ViewChild('timeTextBox') timeTextBox!:ElementRef;
	
	ngAfterViewInit(): void{
		this.timeTextBox.nativeElement.value ="2021";
	}
	
	onChange(event:Event):void {
		const selectedValue= (event.target as HTMLSelectElement).value;
		this.timeTextBox.nativeElement.value= selectedValue;
	}
}

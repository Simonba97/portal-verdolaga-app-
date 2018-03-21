import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor() {
		setTimeout(function () {
			console.log('Uno');
		},5000);			
	}
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-torneos',
	templateUrl: 'torneos.component.html'
})

export class TorneosComponent {
	constructor(){
		console.log('TorneosComponent is up success!');		
	}
}
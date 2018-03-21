import { Component } from '@angular/core';
import { PartidosService } from '../services/partidos.services'; 
@Component({
	selector: 'app-crud',
	templateUrl: './crud.component.html'
})

export class CrudComponent {
	partido:any = {};

	constructor(private partidosService:PartidosService) {

	}

	guardarPartido() {
		this.partido.id = Date.now();
		this.partidosService.guardarPartido(this.partido);
	}
}
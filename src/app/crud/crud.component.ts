import { Component } from '@angular/core';
import { PartidosService } from '../services/partidos.services'; 
import { TorneosService } from '../services/torneos.services';
import { EquiposService } from '../services/equipos.services';

@Component({
	selector: 'app-crud',
	templateUrl: './crud.component.html'
})

export class CrudComponent {
	model:any;
	partido:any = {};
	torneos:any = [];
	equipos:any = [];

	constructor(private partidosService:PartidosService,
				private torneosService:TorneosService,
				private equiposService:EquiposService) {

		this.torneosService.getTorneos()
			.valueChanges()
			.subscribe(torneos => {
		        this.torneos = torneos;		        
			});

		this.equiposService.getEquipos()
			.valueChanges()
			.subscribe(equipos => {
				this.equipos = equipos;
			});
	}

	validateData() {
		return this.partido.local&&this.partido.visitante&&this.partido.urlLocal&&this.partido.urlVisitante&&this.partido.fecha&&this.partido.descripcion&&this.partido.estadio&&this.partido.tv&&this.partido.campeonato;
	}

	guardarPartido() {			

		if (this.validateData()) {
			this.partido.id = Date.now();		
			this.partidosService.guardarPartido(this.partido);	
			alert('Partido guardado correctamente!');
			this.partido = {};	
		} else {
			alert('Llene TODOS los campos');
		}
	}
}
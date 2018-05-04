import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartidosService } from '../services/partidos.services';
import * as moment from 'moment';

@Component({
	selector: 'app-resultado',
	templateUrl: 'resultado.component.html'
})

export class ResultadoComponent {

	resultado = null;
	local:string = null;
	visitante:string = null;
	urlLocal:string = null;
	urlVisitante:string = null;
	fecha:string = null;
	hora:string = null;
	descripcion:string = null;
	estadio:string = null;
	tv:string = null;

	constructor(private router:ActivatedRoute,
		private partidosService:PartidosService) {
		// partidosService
		// 	.getPartidos()
		// 	.valueChanges()
		// 	.subscribe(partido => {			
		// 		this.resultado = partido[0];
		// 		this.local = this.resultado.local;
		// 		this.visitante = this.resultado.visitante;
		// 		this.urlLocal = this.resultado.urlLocal;
		// 		this.urlVisitante = this.resultado.urlVisitante;
		// 		this.fecha = this.resultado.fecha;
		// 		this.hora = this.resultado.hora;
		// 		this.descripcion = this.resultado.descripcion;
		// 		this.estadio = this.resultado.estadio;
		// 		this.tv = this.resultado.tv;
		// 	});

		partidosService.getAnteriorPartido()
			.then((partido:any)=>{
				this.resultado = partido;
				this.local = this.resultado.local;
				this.visitante = this.resultado.visitante;
				this.urlLocal = this.resultado.urlLocal;
				this.urlVisitante = this.resultado.urlVisitante;
				this.fecha = moment(this.resultado.fecha).format('DD/MM/YYYY HH:mm');
				this.descripcion = this.resultado.descripcion;
				this.estadio = this.resultado.estadio;
				this.tv = this.resultado.tv;
			}); // end then
	}

} 
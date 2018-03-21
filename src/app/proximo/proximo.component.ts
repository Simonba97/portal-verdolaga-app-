import { Component } from '@angular/core';
import { PartidosService } from '../services/partidos.services';

@Component({
	selector: 'app-proximo',
	templateUrl: './proximo.component.html'
})

export class ProximoComponent {
	proximoPartido = null;
	local:string = null;
	visitante:string = null;
	urlLocal:string = null;
	urlVisitante:string = null;
	fecha:string = null;
	hora:string = null;
	descripcion:string = null;
	estadio:string = null;
	tv:string = null;
	constructor(private partidosService:PartidosService){
		partidosService
			.getPartidos()
			.valueChanges()
			.subscribe(partido => {			
				this.proximoPartido = partido[0];
				this.local = this.proximoPartido.local;
				this.visitante = this.proximoPartido.visitante;
				this.urlLocal = this.proximoPartido.urlLocal;
				this.urlVisitante = this.proximoPartido.urlVisitante;
				this.fecha = this.proximoPartido.fecha;
				this.hora = this.proximoPartido.hora;
				this.descripcion = this.proximoPartido.descripcion;
				this.estadio = this.proximoPartido.estadio;
				this.tv = this.proximoPartido.tv;
			});
	}
}
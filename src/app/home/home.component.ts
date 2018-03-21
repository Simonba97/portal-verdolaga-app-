import { Component } from '@angular/core';
import { PartidosService } from '../services/partidos.services'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
	proximoPartido = null;
	local:string = null;
	visitante:string = null;
	urlLocal:string = null;
	urlVisitante:string = null;
	id:string = null;

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
				this.id = this.proximoPartido.id;					
			});

		partidosService.getProximoPartido();
	}
}

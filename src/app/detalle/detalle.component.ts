import { Component } from '@angular/core'
import { PartidosService } from '../services/partidos.services'
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment'; // add this 1 of 4

@Component({
	selector: 'app-detalle',
	templateUrl: 'detalle.component.html'
})

export class DetalleComponent {

	partido:any = {};
	idPartido:string = null;

	constructor(private partidosServices:PartidosService, 
				private router:ActivatedRoute) {

		this.idPartido = this.router.snapshot.params['id'];
		this.partidosServices.getPartidoById(this.idPartido)
			.valueChanges()
            .subscribe((partido)=>{
                this.partido = partido;
            	let dateGame = this.partido.fecha;            	
                this.partido.fecha = moment(dateGame).format('DD/MM/YYYY');
                this.partido.hora = moment(dateGame).format('HH:mm');
            });
            
	}
}
import { Component } from '@angular/core'
import { PartidosService } from '../services/partidos.services'
import { ActivatedRoute } from '@angular/router';

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
                console.log(this.partido);
            });
	}
}
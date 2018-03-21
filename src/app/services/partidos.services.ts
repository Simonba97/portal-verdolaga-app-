import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database/database';


@Injectable() 
export class PartidosService {
	constructor(private afDB:AngularFireDatabase) {}

	public guardarPartido(partido) {
		this.afDB.database.ref( 'partidos/' + partido.id ).set(partido);
	}

	public getPartidos() {				
		return this.afDB.list('partidos/');
	}

	public getPartidoById(id) {
	 	return this.afDB.object('partidos/'+id);
	}

	public getProximoPartido(){
		this.getPartidos()
			.valueChanges()
			.subscribe(partidos => {			
	            
			});
	}

}
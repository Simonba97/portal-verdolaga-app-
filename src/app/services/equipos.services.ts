import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database/database';

@Injectable() 
export class EquiposService {
	constructor(private afDB:AngularFireDatabase) {}

	getEquipos() {
		return this.afDB.list('equipos/');
	}
	
}
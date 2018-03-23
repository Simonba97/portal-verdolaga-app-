import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database/database';

@Injectable() 
export class TorneosService {
	constructor(private afDB:AngularFireDatabase) {}

	getTorneos() {
		return this.afDB.list('torneos/');
	}
	
}
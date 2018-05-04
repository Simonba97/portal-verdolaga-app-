import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database/database';
import * as moment from 'moment'; // add this 1 of 4

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

	/**
	 * Metodo que me busca el partido más cercano a la fecha en la BD
	 * @return {promise} partido
	 */
	public getProximoPartido(){
		return new Promise(resolve=>{
			this.getPartidos()
			.valueChanges()
			.subscribe(partidos => {	
				let dateToday = moment();		
				let nextGame:any;
				let infoGame:any = {};
				partidos.forEach(function(val) {
					infoGame = val;								
					let dateGame = moment(infoGame.fecha);												
					if (dateGame > dateToday) {
						// Evaluamos si es el primer registro
						if (!nextGame) {
							nextGame = infoGame;
						} else {
							nextGame = dateGame < moment(nextGame.fecha) ? infoGame : nextGame;
						}
					}
				}); //end forEach
				resolve(nextGame);
			}); // end Subscribe
		}); //end promise
		
	}// end getProximoPartido

	/**
	* Metodo que me busca el partido más cercano a la fecha en la BD
	* @return {promise} partido
	*/
	public getAnteriorPartido(){
		return new Promise(resolve=>{
			this.getPartidos()
			.valueChanges()
			.subscribe(partidos => {	
				let dateToday = moment();		
				let resultGame:any;
				let infoGame:any = {};
				partidos.forEach(function(val) {
					infoGame = val;								
					let dateGame = moment(infoGame.fecha);												
					if (dateGame < dateToday) {
						// Evaluamos si es el primer registro
						if (!resultGame) {
							resultGame = infoGame;
						} else {
							resultGame = dateGame > moment(resultGame.fecha) ? infoGame : resultGame;
						}
					}
				}); //end forEach
				resolve(resultGame);
			}); // end Subscribe
		}); //end promise
		
	}// end getProximoPartido

}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from  "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import de componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProximoComponent } from './proximo/proximo.component';
import { CrudComponent } from './crud/crud.component';
import { DetalleComponent } from './detalle/detalle.component';

// importaciones necesarias para FIREBASE 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// AwesomeFonts
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Services
import { PartidosService } from './services/partidos.services';

const appRoutes:Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'proximo', component: ProximoComponent },
  { path: 'admin', component: CrudComponent },
	{ path: 'detalle/:id', component: DetalleComponent },
]

export const firebaseConfig = {
  apiKey: "AIzaSyCz95eb11JBLVO9-mCgm08RWCFT-C34pwI",
  authDomain: "portalverdolagaapp.firebaseapp.com",
  databaseURL: "https://portalverdolagaapp.firebaseio.com",
  storageBucket: "portalverdolagaapp.appspot.com",
  messagingSenderId: "81767401122"
};

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    ProximoComponent,
    CrudComponent,
    DetalleComponent,
  ],

  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFontAwesomeModule,
    FormsModule,
  ],  
  providers: [PartidosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

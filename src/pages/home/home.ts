import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()//MT:Habilita a referência da página pelo nome da classe entre 'aspas'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'//MT:Referência para qual arquivo HTML este controller esta controlando
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login() {
    //MT: navegar entre páginas
    //MT: o método 'setRoot' não empilha páginas, o método 'push' empilha páginas
    this.navCtrl.setRoot('CategoriasPage');
  }

}

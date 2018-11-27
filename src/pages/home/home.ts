import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()//MT:Habilita a referência da página pelo nome da classe entre 'aspas'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'//MT:Referência para qual arquivo HTML este controller esta controlando
})
export class HomePage {

  creds : CredenciaisDTO = {
    email : "",
    senha : ""
  }

  constructor(public navCtrl: NavController, public menu:MenuController, public auth : AuthService) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  ionViewDidEnter() {
    this.auth.refreshToken()
      .subscribe(response => {
        this.auth.successfullLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage');
      },
      error => {});
  }

  login() {
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.successfullLogin(response.headers.get('Authorization'));
        //MT: navegar entre páginas
        //MT: o método 'setRoot' não empilha páginas, o método 'push' empilha páginas
        this.navCtrl.setRoot('CategoriasPage');
      },
      error => {});
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

}

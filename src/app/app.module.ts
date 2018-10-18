import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//MT:O que faz essa classe ser um module é a anotação decorator '@NgModule' que tem configurações para alterar a classe
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,//MT:Módulos básicos da aplicação Ionic
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [//MT:declarar as paginas do component
    MyApp
  ],
  providers: [//MT:declarar as classes que serão uma única instância
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

//MT:a palavra 'export' serve para dizer que essa classe pode ser importada em outros lugares do código
export class AppModule {}

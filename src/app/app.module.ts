import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriaService } from '../services/domain/categoria.service';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';
import { AuthService } from '../services/auth.service';

//MT:O que faz essa classe ser um module é a anotação decorator '@NgModule' que tem configurações para alterar a classe
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,//MT:Módulos básicos da aplicação Ionic
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [//MT:declarar as paginas do component
    MyApp
  ],
  providers: [//MT:declarar as classes que serão uma única instância
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaService,
    ErrorInterceptorProvider,
    AuthService
  ]
})

//MT:a palavra 'export' serve para dizer que essa classe pode ser importada em outros lugares do código
export class AppModule {}

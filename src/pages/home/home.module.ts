import { IonicPageModule } from 'ionic-angular/module';
import { NgModule } from '@angular/core';
import { HomePage } from './home';

@NgModule({
    declarations: [HomePage],//MT:'HomePage' é correspondente ao nome da classe do arquivo home.ts
    imports: [IonicPageModule.forChild(HomePage)]
})
export class HomeModule {}
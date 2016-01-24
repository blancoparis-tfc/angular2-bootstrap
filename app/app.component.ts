import {Component} from 'angular2/core';
import {CabeceraComponent} from './component/comun/cabecera.component';
import {CuerpoComponent} from './component/comun/cuerpo.component';
import {PieComponent} from './component/comun/pie.component';
@Component({
  selector:'my-app',
  templateUrl:'/app/app.component.html',
  directives:[CabeceraComponent,CuerpoComponent,PieComponent]
})
export class AppComponent{};

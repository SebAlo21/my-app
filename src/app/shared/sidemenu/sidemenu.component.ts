import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [
    CommonModule,RouterModule
  ],
  templateUrl: './sidemenu.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent { 

  public menuItems = routes
  .map(route => route.children??[])
  .flat()
  .filter(route=> route && route.path)
  .filter(route=> !route.path?.includes(':'))


  constructor(){
    // //Obtener las rutas del dashboard
    // const dashboardRoutes = routes
    // //mapear las rutas para obtener los hijos 
    // .map(route => route.children??[])
    // //aplanar el arrreglo de rutas
    // .flat()
    // //Filtar las rutas que no tienen path 
    // .filter(route=> route && route.path)
    // //Quitar la route que contiene el simbolo de :
    // .filter(route=> !route.path?.includes(':'))

    // //Imprimir las rutas
    // console.log(dashboardRoutes) ;

  }







}

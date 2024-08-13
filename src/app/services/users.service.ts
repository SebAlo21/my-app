import { Injectable, signal } from '@angular/core';
import { User } from '@interfaces/re-response';

interface State{
  users:User[],
  loading:boolean
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

    #state = signal<State>({
    loading:true,
    users:[]
  })




  constructor() { 
   



    console.log("Cargando Data")
  }

}

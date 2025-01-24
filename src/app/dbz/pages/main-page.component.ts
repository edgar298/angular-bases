import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';
import {  } from 'uuid';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  //hacemos la inyeccion de dependencia
  constructor(private dbzService:DbzService){}
/*
  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },
  {
    name: 'Goku',
    power: 9500
  },

  {
    name: 'Vegeta',
    power: 7500
  }
];

  onNewCharacter(character: Character):void {
    console.log('ManiPage');
    console.log(character);

    this.characters.push(character);

   }

   ondDeleteCharacter( index:number){
    this.characters.splice(index,1); //borra el elemento index el 1 es el numero de elementos  //splice para insertar un elemento o una posicion random o una posicion especifica del arreglo
   }
*/


get characters():Character[]{
  return [...this.dbzService.characters];  //retorna un arreglo de objetos con el spread
}

onDeleteCharacter(id:string):void{
  this.dbzService.deleteCharacterById(id);
}

onNewCharacter(character:Character):void{
  this.dbzService.addCharacter(character);
}
}

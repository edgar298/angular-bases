import { Injectable } from '@angular/core';
import { v4 as uuid  } from 'uuid';

console.log(uuid());

import { Character } from '../interfaces/character.interface';




@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },

  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }
];

  addCharacter(character: Character):void {
    console.log('ManiPage');
    console.log(character);
/*
    const newCharacter: Character = {
      id: uuid(),
       name: character.name,
       power: character.power
    }
*/
//esto es lo mismo que lo de arriba comentado
const newCharacter: Character ={ id: uuid(), ...character };//operador spread para copiar todo lo que viene en character a newCharacter con el operador spread
    console.log(newCharacter);
    this.characters.push(newCharacter);

   }

  /* ondDeleteCharacter( index:number){
    this.characters.splice(index,1); //borra el elemento index el 1 es el numero de elementos  //splice para insertar un elemento o una posicion random o una posicion especifica del arreglo
   }*/


    deleteCharacterById(id:string){
      this.characters = this.characters.filter(character => character.id !== id);// el filter va a regresar un nuevo arreglo, el filter va a retornar todo lo que esa condicion cumpla true
    }


}

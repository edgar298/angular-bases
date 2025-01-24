import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './addCharacter.component.html',
  styleUrl: './addCharacter.component.css',

})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void{

    //debugger  //para debuggear

    console.log(this.character);
    if(this.character.name.length === 0) return; //si no viene nombre no lo voy aceptar retorno
    this.onNewCharacter.emit(this.character);
    /*this.character.name = '';
    this.character.power = 0;*/
    //es lo mismo de arriba para limpiar
    this.character = {name: '', power: 0};

  }

}

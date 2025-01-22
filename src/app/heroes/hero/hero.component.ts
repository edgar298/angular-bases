import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  get HeroDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
 /*   //TODO
    throw 'Metodo no implementado';
    */
   this.name = 'Spiderman';
  }

  changeAge():void{
    this.age = 25;
  }

  resetForm():void{
    //this.name = 'ironman';
    this.age = 45;

    //document.querySelectorAll('h1')!.forEach(element => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         (element => {
   //   element.innerHTML = '<h1>Desde Angular</h1>';
  //  });

  }
}






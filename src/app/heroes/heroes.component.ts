import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;
  tmp: boolean = true; 

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  
selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}

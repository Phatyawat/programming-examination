import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }

  selectedHero = ''

  heroList = [
    'DrNice',
    'necromancer',
    'Bombasto',
    'Celeritas',
    'Magneta',
    'RubberMan',
    'Dynama',
    'DrIQ',
    'Magma',
    'Tornado',
  ]

  ngOnInit(): void {
  }

}

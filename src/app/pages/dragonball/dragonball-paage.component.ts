import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  templateUrl: './dragonball-paage.component.html',
  styleUrls: ['./dragonball-paage.component.css']
})
export class DragonballComponent {
  characters= signal<Character[]>([
    { id: 1, name: 'Goku', power: 10001 },
    { id: 2, name: 'Vegeta', power: 9001 },
    { id: 3, name: 'Piccolo', power: 3000 },
  ]);
}


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

  name = signal('');
  power = signal(0);

  characters= signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
  ]);
  // total = signal<number[]>;
  addCharacter(): void {
  if (!this.name() || !this.power() || this.power() < 0) return;
    const newCharacter: Character = { id: this.characters().length + 1, name: this.name(), power: this.power() };
    // this.characters().push(newCharacter); esta es la manera antigua de hacerla
    this.characters.update((list)  => [...list, newCharacter]);
    console.log(newCharacter);
    console.log(this.characters());
    this.resesrFields();
  }
  resesrFields(){
    this.name.set('');
    this.power.set(0);
  }
}


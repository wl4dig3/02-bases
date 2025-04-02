import { Component, output, signal } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './dragonball-character-add.component.html',
})

export class CharacterAddComponent {

// characters = input.required<Character[]>();

name = signal('Iroman W');
power = signal(4500);

newCharacter = output<Character>();
  addCharacter(): void {
  if (!this.name() || !this.power() || this.power() < 0) return;
    const newCharacter: Character = { 
        id: Math.floor(Math.random() * 1000), 
        name: this.name(), 
        power: this.power() 
    };
    // this.characters().push(newCharacter); esta es la manera antigua de hacerla
    // this.characters.update((list)  => [...list, newCharacter]);
    // usando output:
    this.newCharacter.emit(newCharacter);
    console.log({newCharacter});
    // console.log(this.characters());
    this.resesrFields();
  }

  resesrFields(){
    this.name.set('');
    this.power.set(0);
  
}

}

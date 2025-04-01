import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';



@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-page-super.component.html',
  styleUrls: ['./dragonball-page-super.component.css'],
  imports: [CharacterListComponent]
})
export class DragonballPageSuperComponent {

  name = signal('Iroman');
  power = signal(4500);

  characters= signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);
  // total = signal<number[]>;
  addCharacter(): void {
  if (!this.name() || !this.power() || this.power() < 0) return;
    const newCharacter: Character = { id: this.characters().length + 1, name: this.name(), power: this.power() };
    // this.characters().push(newCharacter); esta es la manera antigua de hacerla
    // this.characters.update((list)  => [...list, newCharacter]);
    console.log(newCharacter);
    console.log(this.characters());
    this.resesrFields();
  }
  resesrFields(){
    this.name.set('');
    this.power.set(0);
  }
}


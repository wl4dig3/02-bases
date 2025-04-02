import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from '../../components/dragonball/character-add/dragonball-character-add.component';


@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-page-super.component.html',
  styleUrls: ['./dragonball-page-super.component.css'],
  imports: [CharacterListComponent, CharacterAddComponent]
})
export class DragonballPageSuperComponent {


  characters= signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);
  
  addCaracter(character: Character){
    this.characters.update(list => [...list, character]);
  }
}


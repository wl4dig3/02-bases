import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './dragonball-character-add.component.html',
})
export class CharacterAddComponent {
characters = input.required<Character[]>();

}

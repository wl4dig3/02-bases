import { Injectable, signal, effect } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
    const characters = localStorage.getItem('characters');
    return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonballService {
    characters= signal<Character[]>(loadFromLocalStorage());
      
      addCaracter(character: Character){
        this.characters.update(list => [...list, character]);
      }
      saveToLocalStorage = effect( () => {
        localStorage.setItem('characters', JSON.stringify(this.characters()));
      })
    constructor() { }
    
}
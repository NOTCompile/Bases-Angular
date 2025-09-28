import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

/* Funcion que cargar los datos guardads en Local Storage */
const loadFromLocalStorage = () => {
  const characters = localStorage.getItem('characters');
  
  return characters ? JSON.parse(characters) : [];
}

@Injectable({
  providedIn: 'root'
})

export class DragonballService {
  /* Carga los datos de Local Storage */
  characters = signal<Character[]>(loadFromLocalStorage());

  /* Graba en Local Storage */
  saveToLocalStorage = effect(()=> {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  })

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }
}
import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page.component',
  imports: [/* NgClass */],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
  name = signal('Gohan');
  power = signal(100);


  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 },
    { id: 2, name: 'Vegeta', power: 9000 },
    { id: 3, name: 'Piccolo', power: 7000 },
    { id: 4, name: 'Yamcha', power: 500 },
  ]);

  /*   powerClasses = computed(() => {
      return {
        'text-danger': true,
      };
    }); */

  addCharacter() {
    /* console.log(this.name(), this.power()); */
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    };

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    /* this.characters().push(newCharacter); */
    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}

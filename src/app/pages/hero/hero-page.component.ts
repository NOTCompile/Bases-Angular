import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
    imports: [UpperCasePipe]
})

export class HeroPageComponent {
    name = signal('Ironman');
    age = signal(45);

    heroDescription = computed(() =>{
        const description = `${this.name()} - ${this.age()}`;
        return description;
    })

    /*getHeroDescription(): string {
        return `${this.name()} - ${this.age()}`;
    }*/

    capitalizedName = computed(() => this.name().toUpperCase());    

    changeHero(): void {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    chageAge(): void {
        this.age.set(60);
    }

    resetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }
}


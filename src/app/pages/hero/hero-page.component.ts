import { Component, signal } from "@angular/core";


@Component({
    selector: 'hero-page',
    templateUrl: './hero-page.component.html'
})

export class HeroPageComponent {

    name = signal('Iroman');
    age = signal(45);

    getHeroDescription(): string {
        return `${this.name()} - ${this.age()}`;
    }

    changeHero(){
        this.name.set('Spiderman');
        this.age.set(22);
    }

    resetForm(){
        this.name.set('Iroman');
        this.age.set(45);
    }

    chageAge(){
        this.age.set(60);
    }
}

import { UpperCasePipe } from "@angular/common";
import { Component, signal, computed } from "@angular/core";


@Component({
    selector: 'hero-page',
    templateUrl: './hero-page.component.html',
    imports: [ UpperCasePipe],
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

    capitalizeName = computed(() => this.name().toUpperCase());

    resetForm(){
        this.name.set('Iroman');
        this.age.set(45);
    }

    chageAge(){
        this.age.set(60);
    }
}

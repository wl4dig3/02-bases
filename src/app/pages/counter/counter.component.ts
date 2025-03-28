import { Component, signal, ChangeDetectionStrategy } from "@angular/core";


@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styles: `
    button {
        margin: 5px;
        width: 100px;
    }`,
})
export class CounterComponent {
    counterSignal= signal(5);
    counter = 10;
    sumar(value: number) {
        // this.counter++;
        this.counter += value;
        // this.counterSignal.set(this.counterSignal() + value); a pesar que funciona, no se debe ocupar el .set, sino el .update
        this.counterSignal.update(current => current + value);
    }
    restar(value: number) {
        if(this.counter === 0) return;
        this.counter -= value;
        this.counterSignal.update(current => current - value);
    }
    reset() {    
        this.counter = 0;
        this.counterSignal.set(0);
    }
};
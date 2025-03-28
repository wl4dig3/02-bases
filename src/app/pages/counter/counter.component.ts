import { Component, signal } from "@angular/core";


@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
})
export class CounterComponent {
    counter = 10;
    sumar(value: number) {
        // this.counter++;
        this.counter += value;
    }
    restar(value: number) {
        if(this.counter === 0) return;
        this.counter -= value;
    }
    reset() {    
        this.counter = 0;
    }
};
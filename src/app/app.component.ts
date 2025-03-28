import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = 'Wladi';
  message = 'Congratulations! Your app is running. 🎉 by Wla XXX'
}

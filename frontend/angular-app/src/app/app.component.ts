import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  
  template: `
    <h1>Hello Angular</h1>
    <p>2 + 3 = {{ 2 + 3 }}</p>
    <button (click)="increment()">Clicked {{ count }} times</button>
  `,

    standalone: true,
    imports: [RouterOutlet, RouterLink],  // Add these
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'app'

  count = 0;

  increment() {
    this.count++;
  }
}

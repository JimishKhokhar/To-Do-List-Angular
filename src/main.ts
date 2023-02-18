import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { AppModule } from './app/app.module';



@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { DynamicComponentContainerComponent } from './app/dynamic-component-container/dynamic-component-container.component';
import { MyComponent1, MyComponent2 } from './app/my/my.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <button (click)="loadComponent(MyComponent1)">Load Component 1</button>
    <button (click)="loadComponent(MyComponent2)">Load Component 2</button>
    <app-dynamic-component-container></app-dynamic-component-container>
  <!-- @for( component of dynamicComponentContainer.components; track component;let index = $index){

    
    <button (click)="dynamicComponentContainer.moveUp(index)">Move Up</button>
    <button (click)="dynamicComponentContainer.moveDown(index)">Move Down</button>
  } -->
    `,
  imports: [DynamicComponentContainerComponent, MyComponent2, MyComponent1],
})
export class App {
  name = 'Angular';
  MyComponent1 = MyComponent1;
  MyComponent2 = MyComponent2;

  constructor(
    public dynamicComponentContainer: DynamicComponentContainerComponent
  ) {}

  loadComponent(component: any) {
    this.dynamicComponentContainer.loadComponent(component);
  }
}

bootstrapApplication(App);

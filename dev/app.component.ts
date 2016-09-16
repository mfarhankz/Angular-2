import {Component} from 'angular2/core';
import {FooterComponent} from './footer.component'
import {TestComponent} from "./test.component";

@Component({
    selector: 'app',
    template: `
       <h1>Hello World!</h1>
       <p>
        I am <span [style.color]="likeMe.value === 'yes' ? 'red' : ''">{{name}}</span> <span [class.like]="likeMe.value === 'yes'">do you like me</span>
      </p>
      <br>
      <br>
      <input type="text" #likeMe (keyup)="0">
      <br>
      <br>
      <button class="btn btn-primary" [disabled]="likeMe.value !== 'yes'">Only Enable if answer is yes</button>
      <br>
      <br>
      <test></test>
       <footer></footer>
    `,
    directives: [FooterComponent, TestComponent],
    styleUrls: ['src/css/app.css']

})
export class AppComponent {
  name = 'Farhan';
}

import { Component } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('enterTitle', [
      state('void', style({
        transform: 'translateX(-100%)',
        // opacity: 0
      })),
      transition(':enter', [
        animate(1000, style({
          transform: 'translateX(0)',
          // opacity: 1
        }))
      ])
    ]),
    trigger('enterMasthead', [
      state('void', style({
        backdropFilter: 'brightness(0%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(300, style({
          backdropFilter: 'brightness(100%)',
          opacity: 1
        }))
      ])
    ]),

  ]
})
export class HomeComponent {

}

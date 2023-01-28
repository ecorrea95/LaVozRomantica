import { Component } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('enterTitle', [
      state('void', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(800, style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('enterSubtitle', [
      state('void', style({
        transform: 'translateY(+100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(1600, style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ]),

  ]
})
export class HomeComponent {

}

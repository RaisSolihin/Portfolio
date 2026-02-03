import { Component } from '@angular/core';
import { ScrollFadeDirective } from '../../directives/scroll-fade.directive';
import { pageEnterAnimation } from '../../animations/page.animations';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollFadeDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [pageEnterAnimation],
  host: { '[@pageEnter]': '' },
})
export class ContactComponent {
  data = PORTFOLIO_DATA;
}

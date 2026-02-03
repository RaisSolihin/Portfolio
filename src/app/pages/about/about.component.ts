import { Component } from '@angular/core';
import { ScrollFadeDirective } from '../../directives/scroll-fade.directive';
import { pageEnterAnimation } from '../../animations/page.animations';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollFadeDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [pageEnterAnimation],
  host: { '[@pageEnter]': '' },
})
export class AboutComponent {
  data = PORTFOLIO_DATA;
}

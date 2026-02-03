import { Component } from '@angular/core';
import { ScrollFadeDirective } from '../../directives/scroll-fade.directive';
import { pageEnterAnimation } from '../../animations/page.animations';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ScrollFadeDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  animations: [pageEnterAnimation],
  host: { '[@pageEnter]': '' },
})
export class ExperienceComponent {
  data = PORTFOLIO_DATA;
}

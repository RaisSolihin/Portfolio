import { Component } from '@angular/core';
import { ScrollFadeDirective } from '../../directives/scroll-fade.directive';
import { pageEnterAnimation } from '../../animations/page.animations';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [ScrollFadeDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  animations: [pageEnterAnimation],
  host: { '[@pageEnter]': '' },
})
export class EducationComponent {
  data = PORTFOLIO_DATA;
}

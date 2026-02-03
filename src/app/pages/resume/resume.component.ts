import { Component } from '@angular/core';
import { ScrollFadeDirective } from '../../directives/scroll-fade.directive';
import { pageEnterAnimation } from '../../animations/page.animations';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [ScrollFadeDirective],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  animations: [pageEnterAnimation],
  host: { '[@pageEnter]': '' },
})
export class ResumeComponent {
  data = PORTFOLIO_DATA;
}

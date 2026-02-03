import { Component } from '@angular/core';
import { ScrollFadeDirective } from '../../directives/scroll-fade.directive';
import { pageEnterAnimation } from '../../animations/page.animations';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollFadeDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  animations: [pageEnterAnimation],
  host: { '[@pageEnter]': '' },
})
export class SkillsComponent {
  data = PORTFOLIO_DATA;
}

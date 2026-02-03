import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollFadeDirective } from '../../directives/scroll-fade.directive';
import { pageEnterAnimation } from '../../animations/page.animations';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ScrollFadeDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [pageEnterAnimation],
  host: { '[@pageEnter]': '' },
})
export class HomeComponent {
  data = PORTFOLIO_DATA;
}

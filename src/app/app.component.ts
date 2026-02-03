import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
import type { Subscription } from 'rxjs';
import { ThemeService } from './services/theme.service';
import { PORTFOLIO_DATA } from './data/portfolio-data';

const PAGE_TITLES: Record<string, string> = {
  '': 'Home',
  about: 'About',
  skills: 'Skills',
  experience: 'Experience',
  education: 'Education',
  resume: 'Resume',
  contact: 'Contact',
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  data = PORTFOLIO_DATA;
  private sub?: Subscription;

  constructor(
    public theme: ThemeService,
    private router: Router,
    private title: Title,
  ) {}

  ngOnInit(): void {
    this.updateTitle();
    this.sub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this.updateTitle());
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }


  private updateTitle(): void {
    const path = this.router.url.slice(1).split('/')[0] || '';
    const pageName = PAGE_TITLES[path] ?? 'Portfolio';
    this.title.setTitle(`${pageName} | MyPortfolio`);
  }
}

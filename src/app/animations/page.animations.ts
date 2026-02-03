import { trigger, transition, style, animate } from '@angular/animations';

/** Runs when the page component is first opened (route load or navigate) */
export const pageEnterAnimation = trigger('pageEnter', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(24px)',
    }),
    animate(
      '600ms cubic-bezier(0.22, 1, 0.36, 1)',
      style({
        opacity: 1,
        transform: 'translateY(0)',
      })
    ),
  ]),
]);

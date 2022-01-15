import {
  trigger,
  style,
  transition,
  animate,
  state,
  keyframes,
} from '@angular/animations';

export const showTabSection = trigger('showTabSection', [
  state('show', style({ opacity: 1, transform: 'translateX(0)' })),
  state('hide', style({ opacity: 0, transform: 'translateX(100%)' })),
  transition(
    '*=>hide',
    animate(
      '1s',
      keyframes([
        style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
        style({ opacity: 0.5, transform: 'translateX(50%)', offset: 0.5 }),
        style({ opacity: 0, transform: 'translateX(100%)', offset: 1 }),
      ])
    )
  ),
  transition(
    '*=>show',
    animate(
      '1s',
      keyframes([
        style({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
        style({ opacity: 0.5, transform: 'translateX(50%)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
      ])
    )
  ),
]);

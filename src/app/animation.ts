import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const hilightedStateTrigger = trigger('hilightedState', [
  state(
    'default',
    style({
      border: '2px solid #B2B6FF',
    })
  ),
  state(
    'highlighted',
    style({
      border: '4px solid #B2B6FF',
      filter: 'brightness(92%)',
    })
  ),
  transition('default => highlighted', [
    animate(
      '200ms ease-out',
      style({
        transform: 'scale(1.02)',
      })
    ),

    animate(200),
  ]),
]);

export const shownStateTrigger = trigger('shownState', [
  // transition('void => *', [
  // para a entrada ou saído do elemento é possível colocar só :enter e :leave
  // assim, não é preciso usar a wildcard * e o void, caso de elementos que não
  // estão desde logo anexados ao DOM.
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(
      300,
      style({
        opacity: 1,
      })
    ),
  ]),
  // transition('* => void', [
  transition(':leave', [
    animate(
      300,
      style({
        opacity: 0,
      })
    ),
  ]),
]);

export const checkBtnTrigger = trigger('checkBtn', [
  transition('* => checked', [
    animate(
      '400ms ease-in',
      style({
        transform: 'scale(0.4)',
      })
    ),
  ]),
]);

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      width: 0,
    }),
    animate(
      '400ms ease-out',
      keyframes([
        style({
          offset: 0,
          opacity: 0,
          width: 0,
        }),
        style({
          offset: 0.5,
          opacity: 0.5,
          width: '*',
        }),
        style({
          offset: 1,
          opacity: 1,
          width: '*',
        }),
      ])
    ),
  ]),
  transition(':leave', [
    animate(
      '400ms  cubic-bezier(.13, .9, .8, .1) ',
      style({
        opacity: 0,
        width: 0,
      })
    ),
  ]),
]);

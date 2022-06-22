/* eslint-disable no-underscore-dangle */
/* eslint-disable comma-dangle */
/* eslint-disable default-param-last */
/* eslint-disable no-else-return */

import store, {
  CHANGE_FIRST_COLOR,
  CHANGE_LAST_COLOR,
  CHANGE_DIRECTION_TO_LEFT,
  CHANGE_DIRECTION_TO_RIGHT,
} from 'src/store';

import { randomHexColor, generateSpanColor } from './utils';

function renderNbColors() {
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.getElementById('colors').innerHTML = result;
}

renderNbColors();
renderGradient();
renderColors();

store.subscribe(() => {
  renderNbColors();
  renderGradient();
  renderColors();
});

document.getElementById('randAll')
  .addEventListener('click', () => {
    store.dispatch({ type: CHANGE_FIRST_COLOR, color: randomHexColor() });
    store.dispatch({ type: CHANGE_LAST_COLOR, color: randomHexColor() });
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    store.dispatch({ type: CHANGE_FIRST_COLOR, color: randomHexColor() });
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    store.dispatch({ type: CHANGE_LAST_COLOR, color: randomHexColor() });
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    store.dispatch({ type: CHANGE_DIRECTION_TO_LEFT });
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    store.dispatch({ type: CHANGE_DIRECTION_TO_RIGHT });
  });

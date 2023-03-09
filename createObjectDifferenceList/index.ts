import './style.css';
import { createObjectDifferenceList, Difference, PrimitiveData } from './task';

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Object Difference</h1>`;

const obj1 = {
  element1: 'asdf',
  element2: 'lkjlk',
  element4: {
    level: 9000,
  },
  child: {
    name: 'Albert',
    lastName: 'Mueller',
    age: 12,
  },
};
const obj2 = {
  element1: 'asdf',
  element2: 'abcd',
  element4: {
    level: 100,
  },
  child: {
    name: 'Johannes',
    lastName: 'Mueller',
    age: 42,
  },
};
const list = createObjectDifferenceList(obj1, obj2);
render(list);

function render(differences: PrimitiveData[]) {
  for (const entry of differences) {
    const div: HTMLElement = document.createElement('div');
    if (entry.oldValue == null) {
      div.innerHTML = `(+) <span class="path">${entry.path}:</span> <span class="value">${entry.newValue}</span>`;
    } else if (entry.newValue == null) {
      div.innerHTML = `(-) <span class="path">${entry.path}:</span> <span class="value">${entry.oldValue}</span>`;
    } else {
      div.innerHTML = `<span class="path">${entry.path}:</span> <span class="value">${entry.oldValue}</span>
    &#8594; <span class="path">${entry.path}:</span> <span class="value">${entry.newValue}</span>`;
    }
    appDiv.appendChild(div);
  }
}

// Import stylesheets
import './style.css';
import { main } from './task';

let innerHTMLText = '<h1>Output:</h1>';

export function printLn(str: string) {
  innerHTMLText += `<li>${str}</li>`;
}

main();
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<div>${innerHTMLText}</div>`;

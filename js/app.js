import "../css/app.css";
import Typed from 'typed.js';

const element = document.getElementById("typed");
const text = element.textContent;
element.textContent = '';

new Typed(element, {
    strings: [text],
    showCursor: false,
    typeSpeed: 40,
    startDelay: 700
});

import "../css/app.css";
import "typed.js/js/typed";

const target = $('#typed');
const typerString = target.text();
target.text('').typed({strings: [typerString], showCursor: false, typeSpeed: 20, startDelay: 700});

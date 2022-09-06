import html from '../core.js';

function Header() {
    return html  `
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo" 
            placeholder="What needs to be done?" 
            autofocus
            onkeyup="event.keyCode == 13 && dispatch('add', this.value.trim())"
        >
        </header>
    `
}


// for(var i = 0; i <=5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000) 
// }
// for(let i = 0; i <=5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000) 
// }

export default Header
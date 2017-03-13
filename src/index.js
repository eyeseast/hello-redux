// entrypoint

import { createStore } from 'redux'

function counter(state = 0, action) {

    switch (action.type) {

        case "UP":
            return state + 1

        case "DOWN":
            return state - 1

        default:
            return state
    }
}

var store = window.store = createStore(counter);

// update UI on state changes
function render() {
    var state = store.getState();
    var span = document.querySelector('h1 > span');

    span.innerText = state;
}

store.subscribe(render);

// click events
document.querySelectorAll('button').forEach(function(button, i) {
    var action = {type: button.value}

    button.addEventListener('click', function(e) {
        store.dispatch(action);
    });
});

render();
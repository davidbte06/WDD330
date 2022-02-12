import Todos from './Todos.js'
import utilities from './utilities.js';


let app = new Todos("DAVID_TODO", '#taskBoard');
let addButton = utilities.qs('#addButton');

// Adds and event listener to create a new task
utilities.onTouch(addButton, function () {
    app.addTodo();
});

// Referencing the filters
let filters = utilities.qs(".filter");


[...filters].forEach(element => {
    let id = element.id;
    utilities.onTouch(utilities.qs("#" + id), (event) => {

        filters.forEach(element => {
            if (event.target.id != element.id) {
                element.classList.remove("activeFilter");
            } else {
                element.classList.add("activeFilter");
            }
        });

        app.listTodos();

    });
});
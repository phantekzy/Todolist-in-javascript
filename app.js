import { Todolist } from "./components/Todolist.js";
import { fetchJSON } from "./Functions/API.js";
    import { creations } from "./Functions/dom.js";

try {
    const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=120')
        const list = new Todolist(todos)
            list.appendTo(document.querySelector('#todolist'))
} catch (error) {
    const alert = creations('div',{
        class :'alert alert-dark m-5',
            role :'alert'
    })
        alert.innerText = 'IMPOSSIBLE DE CHARGER LES DONNEES    '
            document.body.prepend(alert)
                console.log(error);
        
}
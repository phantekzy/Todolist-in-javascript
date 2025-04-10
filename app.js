import { Todolist } from "./components/Todolist.js";
import { fetchJSON } from "./Functions/API.js";
    import { creations } from "./Functions/dom.js";

try {
    let todos = []
        const localTodos = localStorage.getItem('lists')?.toString()
            if(localTodos){
                todos = JSON.parse(localTodos)
            }
   
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

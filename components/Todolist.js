import { creations } from "../Functions/dom.js"

/**
 * @typedef {Object} Todo
 *   @property {number} id
 *      @property {String} title
 *          @property {Boolean} completed
 */
export class Todolist{
/**
 * @type {Todo[]}
 */
#todos = []
    /**
     * 
     * @param {Todo[]} todos 
     */

/**
 * @type {HTMLUListElement}
 */
#listElement = []
    constructor(todos){
        this.#todos = todos
    }
        /**
         * 
         * @param {HTMLElement} element 
         */
        appendTo(element){
            element.innerHTML = 
            `<form class="d-flex pb-4">
                <input required="" class="form-control" type="text" placeholder="Acheter des patates..." name="title"
                    data-com.bitwarden.browser.user-edited="yes">
                        <button class="btn btn-primary">Ajouter</button>
                            </form>
            <main>
                <div class="btn-group mb-4" role="group">
                    <button type="button" class=" btn btn-outline-primary active" data-filter="all">Toutes</button>
                        <button type="button" class=" btn btn-outline-primary" data-filter="todo">A faire</button>
                            <button type="button" class=" btn btn-outline-primary" data-filter="done">Faites</button>
                                </div>

            <ul class="list-group"></ul>
                                    </main> `
            this.#listElement = element.querySelector('.list-group')
                for(let todo of this.#todos){
                    const t = new TodolistItem(todo)
                        this.#listElement.append(t.element)
                }

                            element.querySelector('form').addEventListener('submit' , (e) => this.#onSubmit(e))
                            element.querySelectorAll('.btn-group button').forEach(button =>{button.addEventListener('click',(e) => this.#toggleFillter(e))})
        }   

            /**
             * 
             * @param {SubmitEvent} e 
             */
            #onSubmit(e){
              const form = e.currentTarget
                 e.preventDefault()
                    const title = new FormData(form).get('title').toString().trim()
                      if(title === ' '){
                          return
                }
                             form.reset()
              const todo = {
                    id : Date.now(),
                        title,
                            completed : false,
              }
              const item = new TodolistItem(todo)
                    this.#listElement.prepend(item.element)
            }   
       
            /**
             * 
             * @param {PointerEvent} e 
             */
            #toggleFillter(e){
                e.preventDefault()
                    const filter = e.currentTarget.getAttribute('data-filter')
                        e.currentTarget.parentElement.querySelector('.active').classList.remove('active')
                            e.currentTarget.classList.add('active')
                if(filter === 'done'){
                    this.#listElement.classList.add('hide-todo')
                        this.#listElement.classList.remove('hide-completed')
                }else if(filter === 'todo'){
                    this.#listElement.classList.add('hide-completed')
                        this.#listElement.classList.remove('hide-todo')
                }else {
                    this.#listElement.classList.remove('hide-todo')
                        this.#listElement.classList.remove('hide-completed')
                }
            }
            
}

class TodolistItem{
#element
    /**
     * 
     * @param {Todo} todo 
     */
    constructor(todo){
        const id = `todo-${todo.id}`
            const li =creations('li',{
                class :"todo list-group-item d-flex align-items-center"
            })
            const checkbox = creations('input',{
                class : "form-check-input",
                    type : "checkbox",
                        id,
                            checked : todo.completed ? '' : null
            })
                li.append(checkbox)
            const lable = creations('lable',{
                class : "ms-2 form-check-label",
                    for : id ,
            })
                lable.innerText = todo.title
                     li.append(lable)
            const button = creations('button',{
                class : "ms-auto btn btn-danger btn-sm"
            })
                button.innerHTML = '<i class="bi-trash"></i>'
                    li.append(button)

                         this.#element = li
                            this.toggle(checkbox)

            button.addEventListener('click', (e) => this.remove(e))
                checkbox.addEventListener('change', (e) => this.toggle(e.currentTarget))
    }
               
                /**
                 * @returns {HTMLElement}
                 */
                get element(){
                    return this.#element
                }
    
                /**
                 * 
                 * @param {PointerEvent} e 
                 */
                remove(e){
                    e.preventDefault()
                        this.#element.remove()
                }

                /**
                 * 
                 * @param {HTMLInputElement} checkbox 
                 */
                toggle(checkbox){
                    if(checkbox.checked){
                        this.#element.classList.add('is-completed')
                            }else{
                                 this.#element.classList.remove('is-completed')
                    }
                }
}
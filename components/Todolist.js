import { creations, templateClone } from "../Functions/dom.js"

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
                element.append(
                    templateClone('todolist-layout')
                )
          
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
        const li = templateClone('todolist-item').firstElementChild
        const checkbox = li.querySelector('input')
            checkbox.setAttribute('id' , id)
                if(todo.completed){
                    checkbox.setAttribute('checked' , '')
                }
        const label = li.querySelector('label')
                label.setAttribute('for', id)
                label.innerText = todo.title
        const button = li.querySelector('button')
                
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

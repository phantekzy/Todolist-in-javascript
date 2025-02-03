/**
 * 
 * @param {String} tagName 
 *  @param {HTMLElement} attributes 
 *      @returns {HTMLElement}
 */
export function creations(tagName,attributes={}){
    const element = document.createElement(tagName)
        for(const [attribute,value] of Object.entries(attributes)){
            if(value !== null){
                element.setAttribute(attribute,value)
            }
        }           return element
}

/**
 * 
 * @param {String} id 
 * @returns {DocumentFragment}
 */
export function templateClone(id){
    return document.getElementById(id).content.cloneNode(true)
}

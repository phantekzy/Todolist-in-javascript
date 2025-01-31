/**
 * 
 * @param {url} url 
 *  @param {HTMLElement} options 
 *       @returns {HTMLElement}
 */
export async function fetchJSON(url,options={}){
    const headers = {Accpet:'application/json',...options.headers}
        const r = await fetch(url,{...options,headers})
            if(r.ok){
                return r.json()
            }       
                        throw new Error('ERROR : SERVER ERROR')
}
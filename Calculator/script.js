let store=""

let cal=(value)=>{
    store=store+value

    let show=document.querySelector("#display")
    show.innerHTML=store
}

let res=()=>{
let show=document.querySelector("#display")
    show.innerHTML=eval(store)
    store=eval(store)
    
    // to converted a string 
    store.toString()
}

let ac=()=>{
    
       store=""
       let show=document.querySelector("#display")
       show.innerHTML=""

}

let del=()=>{
    store=store.slice(0,-1)
    let show=document.querySelector("#display")
    show.innerHTML=store
}
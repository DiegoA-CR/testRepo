const 






//document.querySelector(".titulo_productos").textContent = "Agregar producto(s)";
//console.log(document.querySelector(".titulo_productos"));


const ulLista = document.getElementById('lista');
console.log(ulLista);

const arrayElement = ['a','b','c','d'];

// arrayElement.forEach(elemt => {
//     console.log(elemt);
    
//     const li = document.createElement('li');
//      li.style.listStyle = 'none';
//         li.textContent = elemt;
//     ulLista.appendChild(li);
// })

// arrayElement.forEach(item =>{

//     ulLista.innerHTML += `<li> ${item} </li>`; 
// })


const frag = document.createDocumentFragment();
//const frag = new DocumentFragment();

arrayElement.forEach(elemt =>{
    const li = document.createElement('li');
    
    li.textContent = elemt;
    frag.appendChild(li);

//    console.log(frag);
})

ulLista.appendChild(frag);
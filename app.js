let addToDoButton = document.getElementById('addbutton+');

let listgroupitem = document.getElementById('listgroupitem')

let inputform = document.getElementById('inputform')

let listgroup = document.getElementById('listgroup')

addToDoButton.addEventListener('click', function(){
    let li = document.createElement('li');
    li.classList.add("list-group-item")
  
    li.innerHTML =inputform.value;
    listgroup.appendChild(li);
    inputform.value = "";

    li.addEventListener('click', function() {
        li.style.textDecoration = 'line-through';
      
    });

    
    li.addEventListener('dblclick', function() {
        li.style.textDecoration = 'none';
      
    });
    


})


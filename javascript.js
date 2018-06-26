
//user clicked on add button
//if any text is there , add that text to todo list
document.getElementById('add').addEventListener('click',function(){
   var value = document.getElementById('item').value;
    if(value){
        addItemTodo(value);
        document.getElementById('item').value='';
    }
});

function removeItem(){
    
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    
    parent.removeChild(item);
    
}

function completeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    
    //check if th item should be added to completed list or to re-add to the todo list
    var target = (id == 'todo') ? document.getElementById('completed'):document.getElementById('todo');
    
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
    
}

function addItemTodo(text){
    
    var list = document.getElementById('todo');
    
    var item = document.createElement('li');
    item.innerText = text;
    
    var button = document.createElement('div');
    button.classList.add('button');
    
    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = "<img src=\"images/bin.PNG\">";
    
    //add click event for removing the item
    remove.addEventListener('click',removeItem);
    
    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = "<img src=\"images/Capture.PNG\">";
    
    //add click event for completing the item
    complete.addEventListener('click',completeItem);
    
    button.appendChild(remove);
    button.appendChild(complete);
    item.appendChild(button);
    
    list.insertBefore(item, list.childNodes[0]);
}
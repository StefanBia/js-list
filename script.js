const input = document.getElementById('item');
const button = document.getElementById('add-button');
const list = document.getElementById('sh-list');

button.addEventListener('click', function(){
    
    let inputString = input.value;
    const li = document.createElement("li");
    const span = document.createElement("span");
    const newButton = document.createElement("button");
    span.textContent = inputString;
    newButton.textContent = "delete";
    newButton.addEventListener('click', function(){
        list.removeChild(li);
    });
    li.appendChild(span);
    li.appendChild(newButton);
    list.appendChild(li);
    input.value = '';
    console.log(inputString);
});

// script pure js
var enterButton = document.getElementById('enter');
var input = document.getElementById('userInput');
var ul = document.getElementById('ul');
var note = document.getElementById('li');
// GV declared

function addNote(){
var li = document.createElement('li');
li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);
input.value = '';

funtion crossOut() {
    li.classList.toggle('done');
}

li.addEventListener('click',crossOut);

var dBtn = document.createElement('button');
dBtn.appendChild(document.createTextNode('del'));
li.appendChild(dBtn);
dBtn.addEventListener('click',deleteNote);

function deleteNote(){
    li.classList.add("delete")
}
} // end of addNote function


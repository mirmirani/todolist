// script pure js
var inputBtn = document.getElementById('enter');
var input = document.getElementById('userInput');
var ul = document.querySelector("ul");
var newNote = document.createElement('li');
var removeIcon = '<i class="fa fa-times"></i>'
var doneIcon = '<i class="fa fa-check"></i>'
// variables declared

 // && event.which === 13)

function addNote() {
if (input.value) {
addnewNote(value);
input.value = '';
}}

function addNote2() {
if (input.value && event.which === 13) {
'enter'/'return';
addnewNote(value);
input.value = '';
}}

function removeNote(e) {
var note = this.parentNode.parentNode;
var parent = item.parentNode;

parent.removeChild(note);
}

function completeNote(e) {
var note = this.parentNode.parentNode;
var parent = note.parentNode;
var parentID = parent.id;

var target = (id === 'tasks') ? document.getElementById('tasksDone'):document.getElementById('tasks');

parent.removeChild(note);
target.insertBefore(item, target.childNodes[0]);

}


function addnewNote() {
newNote.innerText = text;

var btns = document.createElement('div');
buttons.classList.add('buttons');

var removeIcon = '<i class="fa fa-times"></i>';
var doneIcon = '<i class="fa fa-check"></i>';

var remove = document.createElement('button');
remove.classList.add('remove');
remove.innerHTML = removeIcon;

remove.addEventListener('click', removeNote);

var complete = document.createElement('button');
complete.classList.add('complete');
complete.innerHTML = doneIcon;

complete.addEventListener('click', completeNote);
complete.classList.add('complete');
complete.innerHTML = doneIcon;

complete.addEventListener('click', completeNote);

buttons.appendChild(remove);
buttons.appendChild(complete);
item.appendChild(buttons);

listenerCount.insertBefore(item, list.childNodes[0]);
}

document.getElementById('usierInput').addEventListener('click', addNote)
document.getElementById('usierInput').addEventListener('keypress', addNote2)

/*

if (inputLength()>0 && event.which === 13) {
    'enter'/'return' //13 is enter key's code also event.keyCode === 13

}

}

function crossOut() {
    li.classList.toggle('done');
}

li.addEventListener('click', crossOut);
//[end] accomplish note
//del button
var dBtn = document.createElement('button');
dBtn.appendChild(document.createTextNode('del'));
li.appendChild(dBtn);
dBtn.addEventListener('click', deleteNote);

function deleteNote() {
    li.classList.add("del");
} //[end] del button
*/



/*
<header>
  <input id="item" type="text" placeholder="Enter an activity..."/>
  <button id="add" type="button"><i class="fa fa-plus" aria-hidden="true"></i></button>
</header>
<div class="container">
  <ul class="todo" id="todo"></ul>
  <ul class="todo" id="completed"></ul>
</div>
*/







/* // prevent-empty-notes
function inputLength() {
    return input.value.length;
}

function newNoteUponClick() {
    if (inputLength()>0) {
        addNote();
    }
}
function newNoteUponPress(event) {
    if (inputLength()>0 && event.which === 13) {
        'enter'/'return' //13 is enter key's code also event.keyCode === 13
        addNote();
    }
}
// [end] prevent-empty-notes


// user-interaction-scenario
inputBtn.addEventListener('click',newNoteUponClick);


input.addEventListener('keypress',newNoteUponPress);
//user-interaction-scenario  */
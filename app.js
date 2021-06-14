
// get UI variables
const taskInput = document.querySelector('#task');
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

// load all events
loadEventListener();

function loadEventListener(){
//   get form
 form.addEventListener('submit', addTask);
//  remove task
 taskList.addEventListener('click',removeTask);
//  clear tasks
 clearBtn.addEventListener('click',clearTasks);
//  filter tasks
 filter.addEventListener('keyup',filterTasks);
}

// add task
 function addTask(e){
   if(taskInput.value === ''){
       alert('Add a task');
   }
//  create li
 const li = document.createElement('li');
//  add class
 li.className = 'collection-item';
//  text node(
 li.appendChild(document.createTextNode(taskInput.value));
//  create link
 const link = document.createElement('a');
//   add class
 link.className = 'delete-item secondary-content';
//  add icon
 link.innerHTML = '<i class="fa fa-remove"></i>';
//  append to li
 li.appendChild(link);
//  append to ul
 taskList.appendChild(li);

//  clear task input
 taskInput.value = '';

    e.preventDefault();
 }

//  remove task
 function removeTask(e){
     if(e.target.parentElement.classList.contains('delete-item')){
         if(confirm('Are you sure?')){
             e.target.parentElement.parentElement.remove();
         }
     }
 }

//  clear tasks
 function clearTasks(){
     while(taskList.firstChild){
         taskList.removeChild(taskList.firstChild);
     }
 }

//  filter tasks
  function filterTasks(e){
    const text = e.target.value.toLowerCase();
     document.querySelectorAll('.collection-item').forEach
     (function(task){
       const item= task.firstChild.textContent;
       if(item.toLowerCase().indexOf(text) !== -1){
           task.style.display = 'block';
       }else{
           task.style.display = 'none';
       }
     });
  }
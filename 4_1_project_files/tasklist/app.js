const form =document.querySelector("#task-form");
const taskList=document.querySelector(".collection");
const clearBtn=document.querySelector(".clear-tasks");
const filter=document.querySelector("#filter");
const taskInput=document.querySelector("#task");



// load all event listeners
loadEvenlisteners();

function loadEvenlisteners(){
  form.addEventListener('submit',addTask);
}

// add task
function addTask(e){
  if(taskInput.value ==''){
    alert("Look what you have done");
  }
  const li=document.createElement('li');
  li.appendChild(document.createTextNode(taskInput.value));

  const link=document.createElement('a');
  link.className='delete-item secondary-content';
  link.innerHTML='<i class="fa fa-remove"></i>';
  li.appendChild(link);


  taskList.appendChild(li);

  taskInput.value='';



  e.preventDefault();
}
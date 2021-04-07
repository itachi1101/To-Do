const form =document.querySelector("#task-form");
const taskList=document.querySelector(".collection");
const clearBtn=document.querySelector(".clear-tasks");
const filter=document.querySelector("#filter");
const taskInput=document.querySelector("#task");



// load all event listeners
loadEvenlisteners();

function loadEvenlisteners(){
  form.addEventListener('submit',addTask);

  taskList.addEventListener('click',removeTasks);

  clearBtn.addEventListener('click',clearTask);

  filter.addEventListener('keyup',filterTask);
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
function removeTasks(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();
    }
  }
}
function clearTask(){
  confirm('Are your sure?');
   while(taskList.firstChild){
     taskList.removeChild(taskList.firstChild);
   }

}


function filterTask(e){
  const text=e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach
  (function(task){
    const item=task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text)!=-1){
      task.style.display='block';
    }else {
      task.style.display='none';
    }
  });
}
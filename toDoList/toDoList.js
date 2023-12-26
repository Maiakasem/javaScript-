var TaskInput=document.getElementById('Task')
 


var tasksContainer=[];
if (localStorage.getItem('task') !=null){
    tasksContainer=JSON.parse(localStorage.getItem('task'));
    displayList(tasksContainer);
}
function addTask()
{
var taskValue=TaskInput.value;
tasksContainer.push(taskValue);
localStorage.setItem("task",JSON.stringify(tasksContainer));
console.log(tasksContainer);
TaskInput.value=" ";   
displayList();


}

function displayList(){
    var newList = '';
    for(var i=0; i<tasksContainer.length;i++)
    {
         newList +=`
         <input type="text"     id="text1" name="text" value="${tasksContainer[i]}"  class="inputs" >
         <button type="button"  id="ch1" name="ch1"  class="inputs" onclick="checkTask(${i})">&check;</button>
         <button type="button"  id="ch2" name="ch1" class="inputs" onclick="deleteIndex(${i})" > &#10005</button> <br>`
       
    }
    document.getElementById('lists').innerHTML=newList;
    
    
}
function deleteIndex(i){
    tasksContainer.splice (i,1);
    localStorage.setItem("task",JSON.stringify(tasksContainer));
    displayList();
}

function checkTask(i){
    tasksContainer[i]=`${tasksContainer[i]}  Done&check;`
    displayList();
}


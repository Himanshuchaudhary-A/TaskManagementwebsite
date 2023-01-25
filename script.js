
var add_btn = document.getElementById("Add_btn");
let card_count=0;
add_btn.addEventListener("click",function()
{   
 let cardAdd=document.querySelector(".cardAdd");
    let id = "ID"+ card_count++;

  let task_name= document.getElementById("typeText1").value;
    let task_description= document.getElementById("typeText2").value;
    let assign_to= document.getElementById("typeText3").value;
    let severity = document.getElementById("option_select").value;
    
    if(task_name.trim()=='' || task_description.trim()=='' || assign_to.trim()=='' || severity.trim()==""){
     alert("Enter Proper Values!");
    }
    else{

    
    let temp = `<div class="card" style="width: 22.5rem;border-radius: 8px; border-color:black;box-shadow: 10px 5px 5px black; text-align:left; margin-bottom:10px;">
  <div class="card-body">
    <h5 class="card-title" style="color:black;" >Task Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item " style="text-align:center;" id="${id}" ><b>${id}</b></li>
    
    <li class="list-group-item"><b>Task Name :</b> ${task_name}</li>
    <li class="list-group-item"><b>Task Description:</b>${task_description}</li>
    <li class="list-group-item"><b>Severtiy:</b> ${severity}</li>
    <li class="list-group-item"><b>Assign To:</b> ${assign_to}</li>
  </ul>
  <div class="card-body" style="text-align:center;">
  <button type="button"style="margin-left: 5%; margin-right:5%; " id = "prev_btn" onclick="prevbutton('${id}')"><b>Previous</b></button>
  <button type="button" style="margin-right: 5%;" id= "delete-btn" onclick="deletebutton('${id}')"><b>Delete</b></button>
  <button type="button" id = "next_btn" onclick="addInput('${id}')"><b>Next</b></button>
  
  </div>
</div>`
    cardAdd.innerHTML+=temp;
    }
});

var next_button = document.getElementById("next_btn");
let development = document.getElementById("development");
var card_add = document.getElementById("cardAdd1");
var development_data= document.getElementById("development_data");
var qa = document.getElementById("qa");
var done= document.getElementById("Done");
// next_button.addEventListener('click',function(){
//  development.innerHTML+=card_add.innerHTML;

// });


// next_button.addEventListener('click',function()
// {
   
    
// });

function addInput(id){
  let add_child = document.getElementById(id);
  if(card_add.contains(add_child)){
    development.appendChild(add_child.parentElement.parentElement);
    card_add.removeChild(add_child.parentElement.parentElement);
    document.getElementById('stagename').innerHTML =  `<b>Stage :</b> Development`;
    
  }
 else if(development.contains(add_child)){
    development.removeChild(add_child.parentElement.parentElement);
    qa.appendChild(add_child.parentElement.parentElement);
    document.getElementById('stagename').innerHTML =  `<b>Stage :</b> ${stage[2]}`;
  }
  else {
    qa.removeChild(add_child.parentElement.parentElement);
    done.appendChild(add_child.parentElement.parentElement);
    document.getElementById('stagename').innerHTML =  `<b>Stage :</b> ${stage[3]}`;
  }
  
  
}

function deletebutton(id){
    console.log(id);
  let remove_child = document.getElementById(id);
   remove_child.parentElement.parentElement.remove();
}

 let reset_button = document.getElementById("reset");
reset_button.addEventListener('click',function(){
  document.getElementById('typeText1').value="";
  document.getElementById('typeText2').value="";
  document.getElementById('option_select').value="Low";
  document.getElementById('typeText3').value="";

});

function prevbutton(id){
  let prev_child  =  document.getElementById(id);
  // if(card_add.contains(prev_child)){
  //   document.getElementById('stagename').innerHTML =  `<b>Stage :</b> ${stage[0]}`;
  // }
  if(development.contains(prev_child)){
    development.removeChild(prev_child.parentElement.parentElement);
    card_add.appendChild(prev_child.parentElement.parentElement);
    document.getElementById('stagename').innerHTML =  `<b>Stage :</b> ${stage[0]}`;
  }
  else if (qa.contains(prev_child)){
    qa.removeChild(prev_child.parentElement.parentElement);
    development.appendChild(prev_child.parentElement.parentElement);
    document.getElementById('stagename').innerHTML =  `<b>Stage :</b> ${stage[1]}`; 
  }
  else{
    done.removeChild(prev_child.parentElement.parentElement);
    qa.appendChild(prev_child.parentElement.parentElement);
   document.getElementById('stagename').innerHTML =  `<b>Stage :</b> ${stage[2]}`;
  }
}

let sumbitButton = document.getElementById("submit_btn");
sumbitButton.addEventListener('click',function()
{
  alert("Your Query has been Submitted.We will contact you soon!");
});



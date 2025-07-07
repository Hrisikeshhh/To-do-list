 document.addEventListener("DOMContentLoaded",()=>{
   
   const textInput = document.querySelector("#inputText");
   const addTaskBtn = document.querySelector(".addTaskBtn");
   const itemsList = document.querySelector(".itemsList");
   const clearBtn = document.querySelector(".clearBtn");
    
    
    
   const addTask = ()=>{
    // take input value.
    const textTask = textInput.value.trim();
    if( textTask === "")
        {
        alert("please enter any task");
        return;
    };
    // create  eliments.
    const li = document.createElement("li");
    const span = document.createElement("span");
    const checkBox = document.createElement("input");
    checkBox.classList.add("checkBox");
   const remove = document.createElement("Button");
   remove.innerText = "x";
    checkBox.type = "checkBox";
      span.textContent = textTask;

      // append.
     li.appendChild(span);
     li.append(remove);
     span.prepend(checkBox);
     itemsList.appendChild(li);


    //  add class.
    li.classList.add("tasks");
    remove.classList.add("remove");

  // evenslisteners.
   remove.addEventListener("click",()=>{
     li.remove();
     })


    


  //  midFuntions
  checkBox.addEventListener("change",()=>{
    span.classList.toggle("spa");
  })


    //  loop works
  let liAll = document.querySelectorAll("li");
  liAll.forEach(li => {
    li.style.marginTop = "5px";
    li.style.marginBottom = "5px";
    li.style.width = "60%";
    li.style.margin = "0% 4%";
  });


   
   }




   let clear = ()=>{
    itemsList.innerHTML="";
   }                                                                                                                                                           
   clearBtn.addEventListener("click",clear);
  addTaskBtn.addEventListener("click",addTask);

   addTaskBtn.addEventListener("click",()=>{
    // const input= document.querySelector("#inputText");
    textInput.value = "";
   })
  


 });
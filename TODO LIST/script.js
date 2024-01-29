const itemsArr = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")):[]

document.querySelector("#enter").addEventListener("click", ()=>{
    let task = {
        id : new Date().getTime(),
        name : document.getElementById("task").value
    }
    itemsArr.push(task)
    localStorage.setItem("items",JSON.stringify(itemsArr))
    alert("TASK ADDED SUCCESSFULLY!!!")
    location.reload()
})

const deleteAll = ()=>{
    localStorage.clear()
    alert("LIST CLEARED!!!")
    location.reload()
}

const display = ()=>{
    let item = ""
    for(let i=0;i<itemsArr.length;i++){
        item += `<div class="input-ctrl" id="${itemsArr[i].id}">
                    <textarea disabled>${itemsArr[i].name}</textarea>
                    <button class="deleteBtn" id="${itemsArr[i].id}"  onclick="deleteListener()"><i class="fa-solid fa-trash"></i></button>
                </div>
        `
    }
    document.querySelector("#todo-list").innerHTML = item
}

const deleteListener = (()=>{
    let taskId = document.querySelector(".deleteBtn").id
    deleteTask(taskId)
})
const deleteTask = (taskId)=>{
    let itemsArr2 = itemsArr.filter((task)=>
        task.id != parseInt(taskId)
    )
    localStorage.setItem("items",JSON.stringify(itemsArr2))
    document.getElementById(taskId).remove()
}
window.onload = ()=>{
    display()
}
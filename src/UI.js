import {Task, taskUI} from "./task.js"
import {Project} from "./project.js"

class HomeUI
{
    constructor()
    {
        this.newProject = new Project()
        this.mainContent = document.querySelector(".main-content")

        // container structures the task
        this.container = document.createElement("div")
        this.taskContainerDiv = document.createElement("div")
        this.container.setAttribute("class","container")
        this.taskContainerDiv.setAttribute("class","task-container")
        taskUI.displayAddTaskBar()
        this.isListenerAttachedFlag = false
    }

    createTaskUI()
    {
        this.title = document.querySelector(".title").value 
        this.description = document.querySelector(".description").value
        this.priority = document.querySelector(".priority").value 
        this.dueDate = document.querySelector(".due-date").value 

        this.para = document.createElement("p")
        this.completeTaskBtn = document.createElement("button")
        this.deleteTaskBtn = document.createElement("button")
        this.editTaskBtn = document.createElement("button")
        this.taskContent = document.createElement("div")

        this.para.setAttribute("class","task-div")
        this.taskContent.setAttribute("class","task-content")

        // create a instance of task class
        this.newTask = new Task(this.title,this.description,this.dueDate,this.priority)
        
        console.log("Created task")
        console.log(this.newTask)

        // push the instance of task into the projectList
        this.newProject.addTaskToProject(this.newTask)
        
        this.newProject.projectTaskArr.forEach((task,index) => {
            this.taskContent.setAttribute("data-index",index)
            this.para.textContent = `${task.title} ${task.description} ${task.priority} ${task.priority}`

            // create a complete button for each task
            this.completeTaskBtn.setAttribute("type","button") 
            this.completeTaskBtn.setAttribute("class","complete") 
            this.completeTaskBtn.setAttribute("data-action","complete")
            this.completeTaskBtn.textContent = "Complete"
            
            // create a delete button for each task
            this.deleteTaskBtn.setAttribute("type","button")
            this.deleteTaskBtn.setAttribute("class","delete-btn")
            this.deleteTaskBtn.setAttribute("data-action","delete")
            this.deleteTaskBtn.textContent = "Delete"

            // create a edit button for each task
            this.editTaskBtn.setAttribute("type","button")
            this.editTaskBtn.setAttribute("class","edit-button")
            this.editTaskBtn.setAttribute("data-action","edit")
            this.editTaskBtn.textContent = "Edit"

            // append to the div.content-container
            this.taskContent.appendChild(this.para)
            this.taskContent.appendChild(this.completeTaskBtn)
            this.taskContent.appendChild(this.editTaskBtn)
            this.taskContent.appendChild(this.deleteTaskBtn)
            this.taskContainerDiv.appendChild(this.taskContent)
            this.container.appendChild(this.taskContainerDiv)
        }) 
        
        // append the div.taskContainerDiv to the container
        this.mainContent.appendChild(this.container)
    }

    displayActionTaskUI()
    {
        // init the createTaskUI everytime event action occurs
        this.createTaskUI()
        console.log("Current Tasks")
        console.log(this.newProject.getAllTasks())

        if(!this.isListenerAttachedFlag)
        {
            let taskDivContainer = document.querySelector(".task-container")
            taskDivContainer.addEventListener("click",(e) =>
            {
                // find the element that matches the target element, parent or ancestor
                let taskElement = e.target.closest("[data-index]")
    
                // find its data attribute of the element and get the data-attribute value
                let taskID = taskElement.dataset.index
    
                // find the data-action attribute depending on the event clicked
                let actionEvent = e.target.dataset.action
                
    
                if(actionEvent === "delete")
                {
                    // console.log(taskElement)
                    // console.log(`task deleted is ${taskID}`)
                    let para = taskElement.querySelector("p")
                    para.style.textDecorationLine = "line-through"
                    para.style.border = "solid 1px red"

                    // find the task to remove by index
                    let taskToRemoveElement = this.newProject.projectTaskArr[taskID]
                    console.log("Delete task")
                    console.log(taskToRemoveElement)

                    // push the task to the trashListArr
                    const removedTask = this.newProject.removeTaskFromProjects(taskToRemoveElement)

                    // check the task is in the trash List
                    console.log("Current Trash List")
                    const displayTrashTasks = this.newProject.getAllTrashTasks()
                    console.log(displayTrashTasks)

                    // check the current tasks in the project
                    console.log("Current Project List")
                    const getTaskinProjectList = this.newProject.getAllTasks()
                    console.log(getTaskinProjectList)
                }  
                else if(actionEvent === "complete")
                {
                    let para = taskElement.querySelector("p")
                    para.style.textDecorationLine = "none"
                    para.style.border = "solid 1px green"
                } 
                else if(actionEvent === "edit")
                {
                    console.log(`Edit the task at at ${taskID}`)
                    let taskToFindElement = this.newProject.projectTaskArr[taskID]


                    let properties = ["title","description","dueDate","priority"]
                    console.log("Find the task and print the title")
                    console.log(taskToFindElement.title)
                    
                    let property = ["title","description","dueDate","priority"]

                    const editTask = this.newProject.editTaskFromProjects(taskToFindElement, properties[0], "Maths HW" )
                    console.log(editTask)

                    // print the rest of array with the modified edit element
                    console.log("Modified Tasks")
                    console.log(this.newProject.getAllTasks())

                }             
            })
            this.isListenerAttachedFlag = true
        }
    }
}

export const homePG = new HomeUI()


class DialogUI
{
    constructor()
    {   
        this.home = new HomeUI()
        this.dialog = document.querySelector(".dialog")
        this.submitBtn = document.querySelector(".submit-btn");
        this.closeModal = document.querySelector('.exit-btn');
    }
    
    showDialog()
    {
        // show the modal
        taskUI.showBtn.addEventListener("click",() => {
            console.log("Opened Dialog")
            this.dialog.showModal()
        })
    }

    submitModal()
    {
        this.submitBtn.addEventListener('click',(e) => 
        {
            console.log("Form Submitted")
            this.home.displayActionTaskUI()
            e.preventDefault();
            this.dialog.close();  
        }) 
    }

    exitModal()
    {
        // close the dialog form
        this.closeModal.addEventListener('click',(e) => 
        {
            this.dialog.close();
            console.log("Closed DIalog")
            e.preventDefault();
        }) 
    }
}


export const dialogUI = new DialogUI()

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
        this.dialog = document.querySelector(".dialog")
        // this.taskContainerDiv.textContent = ""
        this.isListenerAttachedFlag = false

    }

    createTaskUI()
    {
        this.title = document.querySelector(".title").value 
        this.description = document.querySelector(".description").value
        this.priority = document.querySelector(".priority").value 
        this.dueDate = document.querySelector(".due-date").value 

        this.taskContent = document.createElement("div")
        this.para = document.createElement("p")
        this.completeTaskBtn = document.createElement("button")
        this.deleteTaskBtn = document.createElement("button")
        this.editTaskBtn = document.createElement("button")

        this.taskContent.setAttribute("class","task-content")
        this.para.setAttribute("class","task-div")

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

    // Handle the mainpulation of the edit, complete and delete functionality for the task
    displayActionTaskUI()
    {
        this.createTaskUI()
        // init the createTaskUI everytime event action occurs
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
            })
            this.isListenerAttachedFlag = true
        }
    }
}

class editDialog
{
    
}

export const homePG = new HomeUI()
// export const dialogUI = new DialogUI()

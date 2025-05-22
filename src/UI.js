import {Task} from "./task.js"
import {Project} from "./project.js"
import {LocalStorageConverter} from "./localStorageConverter.js"

class TaskUI
{
    constructor()
    {
        this.newProject = new Project()
        this.ls = new LocalStorageConverter()
        this.lisfOfTasks = []

        this.mainTaskContainer = document.querySelector(".main-content")
        this.container = document.createElement("div")
        this.container.setAttribute("class","container")
        // this.flag = false
    }

    /**
     * Create a new task
     */
    createTask()
    {
        // retreive the input fields from the dialog
        this.title = document.querySelector(".title").value
        this.description = document.querySelector(".description").value
        this.dueDate = document.querySelector(".due-date").value
        this.priority = document.querySelector(".priority").value

        // create instance of the task 
        this.task = new Task(this.title,this.description,this.dueDate,this.priority)
        
        this.renderTask(this.task)
        
        this.saveTask(this.task)  
    }
    
    /**
     * Save the task into Local Storage
    */
    saveTask(task)
    {   
        // get all the tasks from the original ls
        let tasks = this.ls.getTasksFromLocalStorage("tasks") || []
        
        // check if the tasks is empty or contains the array
        console.log(tasks)

        tasks.push(task)
           
        // save the project with the array of tasks into local storage
        this.ls.setTaskIntoLocalStorage("tasks",tasks)
    }


    /**
     * Render the DOM elements associated with the btns
     */
    renderTask(task)
    {
        // task instance will have the following attributes
        let taskContent = document.createElement("div")

        taskContent.setAttribute("class","task-content")
        // // taskContent.dataset.index = index
        
        this.para = document.createElement("p")
        this.para.textContent = `${task.title} ${task.description} ${task.dueDate} ${task.priority}`                    

        this.completeTaskBtn = document.createElement("button")
        this.completeTaskBtn.textContent = "Complete"
        this.completeTaskBtn.setAttribute("type","button") 
        this.completeTaskBtn.setAttribute("class","complete") 
        this.completeTaskBtn.setAttribute("data-action","complete")
        
        this.deleteTaskBtn = document.createElement("button")
        this.deleteTaskBtn.textContent = "Delete"
        this.deleteTaskBtn.setAttribute("type","button")
        this.deleteTaskBtn.setAttribute("class","delete-btn")
        this.deleteTaskBtn.setAttribute("data-action","delete")
        
        this.editTaskBtn = document.createElement("button")
        this.editTaskBtn.textContent = "Edit"
        this.editTaskBtn.setAttribute("type","button")
        this.editTaskBtn.setAttribute("class","edit-button")
        this.editTaskBtn.setAttribute("data-action","edit")

        taskContent.appendChild(this.para)
        taskContent.appendChild(this.editTaskBtn)
        taskContent.appendChild(this.deleteTaskBtn)
        taskContent.appendChild(this.completeTaskBtn)
        this.container.appendChild(taskContent)
        this.mainTaskContainer.appendChild(this.container)
    }

    /**
     * Display the tasks from LS
     */
    displayTask()
    {
        // display all the tasks
        console.log(this.newProject.getAllTasks())

        let tasks = this.ls.getTasksFromLocalStorage("tasks") || []

        tasks.forEach((task,index) => {
            this.renderTask(task)
        })
    }

    /**
     * Handle the actions for the task such as edit, delete and complete
     */
    // actionsForTasks()
    // {
    //     if(!this.flag)
    //     {
    //         let getContainerDiv = document.querySelector(".container")
    //         getContainerDiv.addEventListener("click",(e) => {
    //             // find the element that contains the attribute data-index
    //             let taskElement = e.target.closest("[data-index]")
    //             console.log(taskElement)

    //             // find the value of the selected element data index
    //             let taskID = taskElement.dataset.index
    //             console.log(taskID)

    //             // find the data attribute depending on the event clicked
    //             let actionEvent = e.target.dataset.action

    //             // display which action event is selected "edit, delete or complete"
    //             console.log(actionEvent)

    //             if(actionEvent === "delete")
    //             {
    //                 let para = taskElement.querySelector("p")
    //                 para.style.textDecorationLine = "line-through"
    //                 para.style.border = "solid 1px red"

    //                 console.log("Delete task")
    //                 // let taskToRemoveElement = this.newProject.projectTaskArr[taskID]
    //                 // console.log(taskToRemoveElement)

    //                 // push the task to the trashListArr
    //                 // const removedTask = this.newProject.removeTaskFromProjects(taskToRemoveElement)
    //                 // console.log(removedTask)

    //                 // check the task is in the trash List
    //                 // console.log("Current Trash List")
    //                 // const displayTrashTasks = this.newProject.getAllTrashTasks()
    //                 // console.log(displayTrashTasks)

    //                 // check the current tasks in the project
    //                 // console.log("Current Project List")
    //                 // const getTaskinProjectList = this.newProject.getAllTasks()
    //                 // console.log(getTaskinProjectList)
    //             }  
    //             else if(actionEvent === "complete")
    //             {
    //                 let para = taskElement.querySelector("p")
    //                 para.style.textDecorationLine = "none"
    //                 para.style.border = "solid 1px green"
    //             } 
    //             else if(actionEvent === "edit")
    //             {

    //             }           
    //         })
    //         this.isListenerAttachedFlag = true
    //     }
    // }
}

class DialogUI
{
    constructor()
    {   
        this.dialog = document.querySelector(".dialog")
        this.addBtn = document.querySelector(".add-btn")
        this.submitBtn = document.querySelector(".submit-btn");
        this.closeModal = document.querySelector('.exit-btn');
        this.task = new TaskUI()
    }
    
    showDialog()
    {
        // show the modal
        this.addBtn.addEventListener("click",() => {
            console.log("Opened Dialog")
            this.dialog.showModal()
        })
    }

    submitModal()
    {
        this.submitBtn.addEventListener('click',(e) => 
        {
            console.log("Form Submitted")
            this.task.createTask()
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
            console.log("Closed Dialog")
            e.preventDefault();
        }) 
    }
}

export const tasks = new TaskUI()
export const dialog = new DialogUI()








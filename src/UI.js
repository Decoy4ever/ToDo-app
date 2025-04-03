import {Task, taskUI} from "./task.js"
import {Project} from "./project.js"

class HomeUI
{
    constructor()
    {
        this.newProject = new Project()
        this.mainContent = document.querySelector(".main-content")
        this.title = document.querySelector(".title").value 
        this.description = document.querySelector(".description").value
        this.priority = document.querySelector(".priority").value 
        this.dueDate = document.querySelector(".due-date").value 

        // container structures the task
        this.container = document.createElement("div")
        this.taskContainerDiv = document.createElement("div")
        this.container.setAttribute("class","container")
        this.taskContainerDiv.setAttribute("class","task-container")
        taskUI.displayAddTaskBar()
    }

    createTaskUI()
    {
        this.para = document.createElement("p")
        this.completeTaskBtn = document.createElement("button")
        this.deleteTaskBtn = document.createElement("button")
        this.editTaskBtn = document.createElement("button")
        this.taskContent = document.createElement("div")

        this.para.setAttribute("class","task-div")
        this.taskContent.setAttribute("class","task-content")

        // create a instance of task class
        this.newTask = new Task(this.title,this.description,this.dueDate,this.priority)
        
        console.log("Created the following task")
        console.log(this.newTask)

        // push the instance of task into the projectList
        this.newProject.addTaskToProject(this.newTask)

        this.newProject.projectTaskArr.forEach((task,index) => {
        
            this.para.textContent = `${task.title} ${task.description} ${task.priority} ${task.priority}`
            this.taskContent.setAttribute("data-index",index)


            // create a complete button for each task
            this.completeTaskBtn.setAttribute("type","button") 
            this.completeTaskBtn.setAttribute("class","complete") 
            this.completeTaskBtn.setAttribute("data-action","complete")
            this.completeTaskBtn.textContent = "Complete"
            
            // create a delete button for each task
            this.deleteTaskBtn.setAttribute("type","button")
            this.deleteTaskBtn.setAttribute("class","delete-btn")
            this.deleteTaskBtn.setAttribute("data-action","delete")
            // this.deleteTaskBtn.setAttribute("data-index", index)
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
        }) 
        
        // append the div.taskContainerDiv to the container
        this.taskContainerDiv.appendChild(this.taskContent)
        this.container.appendChild(this.taskContainerDiv)
        this.mainContent.appendChild(this.container)
    }

    removeTaskUI()
    {
        let taskDivContainer = document.querySelector(".task-container")
        if (!this.isListenerAttached) 
        {
            let taskDivContainer = document.querySelector(".task-container");
            console.log("Before Trash List")

            taskDivContainer.addEventListener("click", (event) => 
            {
                let button = event.target.closest("button");
    
                if (button && button.hasAttribute("data-index"))
                {
                    console.log("Event Triggered");
    
                    let taskID = button.getAttribute("data-index");
                    console.log(`Delete button clicked for taskID: ${taskID}`);

                    // find the task to remove by index
                    const taskToRemove = this.newProject.projectTaskArr[taskID]
                    console.log(taskToRemove)

                    // remove the task
                    const removeTask = this.newProject.removeTaskFromProjects(taskToRemove)
                    console.log(removeTask)

                    // check the task is in the trash List
                    console.log("Current Trash List")
                    // this.TodayProject.getAllTrashTasks()
                    console.log(this.currentTrashList)

                    // print out all the deleted tasks
                    const trashTaskDiv = document.createElement("div")
                    this.newProject.trashTaskArr.forEach((task,index) => {
                        trashTaskDiv.textContent = `${task.title}, ${task.description}`
                    })
                    this.taskContent.appendChild(trashTaskDiv)

                    // // check the current tasks in the project
                    console.log("Current Project List")
                    const getTaskinProjectList = this.newProject.getAllTasks()
                    console.log(getTaskinProjectList)
                }
            });
            // Set the flag to true after attaching the listener
            this.isListenerAttached = true;
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
            this.home.createTaskUI()
            // this.home.editTaskUI()
            this.home.removeTaskUI()
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

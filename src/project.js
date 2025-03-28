// import the `class Task`
import {Task} from "./task.js"
import {taskUI} from "./task.js"

class TodayProject 
{
    constructor()
    {
        this.projectList = []
        this.trashList = []
    }

    // create a task and add to the project
    addTaskToProject(tasks)
    {
        return this.projectList.push(tasks)
    }

    removeTaskFromProjects(task)
    {
        // add task to trash list
        this.trashList.push(task)

        // update the current tasks avaliable in the project
        this.projectList = this.projectList.filter((el) => el !== task)
    }

    getAllTrashTasks()
    {
        return this.trashList
    }

    getAllTasks()
    {
        return this.projectList
    }
}

class ProjectUI
{
    constructor()
    {
        this.TodayProject = new TodayProject()
        this.mainContent = document.querySelector(".main-content")
        this.title = document.querySelector(".title")
        this.description = document.querySelector(".description")
        this.dueDate = document.querySelector(".due-date")
        this.priority = document.querySelector(".priority")
        this.contentDivContainer = document.createElement("div")
        this.contentDivContainer.setAttribute("class","content-container")
        this.isListenerAttached = false;

    }

    content()
    {
        // display the add task bar in homepg
        taskUI.addTaskBarUI()
    }

    createTaskUI()
    {
        // retrieve the values of user input
        let title = `${this.title.value}`
        let description = `${this.description.value}`
        let dueDate = `${this.dueDate.value}`
        let priority = `${this.priority.value}`

        this.para = document.createElement("p")
        this.para.setAttribute("class","task-div")
        this.completeTaskBtn = document.createElement("button")
        this.deleteTaskBtn = document.createElement("button")
        this.taskContent = document.createElement("div")
        this.taskContent.setAttribute("class","task-content")
        this.contentDivContainer.appendChild(this.taskContent)

        // create a instance of task class
        this.newTask = new Task(title,description,dueDate,priority)

        // push the instance of task into the projectList
        this.TodayProject.addTaskToProject(this.newTask)

        this.TodayProject.projectList.forEach((task,index) => {
        
            this.para.textContent = `${task.title} ${task.description} ${task.priority} ${task.priority}`

            // create a complete button
            this.completeTaskBtn.setAttribute("type","button") 
            this.completeTaskBtn.textContent = "Complete"
            
            // create a delete button
            this.deleteTaskBtn.setAttribute("type","button")
            this.deleteTaskBtn.setAttribute("class","delete-btn")
            this.deleteTaskBtn.textContent = "Delete"
            this.deleteTaskBtn.setAttribute("data-index", index)

            this.taskContent.appendChild(this.para)
            this.taskContent.appendChild(this.completeTaskBtn)
            this.taskContent.appendChild(this.deleteTaskBtn)

            this.contentDivContainer.appendChild(this.taskContent)

            this.mainContent.appendChild(this.contentDivContainer)
        }) 

        

        // return the list of tasks in home project
        console.log("Added the following Tasks")
        console.log(this.TodayProject.getAllTasks())
        
        this.TodayProject.getAllTasks()
   
    }
    
    removeTaskUI() {
        let taskDivContainer = document.querySelector(".content-container");

        if (!this.isListenerAttached) 
        {
            taskDivContainer.addEventListener("click", (event) => 
            {
                let button = event.target.closest("button");
    
                if (button && button.hasAttribute("data-index"))
                {
                    console.log("Event Triggered");
    
                    let taskID = button.getAttribute("data-index");
                    console.log(`Delete button clicked for taskID: ${taskID}`);

                    // find the task to remove by index
                    const taskToRemove = this.TodayProject.projectList[taskID]

                    // remove the task
                    const removeTask = this.TodayProject.removeTaskFromProjects(taskToRemove)
                    console.log(removeTask)

                    // check the task is in the trash List
                    const trashList = this.TodayProject.getAllTrashTasks()
                    console.log(trashList)

                    // check the current tasks in the project
                    const getPorjectList = this.TodayProject.getAllTasks()
                    console.log(getPorjectList)
                }
            });
            // Set the flag to true after attaching the listener
            this.isListenerAttached = true;
        }
    }
}

class RemoveUI
{
    content()
    {
        // display the trashlist
        this.showTrashList = new ProjectUI()
        this.trashList = new TodayProject()
        this.trashList.getAllTrashTasks()
        this.mainContent = document.querySelector(".main-content")

        this.mainContent.style.backGroundColor = "Yellow"
    }
}

class DialogUI
{
    constructor()
    {   
        this.projectTask = new ProjectUI()    
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
            // this.projectTask.content()
            this.projectTask.createTaskUI()
            this.projectTask.removeTaskUI()
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
export const homeUI = new ProjectUI()
// export const removeUI = new RemoveUI()

/**
 * Handle the dom elements of List UI include the following
 * creating a text value from creating a instance of the class createList
 * creating a button 
 * creating div for containement of list of project buttons
 */
// class ProjectUI
// {
//     constructor()
//     {
//         this.projectList = document.querySelector(".project-list")
//         this.listTitle = new createProject()
//     }

//     dropDownUI()
//     {
//         // create elements for dropDown menu
//         const listBtn = document.createElement("button")
//         const dropDownDivContainer = document.createElement("div")
//         const dropDownDivContent = document.createElement("div")
        
//         // add class names
//         dropDownDivContainer.classList.add("dropdown")
//         dropDownDivContent.classList.add("dropdown-content")
//         listBtn.classList.add("list-btn")

//         // get the value of tht title from createProject instance
//         this.listTitle.createTitle()
//         listBtn.textContent = this.listTitle.getTitle()

//         // append it ot the `button.project-list`
//         dropDownDivContent.appendChild(listBtn)
//         dropDownDivContainer.appendChild(dropDownDivContent)
//         this.projectList.appendChild(dropDownDivContainer)
//     }
// }

// export const projects = new ProjectUI()


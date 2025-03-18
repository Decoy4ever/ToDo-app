// import the `class Task`
import {Task} from "./task.js"
import {taskUI} from "./task.js"

class TodayProject 
{
    constructor()
    {
        this.projectList = []
    }

    // create a task and add to the project
    addTaskToProject(tasks)
    {
        return this.projectList.push(tasks)
    }

    getAllTasks()
    {
        return this.projectList
    }
}

class showTasksInProjectUI
{
    constructor()
    {
        this.TodayProject = new TodayProject()
        this.mainContent = document.querySelector(".main-content")
        this.title = document.querySelector(".title")
        this.description = document.querySelector(".description")
        this.dueDate = document.querySelector(".due-date")
        this.priority = document.querySelector(".priority")
    }

    createTask()
    {
        this.contentDiv = document.createElement("div")
        this.mainContent.appendChild(this.contentDiv)

        let title = `${this.title.value}`
        let description = `${this.description.value}`
        let dueDate = `${this.dueDate.value}`
        let priority = `${this.priority.value}`

        // create a instance of task class
        this.newTask = new Task(title,description,dueDate,priority)
        
        // push the instance of task into the projectList
        this.TodayProject.addTaskToProject(this.newTask)

        const div = document.createElement("div")
        this.completeTaskBtn = document.createElement("button")
        this.deleteTaskBtn = document.createElement("button")

        this.TodayProject.projectList.forEach((task) => {
            div.textContent = `${task.title} ${task.description} ${task.priority} ${task.priority}`
            this.contentDiv.appendChild(div)
            
            // create a complete button
            this.completeTaskBtn.setAttribute("type","button") 
            this.completeTaskBtn.textContent = "Complete"
            
            // create a delete button
            this.deleteTaskBtn.setAttribute("type","button")
            this.deleteTaskBtn.textContent = "Delete"

            this.contentDiv.appendChild(this.completeTaskBtn)
            this.contentDiv.appendChild(this.deleteTaskBtn)

            this.deleteTaskBtn.addEventListener("click",()=> {
                console.log("Clicked Delete")
                div.style.textDecorationLine = "line-through"
            })
        }) 
    }
}




class TodayUI
{
    content()
    {
        // print out the add task bar
        taskUI.addTaskBarUI()
    }
}

class DialogUI
{
    constructor()
    {   
        this.projectTask = new showTasksInProjectUI()    
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
            this.projectTask.createTask()
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
export const homeUI = new TodayUI()


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


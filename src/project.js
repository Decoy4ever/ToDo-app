import {task1} from "./task.js"
import {task2} from "./task.js"
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

// retreive the object and pass into the array
// const project_task1 = task1.getTaskDetails()
// const project_task2 = task2.getTaskDetails()
// console.log(project_task1)
// console.log(project_task2)

// // create an instance of todayProject
// export const todayProject = new TodayProject()
// todayProject.addTaskToProject(project_task1)
// todayProject.addTaskToProject(project_task2)

// //print out arr
// todayProject.getAllTasks()


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
            taskUI.getTaskInfo()
            e.preventDefault();
            // this.dialog.close();  
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


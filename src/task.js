/**
 * Create a task with the properties of title, description, duedate and priority
 */

class Task
{
    constructor(title,description,dueDate,priority)
    {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

    // get Tak Details
    getTaskDetails()
    {
        return {
            Title: this.title,
            Description: this.description,
            DueDate: this.dueDate,
            Priority: this.priority
        }
    }
}

export const task1 = new Task("Shopping Cart","Milk & Ceral","25-3-25","High")
export const task2 = new Task("PCParts","Buy GPU", "24-5-25","Low")
class TaskUI
{  
    constructor()
    {
        this.tasks = new Task()
        this.mainContent = document.querySelector(".main-content")
        this.form = document.createElement("form")
        this.showBtn = document.createElement("button")
        this.input = document.createElement("input")

        this.title = document.querySelector(".title")
        this.description = document.querySelector(".description")
        this.dueDate = document.querySelector(".due-date")
        this.priority = document.querySelector(".priority")
    } 

    // create the add task bar
    addTaskBarUI()
    {  
        const div = document.createElement("div")
        div.classList.add("add-container")
        
        this.showBtn.textContent = "+"
        this.showBtn.setAttribute("type", "button")
        this.showBtn.setAttribute("class","addBtn")

        this.input.setAttribute("type","text")
        this.input.setAttribute("placeholder","+ Add task")
        
        this.form.appendChild(this.input)
        this.form.appendChild(this.showBtn)
        div.appendChild(this.form)
        this.mainContent.appendChild(div)
    }    

    // create the form for the dialog
    getTaskInfo()
    { 
        this.contentDiv = document.createElement("div")
        this.mainContent.appendChild(this.contentDiv)

        let title = `${this.title.value}`
        let description = `${this.description.value}`
        let dueDate = `${this.dueDate.value}`
        let priority = `${this.priority.value}`

        // // create a taskObject and pass it into the 
        const newTask = new Task(title,description,dueDate,priority)
        return newTask


        // this.tasks.taskArr.forEach((task,index) => {
        //     const divTask = document.createElement("div")
        //     divTask.textContent = `${divTask.Title} ${divTask.Description} ${divTask.DueDate} ${divTask.Priority}`
        //     console.log(divTask)
        //     this.contentDiv.appendChild(divTask)
        // })
    }
}

export const taskUI = new TaskUI()




class Task
{
    constructor(title,description,dueDate,priority)
    {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
}

/**
 * Create a task with the properties of title, description, duedate and priority
 */
class createTask extends Task
{
    constructor(title,description,dueDate,priority)
    {
        super()
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.taskArr = []
    }

    addPropertiesToTask()
    {
        let task = 
        {
            title: this.title,
            description: this.description,
            dueDate: this.dueDate,
            priority: this.priority
        }
        this.taskArr.push(task)
        console.log("Successfully added task")
    }
}

/**
 * Print out all the tasks
 */
class PrintAllTasks 
{
    constructor()
    {
        this.newTask = new createTask()
    }

    printTasksDetails()
    {
        this.newTask.title = prompt("Enter a title")
        this.newTask.description = prompt("Enter a description")
        this.newTask.dueDate = prompt("Enter a dueDate")
        this.newTask.priority = prompt("Enter a priority")
        this.newTask.addPropertiesToTask()
        console.log(this.newTask.taskArr)
    }
}

// create search bar with add button
// add submit button
// create a form
// get the form value and print out in web page
class TaskUI
{  
    constructor()
    {
        this.mainContent = document.querySelector(".main-content")
    } 

    addTaskFormUI()
    {
        const div = document.createElement("div")
        div.classList.add("add-container")
        
        // Create a form
        const form = document.createElement("form")
        const btn = document.createElement("button")
        const input = document.createElement("input")

        btn.textContent = "+"
        btn.setAttribute("type", "button")

        input.setAttribute("type","text")
        input.setAttribute("placeholder","+ Add task")
        
        form.appendChild(input)
        form.appendChild(btn)
        div.appendChild(form)
        this.mainContent.appendChild(div)
    }
    
}

export const task = new PrintAllTasks()
export const taskUI = new TaskUI()






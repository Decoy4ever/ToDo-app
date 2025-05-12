/**
 * Create a task with the properties of title, description, duedate and priority
 */

export class Task
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
        this.addDiv = document.createElement("div")
    }    
}

export const taskUI = new TaskUI()




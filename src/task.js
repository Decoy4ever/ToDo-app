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
        this.taskArr = []
    }

    // create a object with propertiers task
    createTaskObject()
    {
        return {
            Title: this.title,
            Description: this.description,
            DueDate: this.dueDate,
            Priority: this.priority
        }
    }

    // add object to taskArr
    addTaskObjectToArr()
    {
        let taskObj = this.createTaskObject()
        console.log(taskObj)
        this.taskArr.push(taskObj)
        return this.taskArr
    }
}

export const task = new Task("Shopping Center","Milk & Ceral","20-3-25","High")

class TaskUI
{   
    // create the add task bar
    addTaskBarUI()
    {
        this.mainContent = document.querySelector(".main-content")
        const div = document.createElement("div")
        div.classList.add("add-container")
        
        this.form = document.createElement("form")
        this.showBtn = document.createElement("button")
        this.input = document.createElement("input")

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

    DialogUI()
    {

        this.dialog = document.querySelector(".dialog")
        this.submitBtn = document.querySelector(".submit-btn");
        this.closeModal = document.querySelector('.exit-btn');


        // show the modal
        this.showBtn.addEventListener("click",() => {
            this.dialog.showModal()
        })

        this.submitBtn.addEventListener('click',(e) => 
        {
            this.mainCard.textContent = "";    
            console.log("form submitted")
            e.preventDefault();
            this.dialog.close();  
        }) 

        // close the dialog form
        this.closeModal.addEventListener('click',(e) => 
        {
            e.preventDefault();
            this.dialog.close();
            console.log("close form activated")
        }) 
    }
}

export const taskUI = new TaskUI()






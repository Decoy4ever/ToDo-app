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
        this.taskArr.push(this.title, this.description, this.dueDate, this.priority)
        console.log(`Successfully created Task ${this.taskArr}`)
    }

    // Display the Task Object/Element
    showTaskDetails()
    {
        console.log(`Title: ${this.title}`)
        console.log(`Description: ${this.description}`)
        console.log(`Due Date: ${this.dueDate}`)
        console.log(`Priority: ${this.priority}`)
        this.addPropertiesToTask()
        console.log(this.taskArr)
    }
}

export const task = new createTask()
task.title = "Shopping"
task.description = "Get the following fruits Apple,Banana & Orange"
task.dueDate = "1/3/25"
task.priority = 1



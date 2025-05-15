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






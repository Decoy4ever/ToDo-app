export class Project 
{
    constructor()
    {
        this.projectTaskArr = []
        this.trashTaskArr = []
    }

    // create a task and add to the project
    addTaskToProject(tasks)
    {
        return this.projectTaskArr.push(tasks)
    }

    removeTaskFromProjects(task)
    {
        // add task to trash list
        this.trashTaskArr.push(task)

        // update the current tasks avaliable in the project
        this.projectTaskArr = this.projectTaskArr.filter((el) => el !== task)
    }

    editTaskFromProjects(taskToModify, property, value)
    {
        this.projectTaskArr.forEach((task,index) => {
            if(task === taskToModify)
            {
                taskToModify[property] = value
            }
        })
        return taskToModify
    }

    getAllTrashTasks()
    {
        return this.trashTaskArr
    }

    getAllTasks()
    {
        return this.projectTaskArr
    }
}










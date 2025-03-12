class Project
{
    contructor(title)
    {
        this.title = title
        this.listArr = []
    }
}

/**
 * Creates a new list it opens a pop-up box asking user to enter a title
 * then creates a sub-button that is appended to parent List button
 * 
 */
class createProject extends Project
{
    constructor(title)
    {
        super()
        this.title = title    
    }

    createTitle()
    {
        this.title = prompt("Enter a title: ")
        return this.title
    }

    getTitle()
    {
        return this.title
    }
}

/**
 * Handle the dom elements of List UI include the following
 * creating a text value from creating a instance of the class createList
 * creating a button 
 * creates new tasks
 */
class ProjectUI
{
    constructor()
    {
        this.projectList = document.querySelector(".project-list")
        this.listTitle = new createProject()
    }

    createButton()
    {
        const listBtn = document.createElement("button")
        listBtn.classList.add("list-btn")
        this.listTitle.createTitle()
        listBtn.textContent = this.listTitle.getTitle()
        this.projectList.appendChild(listBtn)
    }
}

export const projects = new ProjectUI()


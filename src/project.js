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
 * creating div for containement of list of project buttons
 */
class ProjectUI
{
    constructor()
    {
        this.projectList = document.querySelector(".project-list")
        this.listTitle = new createProject()
    }

    dropDownUI()
    {
        // create elements for dropDown menu
        const listBtn = document.createElement("button")
        const dropDownDivContainer = document.createElement("div")
        const dropDownDivContent = document.createElement("div")
        
        // add class names
        dropDownDivContainer.classList.add("dropdown")
        dropDownDivContent.classList.add("dropdown-content")
        listBtn.classList.add("list-btn")

        // get the value of tht title from createProject instance
        this.listTitle.createTitle()
        listBtn.textContent = this.listTitle.getTitle()

        // append it ot the `button.project-list`
        dropDownDivContent.appendChild(listBtn)
        dropDownDivContainer.appendChild(dropDownDivContent)
        this.projectList.appendChild(dropDownDivContainer)
    }
}

export const projects = new ProjectUI()


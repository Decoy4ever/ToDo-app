import "./styles.css"
import {task} from "./task.js"
import {taskUI} from "./task.js"
import {projects} from "./project.js"


class TodayPage 
{
    constructor()
    {
        this.mainContent = document.querySelector(".main-content")
        this.header = document.createElement("h1")
    }

    content()
    {
        // Add Header
        this.header.textContent = "Today"
        this.mainContent.appendChild(this.header)

        // Add the addtaskFormUI
        taskUI.addTaskFormUI()     
    }
}

class SwitchTabs 
{
    constructor()
    {
        this.buttonTabs = document.querySelectorAll("button")
        this.todayContent = new TodayPage()
    }

    openLinkTabs()
    {
        this.buttonTabs.forEach((btn) => {
            btn.addEventListener("click", ()=> {
               if(btn.textContent === "Today")
               {
                this.todayContent.content()
               }
               else if(btn.textContent === "List")
               {
                projects.dropDownUI()
               }
               else if(btn.textContent === "Completed")
               {
                console.log("I clicked on Completed List")
               }
               else if(btn.textContent === "Trash")
               {
                console.log("I clicked on Trash List")
               }
            })
        })  
    }
}

const tabs = new SwitchTabs()
tabs.openLinkTabs()
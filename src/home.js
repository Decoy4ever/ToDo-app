import "./styles.css"
import {task} from "./task.js"
// import {projects} from "./project.js"

// what are the share charcteristics of each list
// 1. have a header for each link
// 2. have add task link
class SwitchTabs 
{
    constructor()
    {
        this.buttonTabs = document.querySelectorAll("button")
    }

    openLinkTabs()
    {
        const todayList = document.getElementsByClassName("today-list")
        // loop through the buttons
        // if the button text is equivalent to the certain text
        // print out the a msg 
        this.buttonTabs.forEach((btn) => {
            btn.addEventListener("click", ()=> {
               if(btn.textContent === "Today")
               {
                // console.log("I click on Today list")
                task.showTaskDetails()
               }
               else if(btn.textContent === "List")
               {
                console.log("I clicked on General List")
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
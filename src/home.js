import "./styles.css"
import {dialogUI, homeUI} from "./project.js"
import {taskUI} from "./task.js"
import {removeUI} from "./project.js"




class HomePg
{
    content()
    {
        let navBar = document.querySelector("nav")   
        
        // display the add task bar for each projects
        taskUI.displayAddTaskBar()

        // display the dialog funtionalities
        dialogUI.showDialog()
        dialogUI.submitModal()
        dialogUI.exitModal()

        navBar.addEventListener("click",(event) => {
            if(event.target.className === "today-list")
            {
                // display the list of Tasks FOR today
            }
            else if(event.target.className === "trash-list")
            {
                // display the Trash List
                console.log("Opening Trash List")
            }
        })

    }
}


const home = new HomePg()
home.content()


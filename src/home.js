import "./styles.css"
import {dialog, tasks} from "./UI.js"

import {task} from "./task.js"




class HomePg
{
    content()
    {
        let navBar = document.querySelector("nav")
        
        // retrieve all the tasks first
        tasks.displayTask()
        tasks.actionsForTasks()
        dialog.showDialog();      
        dialog.submitModal(() => {
            tasks.createTask();  
        });

        dialog.exitModal();       


        navBar.addEventListener("click",(event) => {
            if(event.target.className === "today-list")
            {
                // display the list of Tasks FOR today
                // homePG.createTaskUI()
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


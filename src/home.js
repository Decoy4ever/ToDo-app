import "./styles.css"
import {homePG, dialog} from "./UI.js"
import {taskUI} from "./task.js"




class HomePg
{
    content()
    {
        let navBar = document.querySelector("nav")
    
        dialog.showDialog()
        dialog.exitModal()
        dialog.exitModal()

        // navBar.addEventListener("click",(event) => {
        //     if(event.target.className === "today-list")
        //     {
        //         // display the list of Tasks FOR today
        //         // homePG.createTaskUI()
        //     }
        //     else if(event.target.className === "trash-list")
        //     {
        //         // display the Trash List
        //         console.log("Opening Trash List")
        //     }
        // })

    }
}


const home = new HomePg()
home.content()


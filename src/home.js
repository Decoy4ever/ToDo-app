import "./styles.css"
import {homePG, dialogUI} from "./UI.js"
import {taskUI} from "./task.js"


// Handle the DOM manipulation of the dialog
class DialogUI
{
    constructor()
    {   
        this.dialog = document.querySelector(".dialog")
        this.submitBtn = document.querySelector(".submit-btn");
        this.closeModal = document.querySelector('.exit-btn');
    }
    
    showDialog()
    {
        // show the modal
        taskUI.showBtn.addEventListener("click",() => {
            console.log("Opened Dialog")
            this.dialog.showModal()
        })
    }

    submitModal()
    {
        this.submitBtn.addEventListener('click',(e) => 
        {
            console.log("Form Submitted")
            homePG.displayActionTaskUI()
            e.preventDefault();
            this.dialog.close();  
        }) 
    }

    exitModal()
    {
        // close the dialog form
        this.closeModal.addEventListener('click',(e) => 
        {
            this.dialog.close();
            console.log("Closed DIalog")
            e.preventDefault();
        }) 
    }
}
class HomePg
{
    content()
    {
        let navBar = document.querySelector("nav")
        let dialog = new DialogUI()  

        dialog.showDialog()
        dialog.submitModal()
        dialog.exitModal()
     
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


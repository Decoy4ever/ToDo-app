import "./styles.css"
import {dialogUI} from "./project.js"
import {homeUI} from "./project.js"



class SwitchTabs 
{
    constructor()
    {
        this.buttonTabs = document.querySelectorAll("button")
    }

    openLinkTabs()
    {
        this.buttonTabs.forEach((btn) => {
            btn.addEventListener("click", ()=> {
               if(btn.textContent === "Today")
               {
                    homeUI.content()
               }
            })
        })  
    }
}




homeUI.content()
dialogUI.showDialog()
dialogUI.submitModal()
dialogUI.exitModal()
const tabs = new SwitchTabs()
tabs.openLinkTabs()
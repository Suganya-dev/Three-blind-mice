import { useComputers, getComputers } from "./computerdataprovider.js"
import { getEmployees, useEmployees } from "./employeedataprovider.js"
import { employeecard } from "./employeecomponenet.js"
const contentTarget = document.querySelector(".employeecontainer")


export const employeeList = () => {
    getEmployees()
        .then(getComputers)
       
        .then(() => {
            const employ = useEmployees()
            const comput = useComputers()
            console.log(employ,comput)
            render(employ, comput)
        })
}
const render = (employeeArray, computerArray) => {
    
     employeeArray.forEach(empObj => {
        const computer = computerArray.find(compObj => 
      compObj.id === empObj.computerId
             )
      console.log(computer)
           
      return contentTarget.innerHTML += employeecard(empObj, computer)
       
    })
}


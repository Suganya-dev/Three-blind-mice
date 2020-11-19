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
            render(employ, comput)
        })
}
const render = (employeeArray, computerArray) => {
    contentTarget.innerHTML = employeeArray.map(empObj => {
        const computers = computerArray.filter(compObj => {
            compObj.id === employeeArray.computerId
        })

        const html = employeecard(empObj, computers)
        return html
    }).join("")

}
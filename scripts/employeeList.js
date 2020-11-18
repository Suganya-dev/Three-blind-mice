import {useComputers} from"./computerdataprovider.js"
import {useEmployees} from"./employeedataprovider.js"
import {employeecard} from"./employeecomponenet.js"

const contentTarget = document.querySelector(".employeecontainer")
// got reference to both arrays
export const employeeList =() =>{
const employees = useEmployees()
const computers = useComputers()

// iterate the array of products 
// one computer many employees relatioinship
const employeearray = employees.map(empObj =>{
const computerarray = computers.find(compObj =>{
    compObj.id === empObj.computerId})

    // build html representation
 const html = employeecard(empObj,computerarray)
 return html
})
// rendering and put it into DOM
const stringofallrepresentation = employeearray.join("")
contentTarget.innerHTML = stringofallrepresentation
}
 import {getEmployees} from "./employeedataprovider.js"
 import {getComputers} from "./computerdataprovider.js"
 import {employeeList} from "./employeeList.js"
getEmployees()
.then(getComputers)
.then(employeeList)

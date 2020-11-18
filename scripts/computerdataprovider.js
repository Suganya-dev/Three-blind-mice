let Computer=[]

export const getComputers = () =>{
    return fetch("http://localhost:8088/computers")
    .then(response=> response.json())
    .then(parsedcomputers =>{
        Computer = parsedcomputers
        console.log(parsedcomputers)
    })
}

export const useComputers = () =>{
    return Computer.slice()
}
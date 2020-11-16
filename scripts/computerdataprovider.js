let Computer=[]

export const useComputers = () =>{
    return fetch("http://localhost:8088/computer1")
    .then(response=> response.json())
    .then(parsedcomputers =>{
        Computer = parsedcomputers
    })
}

export const getComputers = () =>{
    return Computer.slice()
}
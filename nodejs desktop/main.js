// by default , fetch uses the GET method
// the first parameter is the url
// the second parameter which is a object (optional) is used to :
// - add some headers
// - choose other method than GET
// - add a body to your request
const URL = "http://127.0.0.1:3000/users"
const main = () => {
    readData()
    //saveData()
    //deleteData(10)
   // updateData("WD343", { name: "ali", city: "rabat" })
}
const updateData = (id, user) => {
    fetch(`${URL}/${id}`,
        {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            console.log(response.status)
        })
        .catch(e => console.error(e))
}
const deleteData = (id) => {
    fetch(`${URL}/${id}`, { method: "DELETE" })
        .then(response => {
            console.log(response.status)
        })
        .catch(e => console.error(e))
}
const saveData = () => {
    const user = {
        id: 10,
        name: "mehdi",
        city: "fez"
    }
    fetch(URL, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            console.log(response.status)
        })
        .catch(e => console.error(e))
}
const readData = () => {
    fetch(URL)
        .then(response =>response.json())
        .then(data=> data.forEach(user=>console.log(user)))
        .catch(e => console.error(e))
}

main()
fetch("http://127.0.0.1:3000/users/oook")
.then(response=>{
    console.log(response.status)
})
.catch(e=>console.error(e))
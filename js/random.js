 const loadUser  = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data =>displayUser(data))
}

const displayUser = user => {
    const genderTag = document.getElementById('gender')
    const nameTag = document.getElementById('name')
    const emailTag = document.getElementById('email')
    emailTag.innerHTML = user.results[0].email
    nameTag.innerHTML = user.results[0].name.title + ' ' +  user.results[0].name.first
    genderTag.innerHTML = user.results[0].gender
 console.log(user.results) 
}
loadUser()


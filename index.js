function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(resp => resp.json())
    .then(data => document.body.textContent = data.id)
    .catch(error => document.body.textContent = error.message)
};

submitData('user24', 'Kale')
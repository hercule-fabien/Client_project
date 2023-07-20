const passwordUpd = document.querySelector('#passwordUpd')

passwordUpd.addEventListener('submit', async(event) => {
    event.preventDefault()

    const data = new FormData(passwordUpd)
    const inputs = Object.fromEntries(data)
console.log(inputs)
    if (!inputs.currentPassword || !inputs.newPassword || !inputs.newPasswordValid) {
        alert('enter your data')
    } else {
       const response = await fetch('/newPassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
       })
       const result = await response.json()
       console.log(result)
    }
    
})
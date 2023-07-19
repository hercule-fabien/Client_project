const newCard = document.querySelector('.newCard')

newCard.addEventListener('submit', async(event) => {
    console.log('lalalallalalalal')
event.preventDefault()

const data = new FormData(newCard)
const inputs = Object.fromEntries(data)
console.log(inputs)

if(!inputs.categoryName || !inputs.question || !inputs.answer ) {
    alert('Enter info!')
} else {
    try {
       const response = await fetch('/newCard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
       }) 
    const result = await response.json()
    console.log(result, "TUT RESULT")
    window.location.href = `/home`
    alert('New card created!')
    } catch (error) {
        console.log('Something went wrong!', error)
    }
}
})
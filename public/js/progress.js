// const progressCircle = document.querySelector('.progress-circle');
// const countDiv = document.querySelector('.progress-count');
const bodyDiv = document.querySelector('#body');

// const randomIndex = Math.floor(Math.random() * 3);

(async () => {
  try {
    const response = await fetch('/account', {
      method: 'POST',
    });
    const data = await response.json();

    const { result } = data;

    console.log(result);

    result.map((el) => {
      const progressContainer = document.createElement('div');
      progressContainer.className = 'container';

      const circle = document.createElement('div');
      circle.className = 'progress-circle';

      circle.style.transform = `rotate(${el.progressPercent * 3.6}deg)`;

      const countDiv = document.createElement('div');
      countDiv.innerHTML = `${el.progressPercent}%`;
      countDiv.className = 'progress-count';

      const randomCheers = ['Hooray for you! Keep up the great work!', 'Practice makes perfect! Keep going!', 'You\'re doing great! Keep up the good work!', 'Cheers to learning!'];
      const randomIndex = Math.floor(Math.random() * 3);

      const text = document.createElement('h5');
      text.className = 'cheers';

      text.innerText = `YOU HAVE LEARNED ${el.islearned} OUT OF ${el.total} WORDS IN CATEGORY ${el.categoryName.toUpperCase()}! \n ${randomCheers[randomIndex]} `;

      circle.appendChild(countDiv);
      progressContainer.appendChild(circle);
      progressContainer.appendChild(text);
      bodyDiv.appendChild(progressContainer);

      return bodyDiv;
    });
  } catch (error) {
    alert('Something went wrong :((( ', error);
  }
})();

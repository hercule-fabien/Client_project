// const progressCircle = document.querySelector('.progress-circle');
// const countDiv = document.querySelector('.progress-count');
const bodyDiv = document.querySelector('#body');

(async () => {
  try {
    const response = await fetch('/account', {
      method: 'POST',
    });
    const data = await response.json();

    const { result } = data;

    console.log(result);

    result.map((el) => {
      const circle = document.createElement('div');
      circle.className = 'progress-circle';
      circle.style.transform = `rotate(${el.progressPercent * 3.6}deg)`;

      const countDiv = document.createElement('div');
      countDiv.innerHTML = `${el.progressPercent}%`;
      countDiv.className = 'progress-count';

      const text = document.createElement('h5');
      text.innerText = `YOU HAVE LEARNED ${el.islearned} OUT OF ${el.total}. Keep it up! `;

      circle.appendChild(countDiv);
      bodyDiv.appendChild(circle);
      bodyDiv.appendChild(text);
      return bodyDiv;
    });
  } catch (error) {
    alert('Something went wrong :((( ', error);
  }
})();

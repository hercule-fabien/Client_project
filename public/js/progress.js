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

    // console.log(result);
    // progressCircle.style.transform = `rotate(${progress * 3.6}deg)`;
    // countDiv.innerHTML = `${progress}%`;

    for (let i = 0; i < result.length; i += 1) {
      const circle = document.createElement('div');
      circle.className = 'progress-circle';
      circle.style.transform = `rotate(${result[i] * 3.6}deg)`;

      const countDiv = document.createElement('div');
      countDiv.innerHTML = `${result[i]}%`;
      countDiv.className = 'progress-count';

      circle.appendChild(countDiv);
      bodyDiv.appendChild(circle);
    }
  } catch (error) {
    alert('Что-то совсем плохо :((( ', error);
  }
})();

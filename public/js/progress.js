const progressCircle = document.getElementById('progress-circle');
const countDiv = document.getElementById('progress-count');

(async () => {
  try {
    const response = await fetch('/account', {
      method: 'POST',
    });
    const data = await response.json();

    const { progress } = data;

    progressCircle.style.transform = `rotate(${progress * 3.6}deg)`;
    countDiv.innerHTML = `${progress}%`;
  } catch (error) {
    alert('Что-то совсем плохо :((( ', error);
  }
})();

const bodyDiv = document.querySelector('#body');

(async () => {
  try {
    const response = await fetch('/account', {
      method: 'POST',
    });
    const data = await response.json();

    const { result } = data;

    result.map((el) => {
      const progressContainer = document.createElement('div');
      progressContainer.className = 'container';

      const circle = document.createElement('div');
      circle.className = 'progress-circle col-4';

      circle.style.background = `radial-gradient(white 50%, transparent 51%),
    conic-gradient(transparent 0deg ${(el.progressPercent * 3.6)}deg, gainsboro 220deg 360deg),
    conic-gradient(#ee8498 0deg, #f7cf79 90deg, #acecf7 180deg, #586a6a)`;

      const progressLine = document.createElement('div');
      progressLine.className = 'progress col-9';
      progressLine.style.width = '400px';
      progressLine.style.padding = '0';
      progressLine.innerHTML = `<div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style="width: ${el.progressPercent}%" aria-valuenow="${el.progressPercent}" aria-valuemin="0" aria-valuemax="100"></div>`;

      const countDiv = document.createElement('div');
      countDiv.innerHTML = `${el.progressPercent}%`;
      countDiv.className = 'progress-count col-6';

      const randomCheers = ['Ура! Продолжай в том же духе!', 'Вперед, к новым вершинам!', 'Так держать! Ты мегамозг!', 'Прекрасно! Твои успехи впечатляют!'];
      const randomIndex = Math.floor(Math.random() * 3);

      const text = document.createElement('h5');
      text.className = 'cheers';

      text.innerText = `Ты выучил ${el.islearned} из ${el.total} слов в категории ${el.categoryName.toUpperCase()}! \n ${randomCheers[randomIndex]} `;

      circle.appendChild(countDiv);
      progressContainer.appendChild(circle);
      bodyDiv.appendChild(progressContainer);
      bodyDiv.appendChild(progressLine);
      progressContainer.appendChild(text);

      return bodyDiv;
    });
  } catch (error) {
    alert('Something went wrong :((( ', error);
  }
})();

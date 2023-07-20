document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const btnLearnedElements = document.querySelectorAll('.btn-learned');

  [...cards].forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  });

  btnLearnedElements.forEach((button) => {
    button.addEventListener('click', async () => {
      const checkMarkElem = button.parentNode.parentNode.querySelector('.checkmark-container');
      const id = Number(button.dataset.cardid);
      const result = await fetch(`/categories/cards/${id}`, {
        method: 'PATCH',
      });
      const data = await result.json();
      if (data.isLearned) {
        const cardFaces = button.closest('.card').querySelectorAll('.card__face');
        // cardFaces.forEach((face) => face.classList.add('card__face--learned'));
        checkMarkElem.innerHTML = '<i class = "gg-check-o" />';
      } else {
        const cardFaces = button.closest('.card').querySelectorAll('.card__face');
        cardFaces.forEach((face) => face.classList.remove('card__face--learned'));
        checkMarkElem.innerHTML = '';
      }
    });
  });
});

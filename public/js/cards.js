document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const btnLearnedElements = document.querySelectorAll('.btn-learned');

  const cardDiv = document.querySelector('.deleteDiv');

  [...cards].forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  });

  cardDiv.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn-learned')) {
      const { id } = e.target;
      // const buttonDel = document.getElementById(`${id}`);
      // const checkMarkElem = button.parentNode.parentNode.querySelector('.checkmark-container');
      const result = await fetch(`/categories/cards/${id}`, {
        method: 'PATCH',
      });
      const data = await result.json();
      console.log(data);
      if (data.isLearned) {
        // const cardFaces = button.closest('.card').querySelectorAll('.card__face');
        // checkMarkElem.innerHTML = '<i class = "gg-check-o" />';
        e.target.parentNode.parentNode.parentNode.remove();
      } else {
        // const cardFaces = button.closest('.card').querySelectorAll('.card__face');
        // cardFaces.forEach((face) => face.classList.remove('card__face--learned'));
        // checkMarkElem.innerHTML = '';
      }
    }
  });
});

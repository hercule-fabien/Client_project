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
      const cardsContainer = document.querySelector('.cards-container');
      const { id } = e.target;
      // const buttonDel = document.getElementById(`${id}`);
      // const checkMarkElem = button.parentNode.parentNode.querySelector('.checkmark-container');
      const result = await fetch(`/categories/cards/${id}`, {
        method: 'PATCH',
      });
      const data = await result.json();
      if (data.isLearned) {
        e.target.parentNode.parentNode.parentNode.remove();
        if (cardsContainer.childElementCount === 0) {
          cardsContainer.innerHTML = `<h3>Все карточки изучены</h3>
            <button type="button" class="btn btn-outline-secondary">Изучать снова</button>`;
        }
      }
    }
  });
});

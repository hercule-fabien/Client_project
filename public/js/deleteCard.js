const cardDiv = document.querySelector('.deleteDiv');

cardDiv.addEventListener('click', async (e) => {
  if (e.target.classList.contains('btn-delete')) {
    const response = await fetch(`/cards/${e.target.id}`, {
      method: 'DELETE',
    });
    console.log('response:', response);

    e.target.parentNode.parentNode.parentNode.remove();
  }
});

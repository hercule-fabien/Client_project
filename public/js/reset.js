document.addEventListener('DOMContentLoaded', () => {
  const resetBtn = document.querySelector('.resetBtn');
  resetBtn.addEventListener('click', async () => {
    const catId = resetBtn.id;
    const result = await fetch(`/reset/${catId}`);
    const data = await result.json();

    if (data.message === 'success') {
      window.location.reload();
    } else {
      alert('An error occurred while resetting the cards.');
    }
  });
});

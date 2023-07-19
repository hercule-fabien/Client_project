const form = document.querySelector('#regForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  if (!res.login || !res.password || !res.email) {
    alert('Введите свои данные!');
  } else {
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(res),
      });
      const result = await response.json();
      console.log('result:', result);
      const msg = document.querySelector('.regMsg');
      if (result.err) {
        msg.innerText = result.err;
        msg.style.color = 'red';
      } else {
        window.location.href = '/home';
      }
    } catch (error) {
      alert('Something went wrong again!!! :(', error);
    }
  }
});

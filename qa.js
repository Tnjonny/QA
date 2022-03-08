const questions = document.querySelectorAll('.question');

questions.forEach(function (e) {
  const btn = e.querySelector('.question-btn');

  btn.addEventListener('click', function () {
    e.classList.toggle('show-text');
  });
});

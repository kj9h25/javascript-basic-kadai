const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
  const text = document.getElementById('text');
  setTimeout(function () {
    text.innerHTML = ('ボタンをクリックしました');
  }, 2000);
});

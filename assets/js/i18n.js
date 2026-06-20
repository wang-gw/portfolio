(function () {
  var KEY = 'portfolio-lang';
  var html = document.documentElement;
  var body = document.body;
  var stored = localStorage.getItem(KEY);
  var initial = stored === 'en' ? 'en' : 'ko';

  function applyLang(lang) {
    body.classList.remove('lang-ko', 'lang-en');
    body.classList.add('lang-' + lang);
    html.setAttribute('lang', lang);
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  applyLang(initial);

  var btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var next = body.classList.contains('lang-ko') ? 'en' : 'ko';
      applyLang(next);
    });
  }
})();

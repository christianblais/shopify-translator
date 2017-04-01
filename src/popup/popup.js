function updateCurrentLang() {
  var currentLang = document.querySelector('[data-current-lang]');

  chrome.storage.sync.get('language', function(options) {
    if (options.language) {
      currentLang.innerHTML = options.language;
    } else {
      currentLang.innerHTML = 'default';
    }
  });
};

document.querySelectorAll('a[data-lang]').forEach(function(element) {
  element.addEventListener('click', function(event) {
    chrome.storage.sync.set({'language': event.target.getAttribute('data-lang')}, function() {
      updateCurrentLang();
    });
  });
});

updateCurrentLang();

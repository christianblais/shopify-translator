function translate_object(language, dom, selectors, variables) {
  for (var selector in selectors) {
    var value = selectors[selector];
    var scope = null;

    if (selector.match(/\[[a-z_-]*\]/)) {
      scope = selector.slice(1, -1);
    }

    dom.querySelectorAll(selector).forEach(function(element) {
      if (scope) { variables[scope] = element.getAttribute(scope); }

      if (element.id !== '') {
        var sanitized_sel = selector.replace(/#|\./g, '').replace(/\s+/g, '-');
        var sanitized_uid = element.id.replace(/#/g, '').replace(/\s+/g, '-');

        variables[sanitized_sel] = sanitized_uid;
      }

      if (typeof value === 'object') {
        translate_object(language, element, value, variables);
      } else {
        translate_string(language, element, value, variables);
      }
    });
  }
}

function translate_string(language, element, key, variables) {
  var parts = key.split('.');
  var value = LANGUAGES[language];

  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];

    if (part.indexOf('$text') === 0) {
      part = element.textContent.toLowerCase().trim().replace(/[^\x00-\x7F]/g, '').replace(/\s+/g, '-');
    } else if (part.indexOf('$') === 0) {
      part = variables[part.slice(1)];
    }

    value = value[part];

    if (typeof value === 'undefined') { return; }
  }

  if (element.tagName === 'INPUT') {
    element.placeholder = value;
  } else {
    element.textContent = value;
  }
}

chrome.storage.sync.get('language', function(options) {
  if (!options.language) { return; }

  document.addEventListener("DOMSubtreeModified", function(event) {
    if (typeof event.target.querySelector === "function") {
      translate_object(options.language, event.target, TREE, {});
    }
  }, false);

  translate_object(options.language, document.body, TREE, {});
});

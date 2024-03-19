---
layout:
---
(function() {
  var redirect = {
  {% for post in site.posts %}{% if post.short
  %}"{{ post.short }}" : "{{ post.url }}",{% endif %}{% endfor %}
  }[window.location.hash.slice(1)];

  if(redirect) {
    window.location = redirect;
  } else {
    console.warn("unknown short url", window.location.hash);
  }
})();

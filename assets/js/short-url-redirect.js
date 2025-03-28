---
layout:
---
(function() {
  if(!window.location.hash) { return; }

  var redirect = {
  {% for post in site.posts %}{% if post.short
  %}{% for short in post.short %}"{{ short }}" : "{{ post.url }}",
  {% endfor %}{% endif %}{% endfor %}
  }[window.location.hash.slice(1)];

  if(redirect) {
    window.location = redirect;
  } else {
    console.warn("unknown short url", window.location.hash);
  }
})();

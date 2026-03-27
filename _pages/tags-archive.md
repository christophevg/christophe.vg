---
layout: archive
title: The World Tagged by Christophe VG
permalink: /tags/
info:
  3dprinting: Many years ago I started out printing and building my own 3D printer. Over the years I'm a very happy Zortrax M200 owner and 3D printing has become a commodity - it is really a tool for me, not a focus by itself.
  arduino: Although I started with its fundamental core, the AVR-based microcontrollers, Arduino and I cross paths now and then.
  airfryer: Where have you been all my life? ;-)
  avr: The AVR architecture, by Atmel, was the first embedded platform I encountered when I entered the hardware space. A lot of my first steps involved this series of MCUs.
  fun: All work and no play makes Christophe a dull boy.
  airbrushing: I love airbrushing because it allows me to achieve beautiful results using various techniques, even though I'm not the best painter.
  lasercutting: Maybe the most versatile making tool a maker can own, my Beambox Pro laser cutter is one of the most used tools in my shop.
  professional: Although most of my customers require some form of professional discretion about their projects. Sometimes I can share some abstract information.
  robot: I confess, I'm a sucker for robots. Step by step I'm moving closer to the point where I'm able to design and build my very own robot.
  thing: I don't keep a blog, am not really active on so called social networks, but I sometimes feel the need to write down my very personal opinion about _things_.
  veggie: For no specific reason, by the end of 2019, I got intruiged by vegetarian cooking. For no other reason it deserves its own tag ;-)
---

Besides the top-level categories, I also try to add tags to the pages on this site. They tend to deal with cross-cutting concerns ;-)

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tags = site_tags | split: ',' | sort %}

<div class="tag-filter">
  <input type="text" id="tag-search" placeholder="Filter tags..." class="tag-search-input">
</div>

<div id="tags">
  <div class="tag-cloud">
    {% for tag in tags %}
      {% assign count = site.tags[tag].size %}
      <a href="#{{ tag | cgi_escape }}" class="tag-cloud-item" data-tag="{{ tag | downcase }}" data-count="{{ count }}">
        {{ tag }}
        <span class="tag-count">{{ count }}</span>
      </a>
    {% endfor %}
  </div>

  {% for tag in tags %}
  <div class="tag-section" data-tag="{{ tag | downcase }}">
    <h2 id="{{ tag | cgi_escape }}">{{ tag }}</h2>
    {% if page.info[tag] %}{{ page.info[tag] | markdownify }}{% endif %}
    <ul class="posts">
      {% assign sorted_posts = site.tags[tag] | sort: "title" %}
      {% for post in sorted_posts %}{% if post.title != null %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endif %}{% endfor %}
    </ul>
  </div>
  {% endfor %}
</div>

<script>
(function() {
  var searchInput = document.getElementById('tag-search');
  var tagCloudItems = document.querySelectorAll('.tag-cloud-item');
  var tagSections = document.querySelectorAll('.tag-section');

  function filterTags(query) {
    query = query.toLowerCase().trim();

    tagCloudItems.forEach(function(item) {
      var tagName = item.getAttribute('data-tag');
      var matches = query === '' || tagName.indexOf(query) !== -1;
      item.style.display = matches ? '' : 'none';
    });

    tagSections.forEach(function(section) {
      var tagName = section.getAttribute('data-tag');
      var matches = query === '' || tagName.indexOf(query) !== -1;
      section.style.display = matches ? '' : 'none';
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      filterTags(e.target.value);
    });
  }
})();
</script>
---
layout: archive
title: The World Tagged According to Christophe VG
permalink: /tags/
---

Besides the top-level categories, I also try to add tags to the pages on this site. They tend to have cross-cutting concerns ;-)

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tags = site_tags | split: ',' | sort %}
 
<div id="tags">
  <strong>
    <i class="fa fa-fw fa-tags" aria-hidden="true"></i>
    {{ site.data.ui-text[site.locale].tags_label | default: "Tags:" }}
  </strong>
  <ul class="tag-box inline">
  {% for tag in tags %}
    <li>
      <a href="#{{ tag | cgi_escape }}">
        {{ tag }}
        <span>{{ site.tags[tag].size }}</span>
      </a>
    </li>
  {% endfor %}
  </ul>
 
  {% for tag in tags %}
  <h2 id="{{ tag | cgi_escape }}">{{ tag }}</h2>
  <ul class="posts">
    {% for post in site.tags[tag] %}{% if post.title != null %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}{% endfor %}
  </ul>
  {% endfor %}
</div>

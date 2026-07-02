---
layout: page
permalink: /posts/
title: Notes
description: Study notes, project logs, and life writing.
nav: true
nav_order: 4
---

{% assign sorted_posts = site.posts | sort: "date" | reverse %}

<div class="post-list">
  {% for post in sorted_posts %}
    <article class="post-preview">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</p>
      {% if post.description %}
        <p>{{ post.description }}</p>
      {% else %}
        <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
      {% endif %}
    </article>
  {% endfor %}
</div>

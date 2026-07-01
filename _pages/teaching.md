---
layout: page
permalink: /courses/
title: courses
description: Coursework and learning record.
nav: true
nav_order: 6
---

{% assign teachings = site.teachings | sort: "importance" %}

<div class="projects">
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in teachings %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>

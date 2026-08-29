---
layout: archive
title: "Curriculum Vitae"
permalink: /cv-viewer/
author_profile: true
---

<div class="document-viewer">
  <div class="document-viewer__header">
    <p class="document-viewer__eyebrow">Curriculum Vitae</p>
    <h2>Servas Adolph Tarimo</h2>
    <p>Read the current academic CV below.</p>
  </div>
  <div class="document-page-list" aria-label="Curriculum vitae pages">
    {% for page in (1..13) %}
      <figure class="document-page">
        <img src="/images/documents/cv/page-{{ page }}.webp" alt="Curriculum vitae page {{ page }}" loading="lazy">
        <figcaption>Page {{ page }} of 13</figcaption>
      </figure>
    {% endfor %}
  </div>
</div>

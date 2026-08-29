---
layout: archive
title: "MSc Thesis"
permalink: /thesis-viewer/
author_profile: true
---

<div class="document-viewer">
  <div class="document-viewer__header">
    <p class="document-viewer__eyebrow">MSc Thesis</p>
    <h2>WBC YOLO-ViT</h2>
    <p>Read the MSc thesis below.</p>
  </div>
  <div class="document-page-list" aria-label="MSc thesis pages">
    {% for page in (1..66) %}
      <figure class="document-page">
        <img src="/images/documents/thesis/page-{{ page }}.webp" alt="MSc thesis page {{ page }}" loading="lazy">
        <figcaption>Page {{ page }} of 66</figcaption>
      </figure>
    {% endfor %}
  </div>
</div>

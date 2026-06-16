---
layout: page
permalink: /publications/
title: Publications
description: 
nav: true
nav_order: 2
---
**Top-tier conferences**: CVPR, ICCV, ECCV, NeurIPS (NIPS), ICML, and ICLR are considered as high prestigious and top-tier conferences, which deem to have larger impacts than most SCI journals. According to Google scholar metrics, all these conferences are listed in the top 100 publications across all academic fields. Out of them, CVPR is the 2nd rank (Nature and Science are the 1st and 4th ranked respectively) among all academic fields, e.g., In terms of acceptance rate, oral presentations are about less than 4% and poster presentations about 20%, i.e., highly competitive. Additionally, ICRA and IROS are considered top-tier conferences in the field of Robotics. 

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<!-- In Review: papers marked with status={in-review} in _bibliography/papers.bib -->
{% capture in_review %}{% bibliography --query @*[status=in-review] --group_by none %}{% endcapture %}
{% if in_review contains '<li' %}
<div class="publications">
<h2 class="bibliography">In Review</h2>
{{ in_review }}
</div>
{% endif %}

<div class="publications">

{% bibliography --query @*[status!=in-review] %}

</div>

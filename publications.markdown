---
layout: page
title: Publications
permalink: /publications/
bibliography: _bibliography/publications.bib
years: [2026, 2025, 2024, 2023, 2022, 2020, 2019]
---

{% for y in page.years %}
## {{ y }}
{% bibliography --file publications --query @*[year={{ y }}]* %}
{% endfor %}

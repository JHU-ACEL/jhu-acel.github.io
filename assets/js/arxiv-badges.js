// ArXiv badge mapping - manually maintained for now
const arxivMap = {
  'BanerjeeCauligiEtAl2025': '2505.05588',
  'BridenGurgaEtAl2025': '2501.00930',
  'BridenJohnsonEtAl2025': '2501.00915',
  'EchigoCauligiEtAl2025a': '2412.06816',
  'EchigoCauligiEtAl2024': '2404.16269',
  'SzatmariCauligi2025': '2404.02289',
  'LozanoCuadraEtAl2025': '2510.20436',
  'BridenChoiEtAl2025': '2312.14336',
  'BridenGurgaEtAl2024b': '2311.05135',
  'AthaSwanEtAl2024': '2405.01673',
  'CauligiSwanEtAl2023': '2301.04630',
  'CauligiCulbertsonEtAl2022': '2107.08143',
  'CauligiChenEtAl2020': '2009.09151',
  'CauligiCulbertsonEtAl2020a': '2004.03736',
  'BonalliBylardEtAl2019': '1905.07654',
  'BonalliCauligiEtAl2019': '1903.00155'
};

function addArxivBadges() {
  // Find all bibliography entries
  const publications = document.querySelectorAll('.publication span[id]');

  publications.forEach(span => {
    const id = span.getAttribute('id');
    const arxivId = arxivMap[id];

    if (arxivId) {
      // Create the arXiv badge
      const arxivLink = document.createElement('a');
      arxivLink.href = `https://arxiv.org/abs/${arxivId}`;
      arxivLink.target = '_blank';

      const arxivImg = document.createElement('img');
      arxivImg.src = `https://img.shields.io/badge/arXiv-${arxivId}-B31B1B.svg`;
      arxivImg.alt = 'arXiv';
      arxivImg.style.marginLeft = '10px';
      arxivImg.style.verticalAlign = 'middle';

      arxivLink.appendChild(arxivImg);

      // Add the badge after the publication text
      span.appendChild(document.createTextNode(' '));
      span.appendChild(arxivLink);
    }
  });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', addArxivBadges);

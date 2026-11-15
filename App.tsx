// Canonical URL synchronization
const canonicalLink = document.querySelector('link[rel="canonical"]');

if (canonicalLink) {
  const baseUrl = 'https://jewels-sandy.vercel.app/';

  canonicalLink.setAttribute(
    'href',
    currentPage === 'home'
      ? baseUrl
      : `${baseUrl}${currentPage}`
  );
}

import '../css/style.css'
import { loadHeaderFooter } from './utils.js'
import './router.js'
import { fetchNews } from './newsAPI.js';

loadHeaderFooter();

async function renderNewsArticles() {
  const articlesContainer = document.querySelector('.articles-container');
  console.log(articlesContainer)
  if (!articlesContainer) return;

  const newsArticles = await fetchNews();

  if (newsArticles.length > 0) {
    console.log(newsArticles)
    // articlesContainer.innerHTML = newsArticles.map(article => ``)
  }
}

renderNewsArticles()
import { fetchNews } from "./newsAPI";
import { fetchTimeSeries } from "./forexAPI";
import { Chart } from "chart.js";

export async function renderNewsArticles() {
  const articlesContainer = document.querySelector('.articles-container');
  if (!articlesContainer) return;

  const newsArticles = await fetchNews();

  if (newsArticles.length > 0) {
    articlesContainer.innerHTML = newsArticles.map(article => `
        <article class = "news-card">
            <h3><a href="${article.url}" target="_blank"> ${article.title}</a></h3>
            <p>${article.description || 'No description available.'}</p>
        </article>
        `
    ).join('');
  } else {
    articlesContainer.innerHTML = '<p>No news articles found or an error occurred.</p>'
  }
}

export async function renderForexChart() {
  const chartContainer = document.querySelector('.forex-chart-container');
  const chartCanvas = document.getElementById('forexChart');
  if (!chartContainer || !chartCanvas) return;

  try {
    const historicalData = await fetchTimeSeries('USD', 'EUR', '2025-09-01');
    
    const dates = Object.keys(historicalData);
    const rates = dates.map(date => historicalData[date].EUR);

    new Chart(chartCanvas, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: 'USD to EUR',
          data: rates,
          borderColor: '#FF5722',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x:{
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Rate'
            }
          }
        }
      }
    });
    chartContainer.querySelector('p').style.display = 'none';
  } catch (error) {
    console.log(error)
    chartContainer.querySelector('p').textContent = 'Error loading chart data.';
  }
}
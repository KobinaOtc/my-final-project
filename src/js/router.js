import { loadTemplate, renderWithTemplate } from './utils.js';
import { views } from './views.js'

const routes = {
    '/': {
        title: 'Home',
        templatePath: views.home,
    },
    '/forms': {
        title: 'Forms',
        templatePath: views.forms,
    },
    '/about': {
        title: 'About',
        templatePath: views.about,
    },
    '/news': {
        title: 'News',
        templatePath: views.news,
    },
}

async function handleRouting() {
    const path = window.location.pathname;
    const currentRoute = routes[path] || routes['/'];

    document.title = currentRoute.title;

    const mainElement = document.getElementById('app-root');
    mainElement.innerHTML = '';
    
    const pageContent = await loadTemplate(currentRoute.templatePath);

    renderWithTemplate(pageContent, mainElement);
}

window.addEventListener('popstate', handleRouting);

document.addEventListener('click', e => {
    if (e.target.matches('[data-nav]')) {
        e.preventDefault();
        history.pushState({}, '', e.target.href);
        handleRouting();
    }
})

handleRouting();
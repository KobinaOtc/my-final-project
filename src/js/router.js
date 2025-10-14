import { renderWithTemplate } from './utils.js';
import { renderHome, renderForms, renderAbout } from './views.js'

const routes = {
    '/': {
        title: 'Home',
        render: renderHome,
    },
    '/forms': {
        title: 'Forms',
        render: renderForms,
    },
    '/about': {
        title: 'About',
        render: renderAbout,
    }
}

async function handleRouting() {
    const path = window.location.pathname;
    const currentRoute = routes[path] || routes['/'];

    document.title = currentRoute.title;

    const mainElement = document.getElementById('app-root');
    mainElement.innerHTML = '';
    
    const pageContent = await currentRoute.render();

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
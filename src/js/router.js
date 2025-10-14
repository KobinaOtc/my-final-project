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

function handleRouting() {
    const path = window.location.pathname;
    const currentRoute = routes[path] || routes['/'];

    document.getElementById('app-root').innerHTML = '';
    currentRoute.render();
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
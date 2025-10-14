import { loadTemplate } from "./utils";

export const renderHome = () => {
    return loadTemplate('../views/home.html');
}

export const renderForms = () => {
    return loadTemplate('../views/forms.html');
}

export const renderAbout = () => {
    return loadTemplate('../views/about.html');
}

export const renderNews = () => {
    return loadTemplate('../views/news.html')
}
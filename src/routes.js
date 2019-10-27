// This file sets up svelte-router-spa. Currently this library doesn't support custom 404 routes and defaults to looking for a /404.html to return if a route isn't found. For this reason this project scaffold includes a public/404.html page styled with bulma with a link to route to the main page of the app
import Home from './pages/Home.svelte';
import About from './pages/About.svelte';

export const routes = [
  {
    name: '/',
    component: Home,
  },
  {
    name: 'about',
    component: About
  }
]; 
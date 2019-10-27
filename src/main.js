// This is the main entry point for the app. It loads up all bulma styles for availability throught the app. You probably don't need to edit this file.
import './assets/bulma_styles.scss';
import App from './App.svelte';

export default new App({
  target: document.body
});
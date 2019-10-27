# Svelte App Project Starter

This repo serves as a frontend/static [Svelte](https://svelte.dev/) app project starter to quickly scaffold a new svelte app without worrying about how to configure add-ins and bundling. It also provides some app structure with lots of comments and README files. Get started immediately by running:  

1. `npx degit ejolly/create-svelte-app yourAppName` 
2. `cd yourAppName`
3. `npm install`
4. create a new [firebase project](https://firebase.google.com/) and copy the config settings into `firebase.js`
5. `npm run dev` and navigate to `localhost:5000` in your browser


## What's Included  

- [bulma](https://bulma.io/), [svelma](https://c0bra.github.io/svelma/), and [font-awesome](https://fontawesome.com/) for styling; font-awesome is added via CDN and is *not* bundled with the app via `npm`  
- [svelte-router-spa](https://github.com/jorgegorka/svelte-router) for client-side routing (there's not backend!)
- [firebase](https://firebase.google.com/) for managing data  
- [babel/core-js](https://babeljs.io/) configured for transpiling+polyfills for multi-browser support (including ES7 async/await)  
- [rollup](https://github.com/rollup/rollup) for project bundling, preconfigured with `postcss`, `babel`, and `core-js`
- basic settings for a nice development experience in [vscode](https://code.visualstudio.com/). Also recommended are the following vscode extensions:
  - [Svelte Language Support](https://marketplace.visualstudio.com/items?itemName=JamesBirtles.svelte-vscode)
  - [Svelte 3 snippets](https://marketplace.visualstudio.com/items?itemName=fivethree.vscode-svelte-snippets) 

## Project structure

- `src/pages` and `src/components`
  - Most of your changes and additions will likely happen within these file locations which are are for routes (e.g. mywebsite.com/about) and components within those routes (e.g. a navbar) respectively. 
- `firebase.js`
  - This sets up firebase and makes it available to the rest of the app
- `routes.js`
  - This is where you can tell the router about new pages and configure settings like route-guards (e.g. prevent routing unless a user is authenticated)
- `assets/`
  - This folder is for additional assets needed by the app and things you want to get bundled in by Svelte. Currently this just includes bulma styles but you could create additional `.css` files to here and import them in `main.js`. Otherwise you can handle global styling in `public/global.css` which does not get touched by Svelte and applies styles after bundling to `index.html`  
- `App.svelte` 
  - This is the root component of the app that tells the router to render each page it knows about and additionally adds a navbar component to each route. You'll want to change this to alter the overall look of the app
- `main.js`
  - This is the main entry-point of the app which imports and makes bulma available to any .svelte files and loads the root component. You probably don't need to edit this for most situations.
- `public/`
  - This is where rollup and the Svelte compiler will output files that can be served statically, specifically `bundle.js` and `bundle.css` along with their `.map` files. You typically don't need to edit these files unless you want to make additions or changes *outside* of Svelte (e.g. creating a `404.html` page)

## Notes, Issues, and References

- Remember that all styles and variables by default are *scoped* in Svelte, meaning they aren't available to other components. Checkout the [Svelte Docs](https://svelte.dev/docs) for how to share information between components (e.g. props, stores, and contexts). There are many ways to do this depending on your needs and use-cases.
- Currently `svelte-router-spa` does not allow you to create a component for a non-existent route (e.g. a catch-all if a user navigates to a location that doesn't exist). Instead it automatically looks for and tries to serve up a `404.html` file. Some static service providers like Netlify should offer a default page for this, but just in case, a styled one (using the bulma CDN) is included in this project with a link back to the home page of the app.
- [Font awesome icons searchable database](https://fontawesome.com/icons?d=gallery&q=save)
- [Svelma rendering issue with nested components](https://github.com/c0bra/svelma/issues/32) 
- Useful Svelte refs
  - [Dynamically changing classes](https://svelte.dev/tutorial/classes)
  - [Make global reactive variables available throughout an app](https://svelte.dev/tutorial/writable-stores)
  - [Passing data from top-to-bottom in nested components](https://svelte.dev/tutorial/declaring-props)

## Notes on Svelte routers

There doesn't seem to an official frontend/single-page-app svelte router that's emerged quite yet, but there are bunch of great community projects each with their strengths and weaknesses. Here are some I've tried/seen and my take:  
1. [Svelte Router SPA](https://github.com/jorgegorka/svelte-router) (*used in this scaffold*)
   - Straightforward to use, compatible with specifying route paths using plain `<a href>` tags but doesn't currently expose reactive variables for the current route unless you use custom nested `Route` layouts. Offers redirects, route guards, nested routes, and layout components out of the box.
2. [Svero](https://github.com/kazzkiq/svero)
   - Relies on custom `<Route/>` and `<Link/>` (the latter wraps `<a>` tags) components. Wasn't as intuitive personally and didn't explore much.
3. [Svelte SPA Router](https://github.com/ItalyPaleAle/svelte-spa-router)  
   - Very lightweight and similar in offerings to 1. with the addition of reactive current route information handled using Svelte stores. Lacks route-guards, redirects, and layouts. Had issues getting it to work with Svelte `== 3.12` (the latest version as of 10/19).
4. [Curi](https://curi.js.org/)  
   - General purpose SPA router for React, Vue, and Svelte. My personal favorite with lots of flexibility and rich features out of the box (e.g. fully customizable route hooks and side-effects), but a bit more verbose to get started with. Could only get it working with projects using Svelte `<=3.6`.
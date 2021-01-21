# Svelte App Project Starter (w/ Firebase)
  
This repo serves as a frontend/static Svelte app project starter to quickly scaffold a new svelte app without worrying about how to configure add-ins and bundling. 

- [Quick start](#quick-start)
- [What's Included and Configured](#whats-included-and-configured)
- [VSCode Configuration](#vscode-configuration)
- [Deploying](#deploying)
- [Variants](#variants)
- [Notes](#notes)

## Quick start

1. `npx degit ejolly/create-svelte-app yourAppName` 
2. `cd yourAppName`
3. `npm install`
4. `npm run dev` and navigate to `localhost:5000` in your browser

## What's Included and Configured

- [Firebase](https://firebase.google.com) for a "serverless" real-time database
- [Tailwindcss](https://tailwindcss.com/) for styling, with [purging](https://github.com/FullHuman/purgecss) of unused styles for production
- [ESlint](https://eslint.org/) for linting, based on the [airbnb config](https://www.npmjs.com/package/eslint-config-airbnb)
- [Prettier](https://prettier.io/) for formatting configured to work with svelte
- [Husky](https://github.com/typicode/husky) to auto-check styles pre-commit
- A special global `DEV` variable available for use anywhere in the app (no `import` required) that resolves to `true` when built and served/deployed for production (server launched with `npm run build && yourServer public`) and `false` when built for development (server launched with `npm run dev`).
  - This can be super handy when you want to inject some debug behavior into your app while you're working, but not in production without having to read/load configuration variables and files.
  - Just write the code once and wrap it in a `if (DEV){}` block to run only during development
  - `DEV` works because of `@rollup/plugin-replace` which literally does a string replacement based upon how rollup was initialized. This means you can't "react" or "observe" this variable. It's injected when the app is compiled.

## VSCode Configuration

If you use the recommended extensions in this repo then you should get the following features:
- live error-checking as you type
- auto-formatting on save
- svelte intellisense
- tailwindcss class name intellisense including for `@apply` directive
- tailwincss class name sorting via [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)

## Deploying

A fast way to go live is to hook up your github repo with Netlify:

1. Sign-up/in on [netlify](https://www.netlify.com/) with your github account
2. Create a new project based on the github repo you want to deploy
3. For the build command use: `npm run build`
4. For the folder to serve use `public`

Now any new pushes to your `master` branch will automatically update live!


## Variants

The `master` branch of this repo serves as the *Base* configuration for a few other scaffolds. Feel free to submit your own template after forking from `master`.

- [Base](https://github.com/ejolly/create-svelte-app)  
- [Base + NeDB](https://github.com/ejolly/create-svelte-app/tree/nedb)
- [Version 1](https://github.com/ejolly/create-svelte-app/tree/v1) (*this is the only variant that does not build on top of Base:* bulma, svelma, font-awesome, svelte-router-spa, firebase, babel/core-js)

---

## Notes

This was originally based off of [sveltejs/template@431bd4](https://github.com/sveltejs/template/commit/431bd4d58e59b46ebfa1f4fc2c1ab55853fc1521)
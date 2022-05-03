# Deploying Next.js App to Firebase Functions

> This is a simple example of how to deploy Next.js to Firebase. (Using Firebase hosting and functions)

## Requirements

- Firebase in Blaze plan
- Create a Firebase project with hosting enabled

## Steps to setup

- Install project dependencies `npm i`
- Create file [.env](.env) with `NODE_ENV`
- Create file [function.js](function.js)
- Configure properties `main` and `deploy*` in [package.json](package.json)
- Install firebase dependencies `npm i firebase-admin firebase-functions` and `npm i -g firebase-tools`
- Configure `hosting.site`, `hosting.rewrites` and `functions` in [firebase.json](firebase.json)
- Set up firebase with follow instructions:

```sh
firebase login
firebase init
# Which Firebase features do you want to set up for this directory?
# > Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
# Please select an option: Use an existing project
# Select a default Firebase project for this directory: your-project-name
# What do you want to use as your public directory? public
# Configure as a single-page app (rewrite all urls to /index.html)? No
# Set up automatic builds and deploys with GitHub? No
```

- Remove files `public/index.html` and `404.html` created by firebase setup
- Run `npm run deploy` to deploy (Firebase hosting and functions)
- Do not forget to set Role `Cloud Functions Invoker` for Principal `allUsers` in the function exported in [function.js](function.js)
- Access your deploy with `https://<SITE-NAME>.web.app/`

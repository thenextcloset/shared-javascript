This repository contains Javascript that is shared by the The Next Closet web app and the native app.

In order to publish an NPM package, you need to have an NPM account
* Sign up [here](https://www.npmjs.com/signup).
* Once you've signed up login from the command line using:  
```$ npm login ```

To publish:

1. Bump version in package.json
2. Run yarn build
3. Run npm publish

To link the NPM package locally (without publishing):

1. Run yarn link
2. Kill webpack dev server in the directory where you want to use the package
3. Go to the directory where you want to use the package. Run yarn link @thenextcloset/shared-javascript
4. Run yarn install
5. When done using it unlink the package by running yarn unlink @thenextcloset/shared-javascript
6. Run yarn install --force

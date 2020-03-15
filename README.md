This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## NOTE
An important distinction between this front-end and the RPS is the reactive ability and also overall implementation
Password has been bcrypted and sent over the network. Since both Front-end, and backend communicate through axios, it is possible to send hashes over it without interception.
The way authentication works between the front-end and the back-end is exactly how passport.js does it. I did not have passport.js when I was developing this (I was in flight and I did not have internet), so I just wrote the basic implementation for it. In no way is it meant to replace the original APi, nor am I suggesting that it is effectively same. It just has been coded to work in the same basic principle.

**The authentication password and username is both 'advait' (case-sensitive)**
The React app communicates through two end-points (both endpoints are meant for different jobs.)
/sendAll is to send the data to the front-end from the back-end
/frontendpoint is to authenticate

**As a user you will not have to access them, they are meant to be mapped on the backend**

The entire application is run on **PORT 3000**

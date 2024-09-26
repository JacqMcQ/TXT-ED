# JATE (Just Another Text Editor)

## Description
JATE is a Progressive Web Application (PWA) that allows users to edit text both online and offline. It is designed with an intuitive interface and implements service workers to cache assets for offline use. JATE uses IndexedDB for data persistence, ensuring that text can be saved and accessed locally, even when the user is disconnected from the internet.

## Table of Contents

[Deployed Application](#deployed-application)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Build and Deployment](#build-and-deployment)
- [Contributing](#contributing)
- [License](#license)

## Deployed Application

you can access the deployed application and download here: https://txt-ed.onrender.com/
## Installation

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 20.15.1 or higher recommended)
- npm (comes with Node.js)
- A MongoDB instance (if applicable)

### Steps

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd JATE

2. **Install the dependencies:**

```bash
 npm install
 cd client
 npm install
 cd ../server
 npm install
```

3. **Build the application:Run the following to build the client application:**

```bash
npm run build
```
### Usage

**Local Development**

to start the app locally:

1. **Development build: From the root directory, run:**

```bash
npm run start:dev
```

This will build the client files and start the Express server.

2. **Production build: From the root directory, run:**

```bash
npm start
```

Your application will be served on http://localhost:3000.

### Accessing the application

Once the server is running, visit http://localhost:3000 in your web browser to use the text editor.

### Features

- Offline functionality: JATE caches assets and saves text using service workers and IndexedDB, making it accessible even without an internet connection.

-PWA: This app is installable on mobile devices and desktops.

-Code Mirror integration: Enhanced text editing experience with syntax highlighting.

### Technologies

**-Node.js:** Backend runtime environment
**-Express.js:** Web server framework for Node.js
**-Webpack:** Bundling tool for JavaScript, HTML, and CSS
**-Workbox:** Service worker libraries for caching assets
**-IndexedDB:** Client-side database for persistent storage
**-Babel:** JavaScript transpiler for using modern JS features
**-HTMLWebpackPlugin:** Generates the HTML file for the client
**-PWA Manifest:** Enables installability as a PWA
**-Service Workers:** For offline capability and caching

### Build and Deployment

**Building the App**

To create a production build:

1. **Run the following command to generate the bundled assets:**

```bash
npm run build
```
**Deploying to Render**

1. **Configure the Build Command:** In your Render dashboard, set the build command to:

npm install && cd client && npm run build
(note I did add webpack client in my build but this should not be necessary if already built in your package json)

2. **Set the Start Command:** Make sure the start command in Render is set to:

cd client && npm run build && cd ../server && node server.js

3. **Node Environment:** Ensure the PORT environment variable is set to dynamically bind the app to a Render-assigned port:

const PORT = process.env.PORT || 3000;

### Contributing

1. Fork the repo and create your branch from main.

2. Commit your changes and submit a pull request.

3. Please include detailed commit messages and documentation.

### License

This project is licensed under the MIT License.

### Credits

The Week 19 PWA work files from UT Austin Bootcamp were referenced when completing this application. I was provided with starter code that I cloned down and modified in order to successfully deploy as a PWA application on Render Dashboard services. 

ChatGPT was leveraged for assistance with the creation of a render.yaml in order to deply via Render. However, I ended up modifying directly in the Render settings to troubleshoot more readily. AI was also used in order to troubleshoot critical download issues form the json plugin files mainly seen with Babel and Workbox. These were all updated to comply with the lattest versions and prevent any errors when buiding. Render 

Render was used for troubleshooting build fails:
 Accessed 9/24-9/26: 
 
 https://community.render.com/t/build-failed-despite-stating-correct-start-command/15096 

Error on Render: 

// Error: ENOENT: no such file or directory, stat '/opt/render/project/src/client/dist/index.html'//

Render community accessed on 9/25 and 9/26 to assist with troubleshooting:

https://community.render.com/t/i-have-a-next-error-error-enoent-no-such-file-or-directory-stat-opt-render-project-src-client-build-index-html/3990 

Accessed on 9/22: https://webpack.js.org/guides/progressive-web-application/






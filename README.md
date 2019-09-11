# 2019-electron-webpack-react-starter
2019 - Stater for using Webpack HMR and React HMR with Electron.

This is a barebones blueprint for developing Electron applications with Webpack for Hot Module Reloading, and Babel for transpiling React code.

Notes:

- Currently configured to use Webpack with the renderer process only.
- Updating Electron's main process does not trigger HMR.

Usage:

```
git clone https://github.com/AlexanderAllen/2019-electron-webpack-react-starter.git
cd 2019-electron-webpack-react-starter
yarn install
yarn dev
```

# 2019-electron-webpack-react-starter
2019 - Stater for using Webpack HMR and React HMR with Electron.

This is a barebones blueprint for developing Electron applications with Webpack for Hot Module Reloading, and Babel for transpiling React code.

It includes configuration for debugging with Visual Studio Code.

### Notes:

- Currently configured to use Webpack with the renderer process only.
- Updating Electron's main process does not trigger HMR.

### Usage:

```
git clone https://github.com/AlexanderAllen/2019-electron-webpack-react-starter.git
cd 2019-electron-webpack-react-starter
yarn install
yarn dev
```

### Breakpoints on initial load

Visual Studio Breakpoints are not hit on initial application render.
Refreshing the Electron application (`Ctrl + R`) will cause breakpoints to be hit.
Alternatively, use the `debugger;` statement on the Electron renderer entry point.

Setting `debugger` on your renderer's `index.js` seems to guarantee that all Visual Studio Code breakpoints are hit on initial render.


const {app} = require("electron");
const {BrowserWindow} = require("electron");

app.on("ready", () => {
  var mainWindow = new BrowserWindow({
    width: 1200,
    height: 720
  })
  mainWindow.loadURL('file://' + __dirname + 'app/index.html');
})
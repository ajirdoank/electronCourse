var electron = require('electron');
var browserWindow = electron.BrowserWindow;
var app = electron.app;

app.on('ready', function(){
  var appWindow;
  appWindow = new browserWindow();
  appWindow.loadURL('http://www.google.com');
})
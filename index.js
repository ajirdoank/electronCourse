var electron = require('electron');
var browserWindow = electron.BrowserWindow;
var app = electron.app;

app.on('ready', function(){
  var appWindow, infoWindow;
  appWindow = new browserWindow({
    show:false
  });
  appWindow.loadURL('http://www.google.com');

  infoWindow = new browserWindow({
    width:400,
    height:300,
    transparent:true,
    frame:false,
    show:false
  });
  infoWindow.loadURL('file://'+ __dirname + '/info.html');
  appWindow.once('ready-to-show',function(){
    appWindow.show();
    setTimeout(function(){
      infoWindow.show();
      setTimeout(function(){infoWindow.hide();},3000);
    },3000);
  });
})


var electron = require('electron');
var browserWindow = electron.BrowserWindow;
var app = electron.app;
var ipc = electron.ipcMain;


app.on('ready', function(){
  var appWindow, infoWindow;
  appWindow = new browserWindow({
    show:false
  });
  appWindow.loadURL('http://raybo.org');

  infoWindow = new browserWindow({ //infowindows
    width:400,
    height:300,
    transparent:true,
    frame:false,
    show:false
  });

  infoWindow.loadURL('file://'+ __dirname + '/info.html');

  appWindow.once('ready-to-show',function(){ //ready to show main app window
    appWindow.show();
    setTimeout(function(){
      infoWindow.show();
      // setTimeout(function(){infoWindow.hide();},3000);
    },1000);
  });

  ipc.on('closeInfoWindow', function(event){
    event.returnValue='';
    infoWindow.hide();
  }) //close window
});//app is ready


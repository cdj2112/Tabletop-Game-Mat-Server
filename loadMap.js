function addNewTools(clara){
  ['orbit', 'pan', 'zoom', 'home', 'fullscreen'].forEach(function(tool){
    clara.player.removeTool(tool);
  });
  clara.player.addTool({
    drag: function(){
      return {
        momentum:false,
        handle: function(ev){
          var nav = clara._store.getNavigator();
          if(nav) nav.updateSphericalRotation({x:ev.deltaX, y:0});
        }
      }
    }
  },'azimuthRotate');
}

function loadMap(el, mapId){
  var clara = claraplayer(el);
  clara.sceneIO.fetchAndUse(mapId).then(function(){
    console.log('loaded');
    addNewTools(clara);
  });
  console.log(clara._store);
};

loadMap('player', '8b99b7f6-8be9-4863-9dcd-4e73fde661ea');

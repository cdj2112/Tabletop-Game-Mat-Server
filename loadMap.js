function addNewTools(clara){
  ['home', 'fullscreen'].forEach(function(tool){
    clara.player.removeTool(tool);
  });
  ['orbit', 'pan', 'zoom'].forEach(function(tool){
    clara.player.hideTool(tool);
  });
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

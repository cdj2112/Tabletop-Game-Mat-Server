function loadMap(el, mapId){
  var clara = claraplayer(el);
  clara.sceneIO.fetchAndUse(mapId).then(function(){
  });
};

loadMap('player', '8b99b7f6-8be9-4863-9dcd-4e73fde661ea');

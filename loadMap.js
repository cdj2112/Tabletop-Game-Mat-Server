function addNewTools(clara){
  ['home', 'fullscreen'].forEach(function(tool){
    clara.player.removeTool(tool);
  });
  ['orbit', 'pan', 'zoom'].forEach(function(tool){
    clara.player.hideTool(tool);
  });
  clara.player.addTool({
    click:function(ev){
      console.log(ev);
      var THREE = clara.deps.THREE;
      var bb = clara._store.getState().get('player').get('rect');
      var ndc = new THREE.Vector2(
        2*ev.clientX/bb.get('width')-1,
        -2*ev.clientY/bb.get('height')+1
      );
      var hits = clara._store.getTranslator().raycastSelect(ndc);
      console.log(hits);
      var planeHit = hits.find(function(hit){
        return hit.data[0].object.name==="Mat Floor";
      });
      var raw = planeHit.data[0].point;
      var coord = new THREE.Vector3(Math.round(raw.x),0,Math.round(raw.z));
      console.log(raw,coord);
      clara.scene.set({name:'Sphere', plug:'Transform', property:'translation'}, coord);
    }
  },'select');
}

function loadMap(el, mapId){
  var clara = claraplayer(el);
  clara.sceneIO.fetchAndUse(mapId).then(function(){
    console.log('loaded');
    addNewTools(clara);
  });
  console.log(clara._store);
};

var toolbar = document.getElementsByClassName('itemToolBar')[0];
pieceList.forEach(function(id, index){
  var imgBlock = document.createElement('img');
  imgBlock.className = "thumb";
  imgBlock.src = "https://clara.io/api/scenes/"+id+"/v2thumbnail";
  toolbar.appendChild(imgBlock);
});

loadMap('player', '8b99b7f6-8be9-4863-9dcd-4e73fde661ea');

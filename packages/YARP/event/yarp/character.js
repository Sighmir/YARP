'use strict';
/**
* @file Character events
*/

mp.events.add('createCharacter', (player, id, age, model, faceJson) => {
  let character = yarp.characters[id];
  if(character == null){
    character = new yarp.Character(id, player.socialClub, age, model, JSON.parse(faceJson));
    character.save();
    player.call('characterCreatedSuccessfully');
    player.call('showPlayerCharacters', [JSON.stringify(character.user.characters)]);
  } else {
    player.call('characterNameDuplicated');
  }
});

mp.events.add('changeCharacterSex', (player, sex) => {
  player.model = mp.joaat(sex);
});

mp.events.add('setCharacterIntoCreator', (player) => {
  player.position = {"x" : 152.5, "y" : -1001.25, "z" : -99.5};
  player.heading = 180;
});

mp.events.add('loadCharacter', (player,id) => {
  let character = yarp.characters[id];
  let lastLogin = character.lastLogin.split(" ");
  if (lastLogin[2]){
    player.notify(`Last connection from ~g~${lastLogin[0]}~w~ at ~g~${lastLogin[1]} ${lastLogin[2]}`);
  }
  character.updateLastLogin(player.ip);
  character.save();
  player.outputChatBox("!{green}Welcome to Sighmir's YARP Server.");
  player.model = character.model;
  player.name = character._id;
  player.position = character.position;
  player.heading = character.heading;
  player.health = character.health;
  player.armour = character.armour;
  for (let id in character.weapons){
    player.giveWeapon(mp.joaat(id), character.weapons[id]);
    player.call('equipWeapon', [JSON.stringify(yarp.weapons[id])]);
  }
  character.user.joinedGroup();
  character.joinedGroup();
  player.setVariable('PLAYER_WALLET', character.wallet);
  player.setVariable('PLAYER_BANK', character.bank);
  player.call('updatePlayerCustomSkin',[player,JSON.stringify(character.face), JSON.stringify(character.decoration)]);
});

setInterval(function(){
  mp.players.forEach((player, id) => {
    if ((player.position.x && player.position.y && player.position.z && player.health) != 0) {
      let character = yarp.characters[player.name];
      if (character) {
        character.position = player.position;
        character.heading = player.heading;
        character.save();
      }
    }
	});
},1000*yarp.variables["Save Interval"].value);

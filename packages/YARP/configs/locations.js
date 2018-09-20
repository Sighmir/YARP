'use strict';

let config = {};

// i = 1; i <= amount of stores
setTimeout(() => {
  let delayedConfig = {};
  yarp.markers.forEach((marker) => {
    if (marker.id.includes('7/11')) {
      delayedConfig[marker.id] = {
        price: 110000000,
          inventory: {
          'fries': {price: 5, amount: 100},
          'burger': {price: 10, amount: 100},
          'hotdog': {price: 15, amount: 100},
          'beer': {price: 5, amount: 100},
          'juice': {price: 10, amount: 100},
          'soda': {price: 15, amount: 100},
        },
      };
    }
  });

  // i = 1; i <= amount of ammunations
  yarp.markers.forEach((marker) => {
    if (marker.id.includes('Ammu-Nation')) {
      delayedConfig[marker.id] = {
        price: 220000000,
        inventory: {
          // Weapons
          'WEAPON_ADVANCEDRIFLE': {price: 8000, amount: 100},
          'WEAPON_ASSAULTRIFLE': {price: 7800, amount: 100},
          'WEAPON_BULLPUPRIFLE': {price: 7900, amount: 100},
          'WEAPON_CARBINERIFLE': {price: 8200, amount: 100},
          'WEAPON_COMPACTRIFLE': {price: 8300, amount: 100},
          'WEAPON_SPECIALCARBINE': {price: 9400, amount: 100},
          'WEAPON_APPISTOL': {price: 7000, amount: 100},
          'WEAPON_VINTAGEPISTOL': {price: 5000, amount: 100},
          'WEAPON_HEAVYPISTOL': {price: 6800, amount: 100},
          'WEAPON_SNSPISTOL': {price: 6400, amount: 100},
          'WEAPON_STUNGUN': {price: 2000, amount: 100},
          'WEAPON_REVOLVER': {price: 6200, amount: 100},
          'WEAPON_PISTOL50': {price: 6500, amount: 100},
          'WEAPON_PISTOL': {price: 5700, amount: 100},
          'WEAPON_MARKSMANPISTOL': {price: 7100, amount: 100},
          'WEAPON_FLAREGUN': {price: 1200, amount: 100},
          'WEAPON_COMBATPISTOL': {price: 6800, amount: 100},
          'WEAPON_ASSAULTSHOTGUN': {price: 8000, amount: 100},
          'WEAPON_MUSKET': {price: 5800, amount: 100},
          'WEAPON_DBSHOTGUN': {price: 7900, amount: 100},
          'WEAPON_PUMPSHOTGUN': {price: 9400, amount: 100},
          'WEAPON_SAWNOFFSHOTGUN': {price: 8300, amount: 100},
          'WEAPON_HEAVYSHOTGUN': {price: 9600, amount: 100},
          'WEAPON_BULLPUPSHOTGUN': {price: 9500, amount: 100},
          'WEAPON_AUTOSHOTGUN': {price: 9800, amount: 100},
          'WEAPON_ASSAULTSMG': {price: 8000, amount: 100},
          'WEAPON_MINISMG': {price: 6800, amount: 100},
          'WEAPON_GUSENBERG': {price: 9100, amount: 100},
          'WEAPON_SMG': {price: 7400, amount: 100},
          'WEAPON_MG': {price: 9800, amount: 100},
          'WEAPON_MICROSMG': {price: 6800, amount: 100},
          'WEAPON_MACHINEPISTOL': {price: 6800, amount: 100},
          'WEAPON_COMBATMG': {price: 7800, amount: 100},
          'WEAPON_COMBATPDW': {price: 8000, amount: 100},
          'WEAPON_BAT': {price: 120, amount: 100},
          'WEAPON_FLASHLIGHT': {price: 20, amount: 100},
          'WEAPON_GOLFCLUB': {price: 80, amount: 100},
          'WEAPON_HAMMER': {price: 40, amount: 100},
          'WEAPON_HATCHET': {price: 60, amount: 100},
          'WEAPON_BOTTLE': {price: 20, amount: 100},
          'WEAPON_CROWBAR': {price: 40, amount: 100},
          'WEAPON_KNIFE': {price: 30, amount: 100},
          'WEAPON_KNUCKLE': {price: 30, amount: 100},
          'WEAPON_MACHETE': {price: 75, amount: 100},
          'WEAPON_SWITCHBLADE': {price: 50, amount: 100},
          'WEAPON_NIGHTSTICK': {price: 100, amount: 100},
          'WEAPON_WRENCH': {price: 45, amount: 100},
          'WEAPON_HEAVYSNIPER': {price: 11000, amount: 100},
          'WEAPON_MARKSMANRIFLE': {price: 12000, amount: 100},
          'WEAPON_SNIPERRIFLE': {price: 10000, amount: 100},
          // Ammo
          'AMMO_ADVANCEDRIFLE': {price: 80, amount: 100},
          'AMMO_ASSAULTRIFLE': {price: 78, amount: 100},
          'AMMO_BULLPUPRIFLE': {price: 79, amount: 100},
          'AMMO_CARBINERIFLE': {price: 82, amount: 100},
          'AMMO_COMPACTRIFLE': {price: 83, amount: 100},
          'AMMO_SPECIALCARBINE': {price: 94, amount: 100},
          'AMMO_APPISTOL': {price: 70, amount: 100},
          'AMMO_VINTAGEPISTOL': {price: 50, amount: 100},
          'AMMO_HEAVYPISTOL': {price: 68, amount: 100},
          'AMMO_SNSPISTOL': {price: 64, amount: 100},
          'AMMO_STUNGUN': {price: 20, amount: 100},
          'AMMO_REVOLVER': {price: 62, amount: 100},
          'AMMO_PISTOL50': {price: 65, amount: 100},
          'AMMO_PISTOL': {price: 57, amount: 100},
          'AMMO_MARKSMANPISTOL': {price: 71, amount: 100},
          'AMMO_FLAREGUN': {price: 12, amount: 100},
          'AMMO_COMBATPISTOL': {price: 68, amount: 100},
          'AMMO_ASSAULTSHOTGUN': {price: 80, amount: 100},
          'AMMO_MUSKET': {price: 58, amount: 100},
          'AMMO_DBSHOTGUN': {price: 79, amount: 100},
          'AMMO_PUMPSHOTGUN': {price: 94, amount: 100},
          'AMMO_SAWNOFFSHOTGUN': {price: 83, amount: 100},
          'AMMO_HEAVYSHOTGUN': {price: 96, amount: 100},
          'AMMO_BULLPUPSHOTGUN': {price: 95, amount: 100},
          'AMMO_AUTOSHOTGUN': {price: 98, amount: 100},
          'AMMO_ASSAULTSMG': {price: 80, amount: 100},
          'AMMO_MINISMG': {price: 68, amount: 100},
          'AMMO_GUSENBERG': {price: 91, amount: 100},
          'AMMO_SMG': {price: 74, amount: 100},
          'AMMO_MG': {price: 98, amount: 100},
          'AMMO_MICROSMG': {price: 68, amount: 100},
          'AMMO_MACHINEPISTOL': {price: 68, amount: 100},
          'AMMO_COMBATMG': {price: 78, amount: 100},
          'AMMO_COMBATPDW': {price: 80, amount: 100},
          'AMMO_HEAVYSNIPER': {price: 110, amount: 100},
          'AMMO_MARKSMANRIFLE': {price: 120, amount: 100},
          'AMMO_SNIPERRIFLE': {price: 100, amount: 100},
        },
      };
    }
  });
  yarp.locations.config(delayedConfig);
}, 1000);

module.exports = config;

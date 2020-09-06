/*
 * @Project: FiveM Tools
 * @Author: Samuelds
 * @License: GNU General Public License v3.0
 * @Source: https://github.com/FivemTools/ft_core
*/

let _onSpawn = [];

/**
 * @description Add function to run on player spawn
 * @param callback
 * @constructor
 */
function OnPlayerSpawn(callback) {
  _onSpawn.push(callback);
}

/**
 * Event send by spawn manager resource
 */
RegisterServerEvent('playerSpawned');
AddEventHandler('playerSpawned', function () {
  _onSpawn.forEach(function (callback) {
    callback();
  });
});
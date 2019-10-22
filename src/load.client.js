//
// @Project: FivemTools
// @Author: Samuelds
// @License: GNU General Public License v3.0
// @Source: https://github.com/FivemTools/ft_core
//

let onReady = [];

/**
 * @description Add function to run on client ready
 * @param {function} callback
 * @return {void}
 */
function OnClientReady(callback) {
    onReady.push(callback);
}

const loadingClient = setInterval(function () {
    if (NetworkIsSessionStarted()) {
        clearInterval(loadingClient);
        onReady.forEach(function (callback) {
            callback();
        })
    }
}, 10);

// Event send by spawn manager
RegisterServerEvent('playerSpawned');
AddEventHandler('playerSpawned', function () {
    TriggerServerEvent('ft_core:playerSpawned');
});
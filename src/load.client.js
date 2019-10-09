//
// @Project: FivemTools
// @Author: Samuelds
// @License: GNU General Public License v3.0
// @Source: https://github.com/FivemTools/ft_core
//

let onReady = [];

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

//
//
//
RegisterServerEvent('playerSpawned');
AddEventHandler('playerSpawned', function () {
    TriggerServerEvent('ft_core:playerSpawned');
});
/**
 * @Project: FivemTools
 * @Author: Samuelds
 * @License: GNU General Public License v3.0
 * @Source: https://github.com/FivemTools/ft_core
 */

let _onSessionStarted = [];

/**
 * @description Add function to run on client ready
 * @param {function} callback
 * @return {void}
 */
function OnSessionStarted(callback) {
    _onSessionStarted.push(callback);
}

const _OnSessionStartedTimer = setInterval(function () {
    if (NetworkIsSessionStarted()) {
        clearInterval(_OnSessionStartedTimer);
        _onSessionStarted.forEach(function (callback) {
            callback();
        });
    }
}, 10);

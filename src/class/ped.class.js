/*
 * @Project: FivemTools
 * @Author: Samuelds
 * @License: GNU General Public License v3.0
 * @Source: https://github.com/FivemTools/ft_core
*/

/**
 * Creates a new Entity.
 * @example
 * let ped = new Ped();
 */
class Ped extends Entity {

    /**
     * @description Get ped id for player id
     * @param {number} playerId
     * @return {void}
     */
    GetPlayer(playerId) {
        this.id = GetPlayerPed(playerId);
    }

    /**
     * @description Set default component variation
     * @return {void}
     */
    SetDefaultComponentVariation() {
        SetPedDefaultComponentVariation(this.id);
    }

    /**
     * @description Get if ped play anim
     * @param {string} animDictionary
     * @param {string} animationName
     * @param {number} flag
     * @returns {boolean}
     * @constructor
     */
    IsPlayingAnim(animDictionary, animationName, flag = 3) {
        return IsEntityPlayingAnim(this.id, animDictionary, animationName, flag);
    }

    /**
     * @description Play animation on ped
     * @param {string} animDictionary
     * @param {string} animationName
     * @param {function} callback
     * @param {number} blendInSpeed
     * @param {number} blendOutSpeed
     * @param {number} duration
     * @param {number} flag
     * @param {number} playbackRate
     * @param {boolean} lockX
     * @param {boolean} lockY
     * @param {boolean} lockZ
     * @return {void}
     */
    TaskPlayAnim(animDictionary, animationName, duration = -1, flag = 0, callback, playbackRate = 0, blendInSpeed = 8.0, blendOutSpeed = 8.0, lockX = false, lockY = false, lockZ = false) {
        if (DoesAnimDictExist(animDictionary)) {
            RequestAnimDict(animDictionary);
            let self = this;
            let timer = setInterval(function () {
                if (HasAnimDictLoaded(animDictionary)) {
                    clearInterval(timer);
                    if (duration === -1 && flag === 0) {
                        duration = GetAnimDuration(animDictionary, animationName);
                        setTimeout(function () {
                            callback();
                        }, duration * 1000);
                    }
                    TaskPlayAnim(self.id, animDictionary, animationName, blendInSpeed, blendOutSpeed, duration, flag, playbackRate, lockX, lockY, lockZ);
                }
            }, 10);
        } else {
            console.log("Anim " + animDictionary + " not exist !");
        }
    }

    /**
     * @description Play animation on ped
     * @param {string} animDictionary
     * @param {string} animationName
     * @param {number} posX
     * @param {number} posY
     * @param {number} posZ
     * @param {number} rotX
     * @param {number} rotY
     * @param {number} rotZ
     * @param {number} duration
     * @param {number} flag
     * @param {function} callback
     * @param {number} speed
     * @param {number} speedMultiplier
     * @param {number} animTime
     * @constructor
     */
    TaskPlayAnimAdvanced(animDictionary, animationName, posX, posY, posZ, rotX, rotY, rotZ, duration = -1, flag = 0, callback, speed = 8.0, speedMultiplier = 8.0, animTime = 0) {
        if (DoesAnimDictExist(animDictionary)) {
            RequestAnimDict(animDictionary);
            let self = this;
            let timer = setInterval(function () {
                if (HasAnimDictLoaded(animDictionary)) {
                    clearInterval(timer);
                    if (duration === -1 && flag === 0) {
                        duration = GetAnimDuration(animDictionary, animationName);
                        setTimeout(function () {
                            callback();
                        }, duration * 1000);
                    }
                    TaskPlayAnimAdvanced(self.id, animDictionary, animationName, posX, posY, posZ, rotX, rotY, rotZ, speed, speedMultiplier, duration, flag, animTime);
                }
            }, 10);
        } else {
            console.log("Anim " + animDictionary + " not exist !");
        }
    }

    /**
     * @description Clear primary tasks
     */
    ClearPrimaryTasks() {
        ClearPedTasks(this.id);
    }

    /**
     * @description Clear secondary tasks
     */
    ClearSecondaryTasks() {
        ClearPedSecondaryTask(this.id);
    }

    /**
     * @description Clear all tasks
     */
    ClearAllTasks() {
        this.ClearPrimaryTasks();
        this.ClearSecondaryTasks();
    }

    /**
     *
     * @param {function} callback
     * @param {boolean} isNetwork
     * @param {boolean} thisScriptCheck
     * @constructor
     */
    Spawn(callback, isNetwork = false, thisScriptCheck = false) {
        if (IsModelAPed(this._model)) {
            let waiting = 0;
            let self = this;
            RequestModel(this._model);
            let timer = setInterval(function () {
                if (HasModelLoaded(self._model)) {
                    clearInterval(timer);
                    self.id = CreatePed(2, self._model, self._coords.x, self._coords.y, self._coords.z, self._heading, isNetwork, thisScriptCheck);
                    SetModelAsNoLongerNeeded(self._model);
                    callback(self.id);
                }

                if (waiting === 50) {
                    clearInterval(timer);
                    callback(false);
                }
                waiting++;
            }, 20);

        } else {
            callback(false);
        }
    }
}
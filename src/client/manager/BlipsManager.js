/*
 * @Project: FiveM Tools
 * @Author: Samuelds
 * @License: GNU General Public License v3.0
 * @Source: https://github.com/FivemTools/ft_core
*/

class BlipsManager {

    _blips = [];

    /**
     * @description *
     * @param {string} name
     * @param {Blip} blip
     */
    Add(name, blip) {
        this._blips[name] = blip;
    }

    /**
     * @description *
     * @param {string} name
     */
    Remove(name) {
        this._blips[name] = undefined;
    }

    /**
     * @description *
     * @param {string} name
     */
    Show(name) {
        this._blips[name].display = true;
    }

    /**
     * @description *
     * @param {string} name
     */
    Hide(name) {
        this._blips[name].display = false;
    }

    /**
     * @description *
     * @param {string} name
     */
    Get(name) {
        return this._blips[name];
    }

}
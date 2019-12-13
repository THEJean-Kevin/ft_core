/*
 * @Project: FiveM Tools
 * @Author: Samuelds
 * @License: GNU General Public License v3.0
 * @Source: https://github.com/FivemTools/ft_players
*/

function Enum(values) {
    if(values instanceof Array) {
        let object = {};
        let index = 0;
        values.forEach(element => {
            object[element] = index;
            index++;
        });
        return Object.freeze(object);
    } else {
        return Object.freeze(values);
    }
}
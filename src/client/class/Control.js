/*
 * @Project: FiveM Tools
 * @Author: Samuelds
 * @License: GNU General Public License v3.0
 * @Source: https://github.com/FivemTools/ft_core
*/

// class Control {
//
//     /**
//      * @descriptionheck Execute callback when control is pressed
//      * @param {Number} index input group (usually 0)
//      * @param {Number} control Control
//      * @param {Function} callback
//      * @returns {Boolean|Number} Return boolean if callback was not set or the id of callback
//      */
//     OnControlPressed(index, control, callback) {
//         if (callback) {
//             return setTick(() => {
//                 if (IsControlPressed(index, control)) {
//                     callback()
//                 }
//             })
//         } else {
//             return !!IsControlPressed(index, control)
//         }
//     }
//
//     /**
//      * @description clear the callback for OnControlPressed
//      * @param {Number} id
//      */
//     StopOnControlPressed(id) {
//         clearTick(id);
//     }
//
// }
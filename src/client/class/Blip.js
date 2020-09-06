/*
 * @Project: FiveM Tools
 * @Authors: Samuelds, THEJean_Kevin
 * @License: GNU General Public License v3.0
 * @Source: https://github.com/FivemTools/ft_players
*/

// https://docs.fivem.net/game-references/blips/
class Blip {

    /**
     * @description Create new blip for Coord
     * @param {Vector3} vector3 
     * @param {Object} data
     * @returns {Number} id
     */
    NewBlipForCoord(vector3, data) {
        this.id = AddBlipForCoord(vector3.x, vector3.y, vector3.z);
        this.updateData(data);
        return this.id;
    }

    /**
     * @description Create new blip for Areal
     * @param {Vector3} vector3 center of the area
     * @param {Number} width
     * @param {Number} height 
     * @param {Object} data
     * @returns {Number} id 
     */
    NewBlipForArea(vector3, width = 1, height = 1, data) {
        this.id = AddBlipForArea(vector3.x, vector3.y, vector3.z, width, height);
        this.updateData(data);
        return this.id;
    }

    /**
     * @description Create a blip for Enity
     * @param {Entity} entity 
     * @param {Object} data 
     * @returns {Number} id 
     */

    NewBlipForEntity(entity, data) {
        this.id = AddBlipForEntity(entity.id);
        this.updateData(data);
        return this.id;
    }

    /**
     * @description Create new blip for Radius
     * @param {Vector3} vector3 
     * @param {Number} radius 
     * @param {Object} data
     * @returns {Number} id  
     */
    NewBlipForRadius(vector3, radius = 1, data) {
        this.id = AddBlipForRadius(vector3.x, vector3.y, vector3.z, radius);
        this.updateData(data);
        return this.id;
    }

    /**
     * @description Create new blip for pickup
     * @param {number} pickup
     * @param {Object} data
     * @returns {Number} id  
     */
    NewBlipForPickup(pickup, data) {
        this.id = AddBlipForPickup(pickup);
        this.updateData(data);
        return this.id;
    }

    /**
     * @description Get the blip from an Entity
     * @param {Entity} entity
     */
    BlipFromEntity(entity) {
        return GetBlipFromEntity(entity.id);
    }

    /**
     * @description Gets the position of this blip
     * @returns {Vector3}
     */
    get coord() {
        return GetBlipInfoIdCoord(this.id);
    }

    /**
    * @description Set the position of this blip
    * @param {Vector3} vector3
    */
    set coord(vector3) {
        SetBlipCoords(this.id, vector3.x, vector3.y, vector3.z);
    }

    /**
     * @description Set the rotation of this on the map.
     * @param {Number} value
     */
    set rotation(value) {
        SetBlipRotation(this.id, value);
        this._rotation = value;
    }

    /**
     * @description Get the scale of this on the ma
     * @return {Number}
     */
    get scale() {
        return this._scale;
    }

    /**
     * @description Set the scale of this on the ma
     * @param {Number} size
     */
    set scale(size) {
        SetBlipScale(this.id, size);
        this._scale = taille;
    }

    /**
     * @description Gets the type of this
     * @return {Number}
     */
    get type() {
        return GetBlipInfoIdType(this.id);
    }

    /**
     * @description Gets the alpha of this on the map.
     * @return {Number}
     */
    get alpha() {
        return GetBlipAlpha(this.id);
    }

    /**
     * @description Sets the alpha of this on the map.
     * @param {Number} value
     */
    set alpha(value) {
        SetBlipAlpha(this.id, value);
    }

    /**
     * @description Turns on the "cone view" that are used for guards for example. Not sure what the values for priority do.
     * @param {Number} value Possible values : 9, 7, 6, 5, 3, 2
     * 
     */
    set priority(value) {
        SetBlipPriority(this.id, value);
    }

    /**
     * @description Sets this label to the given number.
     * @param {Number} value
     */
    set numberLabel(value) {
        ShowNumberOnBlip(this.id, value);
    }

    /**
     * @description Removes the number label for this blip
     */
    RemoveNumberLabel() {
        HideNumberOnBlip(this.id);
    }

    /**
     * @description Gets the color of this
     * @return {Number}
     */
    get color() {
        return GetBlipColour(this.id);
    }

    /**
     * @description Set the color of this
     * @param {Number} value https://runtime.fivem.net/doc/natives/#_0x03D7FB09E75D6B7E
     */
    set color(value) {
        SetBlipColour(this.id, value);
    }

    /**
     * @description Gets the sprite of this
     * @return {Number}
     */
    get sprite() {
        return GetBlipSprite(this.id);
    }

    /**
     * @description Set the sprite of this
     * @param {Number} value
     */
    set sprite(value) {
        SetBlipSprite(this.id, value);
    }

    /**
     * @description Set the name of this
     * @param {string} name
     */
    set name(name) {
        BeginTextCommandSetBlipName("STRING");
        AddTextComponentSubstringPlayerName(name);
        EndTextCommandSetBlipName(this.id);
        this._name = name;
    }

    /**
     * @description Get the name of this
     * @return {string}
     */
    get name() {
        return this._name;
    }

    /**
     *@description Gets the Entity of this blip is attached to.
     * @returns {Entity}
     */
    get entity() {
        return new Entity(GetBlipInfoIdEntityIndex(this.id));
    }

    /**
     * @description Sets a value indicating whether the route to this blip should be shown on the map.
     * @param {Boolean} value
     */
    ShowRoute(value) {
        SetBlipRoute(this.id, value);
    }

    /**
     * @description Sets a value indicating whether this blip is friendly
     * @param {Boolean} value false for enemy | true for friendly
     */
    IsFriendly(value) {
        SetBlipAsFriendly(this.id, value);
    }

    /**
     * @description Sets a value indicating whether this (Player) blip is a friend. Toggles a half cyan circle on the right side.
     * @param {Boolean} value
     */
    IsFriend(value) {
        ShowFriendIndicatorOnBlip(this.id, value);
    }

    /**
     * @description Sets a value indicating whether this (Player) blip is a CREW member. Toggles a half cyan circle on the left side.
     * @param {Boolean} value
     */
    IsCrew(value) {
        ShowCrewIndicatorOnBlip(this.id, value);
    }

    /**
     * @description Toggles a cyan outline around the blip. Enabling this circle will override the "crew" and "friend" half-circles
     * @param {Boolean} value
     */
    IsFriendCrew(value) {
        ShowOutlineIndicatorOnBlip(this.id, value);
    }

    /**
     * @description Set the circle color
     * @param {Color} color
     */
    set secondaryColor(color) {
        SetBlipSecondaryColour(this.id, color.r, color.g, color.b);
    }

    /**
     * @description Gets a value indicating whether this blip is flashing.
     * @param {boolean} value
     */
    set isFlashing(value) {
        SetBlipFlashes(this.id, value);
    }

    /**
     * @description Sets a value indicating whether this blip is flashing.
     * @return {boolean}
     */
    get isFlashing() {
        return IsBlipFlashing(this.id);
    }

    /**
     * @description Gets a value indicating whether this blip is on minimap.
     * @returns {boolean}
     */
    get isOnMinimap() {
        return IsBlipOnMinimap(this.id);
    }

    /**
     * @description Gets a value indicating whether this blip is short range.
     * @return {boolean}
     */
    get isShortRange() {
        return IsBlipShortRange(this.id);
    }

    /**
     * @description Set a value indicating whether this blip is short range.
     * @param {boolean} value
     */
    set isShortRange(value) {
        SetBlipAsShortRange(this.id, value);
    }

    /**
     * @description Remove this blip
     */
    Delete() {
        if (DoesBlipExist(this.id)) {
            RemoveBlip(this.id);
        }
    }

    /**
     * @description Check if the blip exist
     * @returns {boolean}
     */
    Exist() {
        return DoesBlipExist(this.id);
    }

    /**
     * @description Get where blip is displayed
     * @return {Number} value possible value : 0=Doesn't show up, ever, anywhere |2 = Shows on both main map and minimap. (Selectable on map) | 3 = Shows on main map only. (Selectable on map) | 5 = Shows on minimap only. |8 = Shows on both main map and minimap. (Not selectable on map)
     */
    get display() {
        return GetBlipInfoIdDisplay(this.id);
    }

    /**
     * @description Set where blip is displayed
     * @param {Number} value possible value : 0=Doesn't show up, ever, anywhere |2 = Shows on both main map and minimap. (Selectable on map) | 3 = Shows on main map only. (Selectable on map) | 5 = Shows on minimap only. |8 = Shows on both main map and minimap. (Not selectable on map)
     */
    set display(value) {
        SetBlipDisplay(this.id, value);
    }

    /**
     * @description Update information of this blip
     * @param {Object} data {sprite,name,scale,display,color,alpha,coord,rotation,priority,numberLabel,showRoute,isFriend,isCrew,secondaryColor,isFlashing,isShortRange} 
     */
    UpdateData(data) {
        Object.keys(data).forEach(e => {
            switch (e) {
                case "sprite":
                    this.sprite = data.sprite;
                    break;
                case "name":
                    this.name = data.name;
                    break;
                case "scale":
                    this.scale = data.scale;
                    break;
                case "display":
                    this.display = data.display;
                    break;
                case "color":
                    this.color = data.color;
                    break;
                case "alpha":
                    this.alpha = data.alpha;
                    break;
                case 'coord':
                    this.coord = data.coord;
                    break;
                case 'rotation':
                    this.rotation = data.rotation;
                    break;
                case 'priority':
                    this.priority = data.priority;
                    break;
                case 'numberLabel':
                    this.numberLabel = data.numberLabel;
                    break;
                case 'showRoute':
                    this.ShowRoute(data.showRoute);
                    break;
                case 'isFriend':
                    this.IsFriend(data.isFriend);
                    break;
                case 'isCrew':
                    this.IsCrew(data.isCrew);
                    break;
                case 'secondaryColor':
                    this.secondaryColor = data.secondaryColor;
                    break;
                case 'isFlashing':
                    this.isFlashing = data.isFlashing;
                    break;
                case 'isShortRange':
                    this.isShortRange = data.isShortRange;
                    break;
                default:
                    break;
            }
        })
    }

}
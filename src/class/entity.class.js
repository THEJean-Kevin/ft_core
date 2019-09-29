//
// @Project: FivemTools
// @Author: Samuelds
// @License: GNU General Public License v3.0
// @Source: https://github.com/FivemTools/ft_core
//

class Entity {

    constructor(entityId = null) {
        this.id = entityId;
    }

    // Model
    get model() {
        if (!this._model) {
            this._model = GetEntityModel(this.id);
        }
        return this._model;
    }

    set model(value) {
        this._model = value;
    }

    get health() {
        this._health = GetEntityHealth(this.id);
        return this._health;
    }

    set health(amount) {
        this._health = amount;
        SetEntityHealth(this.id, amount);
    }

    get maxHealth() {
        this._maxHealth = GetEntityMaxHealth(this.id);
        return this._maxHealth;
    }

    set maxHealth(amount) {
        this._maxHealth = amount;
        SetEntityMaxHealth(this.id, this._maxHealth);
    }

    get coords() {
        const coords = GetEntityCoords(this.id);
        this._coords = { x : coords[0], y : coords[1], z : coords[2] };
        return this._coords;
    }

    set coords(coords) {
        this._coords = coords;
        SetEntityCoords(this.id, coords.x, coords.y, coords.z, false, false, false, true);
    }

    set positionNoOffset(coords) {
        this._coords = coords;
        SetEntityCoordsNoOffset(this.id, coords.x, coords.y, coords.z, true, true, true);
    }

    get heading() {
        this._heading = GetEntityHeading(this.id);
        return this._heading;
    }

    set heading(heading) {
        this._heading = heading;
        SetEntityHeading(this.id, heading);
    }

    get collision() {
        this._collision = !GetEntityCollisonDisabled(this.id);
        return this._collision;
    }

    set collision(status) {
        this._collision = value;
        SetEntityCollision(this.id, status, false);
    }

    get networkId() {
        this._networkId = NetworkGetNetworkIdFromEntity(this.id);
        return this._networkId;
    }

    // Functions
    IsDead() {
        return IsEntityDead(this.id);
    }

    IsAlive() {
        return !this.isDead();
    }

    Exists() {
        return Boolean(DoesEntityExist(this.id));
    }

    Delete() {
        SetEntityAsMissionEntity(this.id, false, true);
        DeleteEntity(this.id);
    }

    GetBone(boneName) {
        return GetEntityBoneIndexByName(this.id, boneName);
    }

    Init(data) {
        for (let name in data) {
            this[name] = data[name];
        }
    }

    // Mission
    SetMission(callback) {

        let waiting = 0;
        let self    = this;
        let timer   = setInterval(function() {

            if (NetworkHasControlOfEntity(self.id)) {
                SetEntityAsMissionEntity(self.id);
                if (IsEntityAMissionEntity(self.id)) {
                    clearInterval(timer);
                    console.log("Mission is ok");
                    callback(true);
                }
            } else {
                NetworkRequestControlOfEntity(this.id);
            }

            if (waiting === 100) {
                clearInterval(timer);
                callback(false);
            }
            waiting++;

        }, 10);

    }

    // Network
    SetNetwork(callback) {

        let netId   = false;
        let waiting = 0;
        let self    = this;
        let timer   = setInterval(function() {

            if (NetworkHasControlOfEntity(self.id)) {
                NetworkRegisterEntityAsNetworked(self.id);
                netId = self.networkId;
                if (netId) {
                    SetNetworkIdCanMigrate(netId, true);
                    SetNetworkIdExistsOnAllMachines(netId, true);
                    if (NetworkDoesNetworkIdExist(netId)) {
                        console.log("Network is ok");
                        clearInterval(timer);
                        callback(netId);
                    }
                }
            } else {
                NetworkRequestControlOfEntity(this.id);
            }

            if (waiting === 100) {
                clearInterval(timer);
                callback(false);
            }
            waiting++;

        }, 10);

    }


}
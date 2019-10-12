//
// @Project: FivemTools
// @Author: Samuelds
// @License: GNU General Public License v3.0
// @Source: https://github.com/FivemTools/ft_core
//

class Vehicle extends Entity {

    get class() {
        if (this._class === undefined) {
            this._class = GetVehicleClass(this.id);
        }
        return this._class;
    }

    // Body Health
    get bodyHealth() {
        this._bodyHealth = GetVehicleBodyHealth(this.id);
        return this._bodyHealth;
    }

    set bodyHealth(amount) {
        this._bodyHealth = Number(amount);
        SetVehicleBodyHealth(this.id, Number(amount));
    }

    // Engine Health
    get engineHealth() {
        this._engineHealth = GetVehicleEngineHealth(this.id);
        return this._engineHealth;
    }

    set engineHealth(amount) {
        this._engineHealth = Number(amount);
        SetVehicleEngineHealth(this.id, Number(amount));
    }

    // Engine
    get engineIsRunning() {
        this._engineIsRunning = GetIsVehicleEngineRunning(this.id);
        return this._engineIsRunning;
    }

    set engineIsRunning(status) {
        this._engineIsRunning = Boolean(status);
        SetVehicleEngineOn(this.id, this._engineIsRunning, true, true);
    }

    // Petrol Tank Health
    get petrolTankHealth() {
        this._petrolTankHealth = GetVehiclePetrolTankHealth(this.id);
        return this._petrolTankHealth;
    }

    set petrolTankHealth(amount) {
        this._petrolTankHealth = Number(amount);
        SetVehiclePetrolTankHealth(this.id, this._petrolTankHealth);
    }

    // Lights
    get lights() {
        const state = GetVehicleLightsState(this.id);
        this._lights = state[1] + state[2];
        return this._lights;
    }

    // TODO
    set lights(state) {
        this._lights = state;
        if (this._lights === 2) {
            SetVehicleLights(this.id, 2);
            SetVehicleFullbeam(this.id, true);
            this.lightsMode = 0;
        } else if (this._lights === 1) {
            SetVehicleLights(this.id, 2);
            this.lightsMode = 0;
        } else {
            SetVehicleLights(this.id, 0);
        }
    }

    set lightsMode(amount) {
        this._lightsMode = Number(amount);
        SetVehicleLightsMode(this.id, this._lightsMode);
    }

    set lightMultiplier(amount) {
        this._lightMultiplier = Number(amount);
        SetVehicleLightMultiplier(this.id, this._lightMultiplier);
    }

    // Neon Light
    GetNeonLight(index) {
        if (this._neonLight === undefined) {
            this._neonLight = {};
        }
        this._neonLight[index] = Boolean(IsVehicleNeonLightEnabled(this.id, index));
    }

    GetAllNeonLight() {
        for (let index = 0; index < 3; index++) {
            this.GetNeonLight(index);
        }
        return this._neonLight;
    }

    IsNeonLightEnabled(index) {
        return Boolean(IsVehicleNeonLightEnabled(this.id, Boolean(index)));
    }

    SetNeonLight(index, state) {
        if (this._neonLight === undefined) {
            this._neonLight = {};
        }
        console.log(state);
        this._neonLight[Number(index)] = Boolean(state);
        SetVehicleNeonLightEnabled(this.id, Number(index), Boolean(state));
    }

    SetAllNeonLight(status) {
        for (let index in status) {
            this.SetNeonLight(index, status[index]);
        }
    }

    // neon colour
    get neonColour() {
        const colours = GetVehicleNeonLightsColour(this.id);
        this._neonColour = { red: colours[0], green: colours[1], blue: colours[2] };
        return this._neonColour;
    }

    set neonColour(colour) {
        this._neonColour = colour;
        SetVehicleNeonLightsColour(this.id, colour.red, colour.green, colour.blue);
    }

    // Max doors
    GetNumberDoors() {
        if (this._maxDoors === undefined) {
            this._maxDoors = GetNumberOfVehicleDoors(this.id);
        }
        return this._maxDoors;
    }

    // Doors
    IsDoorDamaged(index) {
        return IsVehicleDoorDamaged(this.id, Number(index));
    }

    GetDoorAngleRatio(index) {
        return GetVehicleDoorAngleRatio(this.id, Number(index));
    }

    GetDoorState(index) {
        if (this._doors === undefined) {
            this._doors = {};
        }

        let door;
        if (this.IsDoorDamaged(index)) {
            door = -1;
        } else {
            door = this.GetDoorAngleRatio(index);
        }

        this._doors[Number(index)] = door;
        return door;
    }

    GetAllDoorState() {
        this._doors = {};
        for (let index = 0; index < this.GetNumberDoors(); index++) {
            this.GetDoorState(index);
        }
        return this._doors;
    }

    SetDoorBroken(index, remove) {
        SetVehicleDoorBroken(this.id, Number(index), Boolean(remove));
        this._doors[Number(index)] = -1;
    }

    SetDoorShut(index, instantly) {
        SetVehicleDoorShut(this.id, Number(index), Boolean(instantly));
        this._doors[Number(index)] = 0;
    }

    SetDoorOpen(index, loose, instantly) {
        SetVehicleDoorOpen(this.id, Number(index), Boolean(loose), Boolean(instantly));
    }

    SetDoorControl(index, speed, angle) {
        SetVehicleDoorControl(this.id, Number(index), Number(speed), Number(angle));
    }

    SetDoorLatched(index, force, lock) {
        SetVehicleDoorLatched(this.id, Number(index), Boolean(force), Boolean(lock));
    }

    // TODO : Angle
    SetDoorState(index, state) {
        if (this._doors === undefined) {
            this._doors = {};
        }

        if (Number(state) === -1) {
            this.SetDoorBroken(index, true);
        } else if (Number(state) === 0) {
            this.SetDoorShut(index, true);
        } else {
            this.SetDoorOpen(index, false, true);
            let self = this;
            setTimeout(function () {
                self.SetDoorLatched(index, false, true);
            }, 100);
        }
        this._doors[Number(index)] = state;
    }

    SetAllDoorsState(states) {
        for (let index in states) {
            this.SetDoorState(index, states[index]);
        }
    }

    get doors() {
        return this._doors;
    }

    set doors(values) {
        this._doors = values;
    }

    // Look
    get lookStatus() {
        this._lookStatus = GetVehicleDoorLockStatus(this.id);
        return this._lookStatus;
    }

    set lookStatus(status) {
        this._lookStatus = Boolean(status);
        SetVehicleDoorsLocked(this.id, Boolean(status));
    }

    // Fuel
    get fuelLevel() {
        this._fuelLevel = GetVehicleFuelLevel(this.id);
        return this._fuelLevel;
    }

    set fuelLevel(amount) {
        this._fuelLevel = Number(amount);
        SetVehicleFuelLevel(this.id, this._fuelLevel);
    }

    // Plate
    get plateText() {
        this._plateText = GetVehicleNumberPlateText(this.id);
        return this._plateText;
    }

    set plateText(text) {
        this._plateText = text;
        SetVehicleNumberPlateText(this.id, this._plateText);
    }

    get plateStyle() {
        this._plateStyle = GetVehicleNumberPlateTextIndex(this.id);
        return this._plateStyle;
    }

    set plateStyle(style) {
        this._plateStyle = Number(style);
        SetVehicleNumberPlateTextIndex(this.id, this._plateStyle);
    }

    // DirtLevel
    get dirtLevel() {
        this._dirtLevel = GetVehicleDirtLevel(this.id);
        return this._dirtLevel;
    }

    set dirtLevel(level) {
        this._dirtLevel = level;
        SetVehicleDirtLevel(this.id, level);
    }

    // WheelType
    get wheelType() {
        this._wheelType = GetVehicleWheelType(this.id);
        return this._wheelType;
    }

    set wheelType(type) {
        this._wheelType = type;
        SetVehicleWheelType(this.id, type);
    }

    // Tyre
    GetAllTyreBurst() {
        this._tyreBurst = {};

        const tireIndex = {
            "wheel_lf": 0,
            "wheel_rf": 1,
            "wheel_lm1": 2,
            "wheel_rm1": 3,
            "wheel_lr": 4,
            "wheel_rr": 5,
            "wheel_lm2": 45,
            "wheel_rm2": 47,
            "wheel_lm3": 46,
            "wheel_rm3": 48,
        };

        for (let index in tireIndex) {
            if (GetEntityBoneIndexByName(this.id, index) !== -1 && IsVehicleTyreBurst(this.id, tireIndex[index], false)) {
                this._tyreBurst[tireIndex[index]] = true;
            }
        }

        return this._tyreBurst;
    }

    SetTyreBurst(index, state, p3 = 1000.0) {
        if (this._tyreBurst === undefined) {
            this._tyreBurst = {};
        }
        SetVehicleTyreBurst(this.id, Number(index), Boolean(state), p3);
        this._tyreBurst[Number(index)] = Boolean(state);
    }

    SetAllTyreBurst(states) {
        for (let index in states) {
            this.SetTyreBurst(index, states[index]);
        }
    }

    // Windows
    GetAllWindowState() {
        this.__windows = {};

        const windowsIndex = {
            'window_rf': 0,
            'window_lf': 1,
            'window_rr': 2,
            'window_lr': 3
        };

        for (let index in windowsIndex) {
            if (GetEntityBoneIndexByName(this.id, index) !== -1) {
                this.__windows[windowsIndex[index]] = IsVehicleWindowIntact(this.id, windowsIndex[index], false);
            }
        }

        return this.__windows;
    }

    SmashWindow(index) {
        SmashVehicleWindow(this.id, Number(index));
        this.__windows[Number(index)] = -1;
    }

    SetAllWindowState(states) {

        if (this.__windows === undefined) {
            this.__windows = {};
        }

        for (let index in states) {
            if (states[index] === -1) {
                this.SmashWindow(index);
            }
        }
    }

    // Colours
    get colours() {
        const colours = GetVehicleColours(this.id);
        this._colours = { primary: colours[0], secondary: colours[1] };
        return this._colours;
    }

    set colours(colours) {
        this._colours = colours;
        SetVehicleColours(this.id, colours.primary, colours.secondary);
    }

    // Primary Colour
    get primaryColour() {
        const color = GetVehicleCustomPrimaryColour(this.id);
        this._primaryColour = {red: color[0], green: color[1], blue: color[2]};
        return this._primaryColour;
    }

    set primaryColour(colour) {
        this._primaryColour = colour;
        SetVehicleCustomPrimaryColour(this.id, colour.red, colour.green, colour.blue);
    }

    // Secondary Colour
    get secondaryColour() {
        const colour = GetVehicleCustomSecondaryColour(this.id);
        this._secondaryColour = {red: colour[0], green: colour[1], blue: colour[2]};
        return this._secondaryColour;
    }

    set secondaryColour(colour) {
        this._secondaryColour = colour;
        SetVehicleCustomSecondaryColour(this.id, colour.red, colour.green, colour.blue);
    }

    // Extra colours
    get extraColours() {
        const extraColours = GetVehicleExtraColours(this.id);
        this._extraColours = {pearlescent: extraColours[0], wheel: extraColours[1]};
        return this._extraColours;
    }

    set extraColours(extraColours) {
        this._extraColours = extraColours;
        SetVehicleExtraColours(this.id, extraColours.pearlescent, extraColours.wheel);
    }

    // Mod Color
    get modColor1() {
        const color = GetVehicleModColor_1(this.id);
        this._modColor1 = {paintType: color[0], color: color[1], pearlescent: color[2]};
        return this._modColor1;
    }

    set modColor1(color) {
        this._modColor1 = color;
        SetVehicleModColor_1(this.id, color.paintType, color.color, color.pearlescent);
    }

    get modColor2() {
        const color = GetVehicleModColor_2(this.id);
        this._modColor2 = {paintType: color[0], color: color[1]};
        return this._modColor2;
    }

    set modColor2(color) {
        this._modColor2 = color;
        SetVehicleModColor_2(this.id, color.paintType, color.color);
    }

    // Tyre Smoke
    get tyreSmoke() {
        const color = GetVehicleTyreSmokeColor(this.id);
        this._tyreSmoke = {red: color[0], green: color[1], blue: color[2]};
        return this._tyreSmoke;
    }

    set tyreSmoke(color) {
        this._tyreSmoke = color;
        SetVehicleTyreSmokeColor(this.id, color.red, color.green, color.blue);
    }

    get customTires() {
        return this._customTires;
    }

    set customTires(value) {
        this._customTires = value;
    }

    // Tailer
    get trailer() {
        const trailer = GetVehicleTrailerVehicle(this.id);
        this._trailer = trailer[1];
        return this._trailer;
    }

    set trailer(traillerId) {
        this._trailer = traillerId;
        AttachVehicleToTrailer(this.id, traillerId);
    }

    // Mod
    GetMod(index) {
        if (this._mod === undefined) {
            this._mod = {};
        }

        if (index >= 17 && index <= 22) {
            this._mod[Number(index)] = Boolean(IsToggleModOn(this.id, Number(index)));
        } else {
            this._mod[Number(index)] = GetVehicleMod(this.id, Number(index));
        }
    }

    GetAllMod() {
        for (let index = 0; index < 49; index++) {
            this.GetMod(index);
        }
        return this._mod;
    }

    SetAllMod(status) {
        for (let index in status) {
            this.SetMod(index, status[index]);
        }
    }

    SetMod(type, index) {
        if (this._mod === undefined) {
            this._mod = {};
            SetVehicleModKit(this.id, 0);
        }

        if (this._customTires === undefined) {
            this._customTires = false;
        }

        // Convert string to number
        if (Number(type) >= 17 && Number(type) <= 22) {
            ToggleVehicleMod(this.id, Number(type), Boolean(index));
            this._mod[Number(type)] = Boolean(index);
        } else {
            SetVehicleMod(this.id, Number(type), Number(index), this._customTires);
            this._mod[Number(type)] = Number(index);
        }
    }

    // Extra
    IsVehicleExtraTurnedOn(index) {
        return IsVehicleExtraTurnedOn(this.id, index);
    }

    get extras() {
        this._extras = [];
        for (let index = 0; index < 14; index++) {
            this._extras[index] = Boolean(this.IsVehicleExtraTurnedOn(index));
        }
        return this._extras;
    }

    set extras(values) {
        this._extras[values.extra] = values.state;
        SetVehicleExtra(this.id, values.extra, values.state);
    }

    // Livery
    get livery() {
        this._livery = GetVehicleLivery(this.id);
        return this._livery;
    }

    set livery(value) {
        this._livery = value;
        SetVehicleLivery(this.id, value);
    }

    // WindowTint
    get windowTint() {
        this._windowTint = GetVehicleWindowTint(this.id);
        return this._windowTint;
    }

    set windowTint(value) {
        this._windowTint = value;
        SetVehicleWindowTint(this.id, value);
    }

    // Siren
    get siren() {
        this._siren = IsVehicleSirenOn(this.id);
        return this._siren;
    }

    set siren(status) {
        this._siren = status;
        SetVehicleSiren(this.id, status);
    }

    // Spawn vehicule
    Spawn(callback) {

        if (IsModelAVehicle(this._model)) {

            let waiting = 0;
            let self = this;
            RequestModel(this._model);
            let timer = setInterval(function () {
                if (HasModelLoaded(self._model)) {
                    clearInterval(timer);
                    self.id = CreateVehicle(self._model, self._coords.x, self._coords.y - 1.0, self._coords.z, self._heading, true, true);

                    const exclude = ["id", "_model", "_coords", "_heading", "_networkId", "_mod", "_neonLight", "_doors", "_tyreBurst", "__windows"];
                    for (let key in self) {
                        if (!exclude.includes(key)) {
                            self[key.substring(1)] = self[key];
                        }
                    }

                    if (self._mod !== undefined) {
                        SetVehicleModKit(self.id, 0);
                        self.SetAllMod(self._mod);
                    }

                    if (self._neonLight !== undefined) {
                        self.SetAllNeonLight(self._neonLight);
                        console.log("oui :!!!");
                    }

                    if (self._doors !== undefined) {
                        self.SetAllDoorsState(self._doors);
                    }

                    if (self._tyreBurst !== undefined) {
                        self.SetAllTyreBurst(self._tyreBurst);
                    }

                    if (self.__windows !== undefined) {
                        self.SetAllWindowState(self.__windows);
                    }

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
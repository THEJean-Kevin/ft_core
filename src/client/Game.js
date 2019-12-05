const languageId = Object.freeze({
    7: "french",
    9: "japanese",
    10: "spanish",
    12: "english",
    16: "portuguese",
    17: "korean",
    21: "italian",
    22: "german",
    25: "russian"
});

/*TODO
player => avec class Player
playerPed
playerList()
pvp
*/
class Game {
    _cachedPlayer;
    /**
     * @description Get Hash
     * @param {string} string
     * @return {hash}
     */
    generateHash(string) {
        if (typeof string === "undefined") {
            return 0;
        }
        return GetHashKey(string)
    }
    /**
     * @description Gets the game language
     * @return {Array} [id,name]
     */
    get language() {
        const id = GetUserLanguageId()
        return [id, languageId[id]]
    }
    /**
     * @description Gets how many milliseconds the game has been open this session
     * @return {number}
     */
    get gameTime() {
        return GetGameTimer()
    }
    /**
     * @description Sets the time scale of the Game.
     * @param {Number} time The time scale, only accepts values between 0.0 and 1.0
     */
    set timeScale(time) {
        SetTimeScale(time <= 1 && time >= 0 ? time : 1)
    }
    /**
         * @description Gets the total amount of frames rendered in this session
         * @return {Number}}
         */
    get frameCount() {
        return GetFrameCount()
    }
    /**
     * @description Gets the current frame rate per second
     * @return {Number}
     */
    get FPS() {
        return 1 / this.lastFrameTime
    }
    /**
     * @description Gets the time it currently takes to render a frame, in seconds;
     * @return {Number}
     */
    get lastFrameTime() {
        return GetFrameTime()
    }
    /**
     * @description Get the local player's Player object.
     * @return {Number}
     */
    get player() {
        const handle = PlayerId()
        if (typeof this.cachedPlayer === 'undefined' || handle !== this.cachedPlayer) {
            this.cachedPlayer = handle
        }
        return this.cachedPlayer
    }
    /**
     * @description  Get the maximum wanted level.
     * @return {Number}
     */
    get maxWantedLevel() {
        return GetMaxWantedLevel()
    }
    /**
     * @description Set the maximum wanted level the local client can get.
     * @param  {Number} value betwwen 0 and 5
     */
    set maxWantedLevel(value) {
        if (value < 0) {
            value = 0;
        } else if (value > 5) {
            value = 5;
        }
        SetMaxWantedLevel(value);
    }
    /**
     * @description Set the multiplier of the wanted level.
     * @param  {Number}
     */
    set wantedMultiplier(value) {
        SetWantedLevelMultiplier(value)
    }
    /**
     * @description Set whether police blips should show on minimap.
     * @param {Boolean}
     */
    set showPoliceBlipsOnRadar(toggle) {
        SetPoliceRadarBlips(toggle)
    }
    /**
     * @description Get if nightvision is active.
     * @return {Boolean}
     */
    get nightVision() {
        return !!GetUsingnightvision()
    }
    /**
     * @description Toggle nightvision.
     * @param {Boolean}
     */
    set nightVision(toggle) {
        SetNightvision(toggle);
    }
    /**
     * @description Get if thermal (heat) vision is active.
     * @return {Boolean}
     */
    get thermalVision() {
        return !!GetUsingseethrough()
    }
    /**
     * @description Toggle thermal (heat) vision.
     * @param {Boolean}
     */
    set thermalVision(toggle) {
        SetSeethrough(toggle);
    }
    /**
     * @description  Return if players is in mission
     * @return {Boolean}
     */
    get isMissionActive() {
        return !!GetMissionFlag()
    }
    /**
     * @description Set if players is in mission
     * @param {Boolean}
     */
    set isMissionActive(toggle) {
        SetMissionFlag(toggle);
    }
    /**
     * @description *
     * @return {Boolean}
     */
    get isRandomEventActive() {
        return GetRandomEventFlag() === 1;
    }
    /**
     * @description *
     * @param {Boolean}
     */
    set isRandomEventActive(toggle) {
        SetRandomEventFlag(toggle ? 1 : 0);
    }
    /**
     * @description *
     * @return {Boolean}
     */
    get isCutsceneActive() {
        return !!IsCutsceneActive()
    }
    /**
     * @description Is a waypoint set on the map.
     * @return {Boolean}
     */
    get isWaypointActive() {
        return !!IsWaypointActive()
    }
    /**
     * @description Is the player in the pause menu (ESC).
     * @return {Boolean}
     */
    get isPaused() {
        return !!IsPauseMenuActive()
    }
    /**
     * @description Force enable pause menu.
     * @param {Boolean}
     */
    set isPaused(toggle) {
        SetPauseMenuActive(toggle);
    }
    /**
     * @description Get if a loading screen is active.
     * @return {Boolean}
     */
    get isLoading() {
        return !!GetIsLoadingScreenActive()
    }
    /**
     * @description Force player to stop the laoding screen
     */
    stopLoading() {
        ShutdownLoadingScreen()
    }
    /**
     * @description Get current input mode.
     * @returns {Number} InputMode: Mouse & Keyboard (0) or GamePad(1)
     */
    get CurrentInputMode() {
        return IsInputDisabled(2) ? InputMode.MOUSSEANDKEYBOARD : InputMode.GAMEPAD
    }
    /**
     * @descriptionheck whether a control is currently pressed.
     * @param {Number} index input group (usually 0)
     * @param {Number} control Control
     * @returns {Boolean}
     */
    isControlPressed(index, control) {
        return !!IsControlPressed(index, Number(control))
    }
}
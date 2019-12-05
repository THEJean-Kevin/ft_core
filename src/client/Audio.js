/**
 * @Project: FivemTools
 * @Author: Samuelds
 * @License: GNU General Public License v3.0
 * @Source: https://github.com/FivemTools/ft_core
 */

class Audio {
    /**
     *@description Play sound at Coord pastebin.com/0neZdsZ5 
     * @param {Vector3} position
     * @param {Number} soundId
     * @param {String} SoundName
     * @param {*} soundSet
     * @returns {Number} sound Id
     */
    PlaySoundAt(position, soundId, SoundName, soundSet) {
        PlaySoundFromCoord(soundId, SoundName, position.x, position.y, position.z, soundSet ? soundSet : null, false, 0, false)
        return GetSoundId()
    }
    /**
     * @description play sound near Entity pastebin.com/0neZdsZ5 
     * @param {Entity} entity 
     * @param {Number} soundId 
     * @param {String} soundName 
     * @param {*} soundSet 
     * @returns {Number} sound Id
     */
    PlaySoundFromEntity(entity, soundId, soundName, soundSet) {
        PlaySoundFromEntity(soundId, soundName, entity.id, soundSet ? soundSet : null, false, 0);
        return GetSoundId()
    }
    /**
     * @description Play sound front end pastebin.com/0neZdsZ5 
     * @param {Number} soundId 
     * @param {String} soundName 
     * @param {*} soundSet 
     * @returns {Number} sound Id
     */
    PlaySoundFrontEnd(soundId, soundName, soundSet) {
        PlaySoundFrontend(soundId, soundName, soundSet ? soundSet : null, false)
        return GetSoundId()
    }
    /**
     * @description stop the sound
     * @param {Number} soundId
     */
    StopSound(soundId) {
        StopSound(soundId)
    }
    /**
     * @description release the sound
     * @param {Number} soundId
    */
    ReleaseSound(soundId) {
        ReleaseSoundId(soundId)
    }
    /**
     * @description check if the sound is finish
     * @param {Number} soundId
     * @returns {Boolean}
    */
    HasSoundFinished(soundId){
        return !!HasSoundFinished(soundId)
    }
    /**
     * @description Set the audio flag
     * @param {String|Number} flag for number see the array audioFlag 
     * @param {*} toggle 
     */
    SetAudioFlag(flag,toggle){
        if(typeof flag === 'string'){
            SetAudioFlag(flag,toggle)
        }else{
            SetAudioFlag(this.audioFlags[Number(flag)],toggle)
        }
    }

    /**
     * @description Play the sound
     * @param {Number} soundId
     * @param {String} soundName
     * @param {*} soundSet
     */
    PlaySound(soundId,soundName,soundSet){
        this.releaseSound(this.playSoundFrontEnd(soundId,soundName,soundSet))
    }

    /**
     * @description play music
     * @param {String} musicfile https://pastebin.com/RzDFmB1W
     */
    PlayMusic(musicfile){
        if(this._cachedMusicFile !== null){
            CancelMusicEvent(this._cachedMusicFile)
        }
        this._cachedMusicFile = musicfile
        TriggerMusicEvent(musicFile)
    }

    /**
     * @description Stop music
     * @param {string} musicFile https://pastebin.com/RzDFmB1W
     */
    StopMusic(musicFile){
        if(!musicFile){
            CancelMusicEvent(musicFile)
        }else{
            if(this._cachedMusicFile){
                CancelMusicEvent(this._cachedMusicFile)
                this._cachedMusicFile = null
            }
        }
    }

    _cachedMusicFile;
    _audioFlag =  [
        'ActivateSwitchWheelAudio',
        'AllowCutsceneOverScreenFade',
        'AllowForceRadioAfterRetune',
        'AllowPainAndAmbientSpeechToPlayDuringCutscene',
        'AllowPlayerAIOnMission',
        'AllowPoliceScannerWhenPlayerHasNoControl',
        'AllowRadioDuringSwitch',
        'AllowRadioOverScreenFade',
        'AllowScoreAndRadio',
        'AllowScriptedSpeechInSlowMo',
        'AvoidMissionCompleteDelay',
        'DisableAbortConversationForDeathAndInjury',
        'DisableAbortConversationForRagdoll',
        'DisableBarks',
        'DisableFlightMusic',
        'DisableReplayScriptStreamRecording',
        'EnableHeadsetBeep',
        'ForceConversationInterrupt',
        'ForceSeamlessRadioSwitch',
        'ForceSniperAudio',
        'FrontendRadioDisabled',
        'HoldMissionCompleteWhenPrepared',
        'IsDirectorModeActive',
        'IsPlayerOnMissionForSpeech',
        'ListenerReverbDisabled',
        'LoadMPData',
        'MobileRadioInGame',
        'OnlyAllowScriptTriggerPoliceScanner',
        'PlayMenuMusic',
        'PoliceScannerDisabled',
        'ScriptedConvListenerMaySpeak',
        'SpeechDucksScore',
        'SuppressPlayerScubaBreathing',
        'WantedMusicDisabled',
        'WantedMusicOnMission',
      ];


}
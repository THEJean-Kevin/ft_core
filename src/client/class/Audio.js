/*
 * @Project: FiveM Tools
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
    PlaySoundFromCoord(soundId, SoundName, position.x, position.y, position.z, soundSet ? soundSet : null, false, 0, false);
    this.id = GetSoundId();
    return this.id;
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
    this.id = GetSoundId();
    return this.id;
  }

  /**
   * @description Play sound front end pastebin.com/0neZdsZ5
   * @param {Number} soundId
   * @param {String} soundName
   * @param {*} soundSet
   * @returns {Number} sound Id
   */
  PlaySoundFrontEnd(soundId, soundName, soundSet) {
    PlaySoundFrontend(soundId, soundName, soundSet ? soundSet : null, false);
    this.id = GetSoundId();
    return this.id;
  }

  /**
   * @description stop the sound
   */
  StopSound() {
    StopSound(this.id);
  }

  /**
   * @description Release the sound
   * @return {void}
   */
  ReleaseSound() {
    ReleaseSoundId(this.id);
  }

  /**
   * @description check if the sound is finish
   * @param {Number} soundId
   * @returns {Boolean}
   */
  HasSoundFinished() {
    return HasSoundFinished(this.id);
  }

  /**
   * @description Set the audio flag
   * @param {String|Number} flag for number see the array audioFlag
   * @param {*} toggle
   */
  SetAudioFlag(flag, toggle) {
    if (typeof flag === 'string') {
      SetAudioFlag(flag, toggle)
    } else {
      SetAudioFlag(AudioFlag[Number(flag)], toggle);
    }
  }

  /**
   * @description Play the sound
   * @param {Number} soundId
   * @param {String} soundName
   * @param {*} soundSet
   */
  PlaySound(soundId, soundName, soundSet) {
    this.PlaySoundFrontEnd(soundId, soundName, soundSet);
    this.ReleaseSound();
  }

  /**
   * @description play music
   * @param {String} musicfile https://pastebin.com/RzDFmB1W
   */
  PlayMusic(musicfile) {
    if (this.musicFile !== null) {
      CancelMusicEvent(this.musicFile);
    }
    this.musicFile = musicfile;
    TriggerMusicEvent(musicFile);
  }

  /**
   * @description Stop music
   */
  StopMusic() {
    if (this.musicFile) {
      CancelMusicEvent(this.musicFile);
      this.musicFile = null
    }
  }

}
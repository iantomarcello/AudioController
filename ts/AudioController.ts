/**
 * Audio Class with controls all audios.
 * @param {Array} audios, an array of HTMLAudioElement to be controlled.
 * @author Ian Yong (iantomarcello)
 */

type AudioElement = HTMLAudioElement | HTMLMediaElement;
type AudioElementsArray = Array<AudioElement>;

export default class AudioController {
  audios : Array <AudioElement>;
  paused : Boolean;
  muted : Boolean;

  constructor(audios : AudioElementsArray = []) {
    this.audios = [...audios];
    this.paused = true;
    this.muted = true;
  }

  getAudio(src : string) {
    return this.audios.filter(audio => audio.src === src);
  }

  addAudio(audio : AudioElement) {
    audio && this.audios.push(audio);
  }

  addAudios(audios : AudioElementsArray = []) {
    audios.length ?? this.audios.push(...audios);
  }

  removeAudio(index : number) {
    index ?? this.audios.splice(index, 1);
  }

  muteAll() {
    if ( !this.muted ) {
      this.audios.forEach(audio => audio.muted = true);
      this.muted = true;
    }
  }
  
  unmuteAll() {
    if ( this.muted ) {
      this.audios.forEach(audio => audio.muted = false);
      this.muted = false;
    }
  }

  toggleMute() {
    this.muted ? this.unmuteAll() : this.muteAll();
  }

  pauseAll() {
    if ( !this.paused ) {
      this.audios.forEach(audio => audio.pause());
      this.paused = true;
    }
  }
  
  playAll() {
    if ( this.paused ) {
      this.audios.forEach(audio => audio.play());
      this.paused = false;
    }
  }

  togglePlay() {
    this.paused ? this.playAll() : this.pauseAll();
  }
  
  reset() {
    this.audios.forEach(audio => {
      audio.currentTime = 0;
      audio.pause();
    });
    this.paused = true;
    this.muted = true;
  }
}
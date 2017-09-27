import { Component, Provider ,ChangeDetectorRef} from '@angular/core';

import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { AudioProvider,ITrackConstraint } from 'ionic-audio';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase';
/**
 * Generated class for the AudioplayerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-audioplayer',
  templateUrl: 'audioplayer.html',
})
export class AudioplayerPage {

  myTracks: ITrackConstraint[];
    playlist: ITrackConstraint[] = [];
    loader:any;

    currentIndex: number = -1;
    currentTrack: ITrackConstraint;

    constructor(private _cdRef: ChangeDetectorRef, public loadingCtrl:LoadingController) {
      // plugin won't preload data by default, unless preload property is defined within json object - defaults to 'none'
      this.myTracks = [{
        src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3',
        artist: 'John Mayer',
        title: 'Why Georgia',
        art: 'assets/img/johnmayer.jpg',
        preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
      },
      {
        src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t30-MP3-V0.mp3',
        artist: 'John Mayer',
        title: 'Who Says',
        art: 'assets/img/johnmayer.jpg',
        preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
      },

      {
        src: 'https://archive.org/download/swrembel2010-03-07.tlm170.flac16/swrembel2010-03-07s1t05.mp3',
        artist: 'Stephane Wrembel',
        title: 'Stephane Wrembel Live',
        art: 'assets/img/Stephane.jpg',
        preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
      }];
    }

    add(track: ITrackConstraint) {
      this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
          });
       this.loader.present();
      this.playlist.push(track);
    }

    play(track: ITrackConstraint, index: number) {

        this.loader.dismiss();
        this.currentTrack = track;
        this.currentIndex = index;
    }

    next() {
      // if there is a next track on the list play it
      if (this.playlist.length > 0 && this.currentIndex >= 0 && this.currentIndex < this.playlist.length - 1) {
        let i = this.currentIndex + 1;
        let track = this.playlist[i];
        this.play(track, i);
        this.loader.dismiss();
        this._cdRef.detectChanges();  // needed to ensure UI update
      } else if (this.currentIndex == -1 && this.playlist.length > 0) {
        // if no track is playing then start with the first track on the list
        this.play(this.playlist[0], 0);
        this.loader.dismiss();

      }
    }

    onTrackFinished(track: any) {
      this.next();
    }

    clear() {
      this.playlist = [];
    }

/*  musicItems: FirebaseListObservable<any[]>;
  myTracks: any[];
  allTracks: any[];

  constructor(public navCtrl: NavController,private domSanitizer: DomSanitizer, private videoPlayer : VideoPlayer,public navParams: NavParams,public firebaseProvider: FirebaseProvider,private streamingMedia: StreamingMedia) {

    // plugin won't preload data by default, unless preload property is defined within json object - defaults to 'none'
    this.musicItems = this.firebaseProvider.getMusicItems();
    console.log("musicItems",this.musicItems);
  }
  startAudio(newItem) {
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(newItem)

console.log("newItem",newItem);
  this.videoOpts = {volume : 1.0};
   this.videoPlayer.play('assets/sally_inspire_3.mp4').then(() => {
   console.log('video completed');
   }).catch(err => {
   console.log(err);
   });



    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Audio') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'portrait'
    };
    this.streamingMedia.playVideo('https://www.youtube.com/embed/gvI2ClWqHO0', options);*/
}

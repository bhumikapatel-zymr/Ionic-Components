import { Component ,ViewChild, ElementRef  } from '@angular/core';
import { NavController, NavParams,Platform} from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';

/**
 * Generated class for the MappagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 declare var google;


@Component({
  selector: 'page-mappage',
  templateUrl: 'mappage.html',
})
export class MappagePage {

  @ViewChild('map') mapElement: ElementRef;
    map: any;
    loader:any;
    constructor(public navCtrl: NavController, public geolocation: Geolocation, public platform :Platform) {

 }

 ionViewDidLoad(){

   this.loadMap();

 }

 loadMap(){



   this.geolocation.getCurrentPosition().then((position) => {


     let latLng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

     let mapOptions = {
       center: latLng,
       zoom: 15,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     }
     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
     (success) => {
         console.log(success);

     }
   }, (err) => {
     console.log(err);

   });

}

 addMarker(){

  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });

  let content = "<h4>Information!</h4>";

  this.addInfoWindow(marker, content);

}
addInfoWindow(marker, content){

  let infoWindow = new google.maps.InfoWindow({
    content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });

}
 }

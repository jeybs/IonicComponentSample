import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the CameraPickerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
 	selector: 'page-camera-picker',
 	templateUrl: 'camera-picker.html',
 })
 export class CameraPickerPage {
 	
 	options: any;
 	imageUri: string;

 	constructor(public navCtrl: NavController, public navParams: NavParams, 
 				private camera: Camera, private imgPicker: ImagePicker,
 				private barcodeScanner: BarcodeScanner) {
 		this.options = {
			  quality: 100,
			  destinationType: this.camera.DestinationType.FILE_URI,
			  encodingType: this.camera.EncodingType.JPEG,
			  mediaType: this.camera.MediaType.PICTURE,
			  saveToPhotoAlbum : false
		}

 	}


 	ionViewDidLoad() {
 		console.log('ionViewDidLoad CameraPickerPage');
 	}

 	openCamera() {
 		this.camera.getPicture(this.options).then((imageUri) => {
		 // imageData is either a base64 encoded string or a file URI
		 // If it's base64:
		 this.imageUri = imageUri;
		 console.log(imageUri);
		}, (err) => {
		 	alert(err);
		});
 	}

 	openGallery() {
 		var gelleryPic: string = "";
 		this.imgPicker.getPictures(null).then((results) => {
		  for (var i = 0; i < results.length; i++) {
		      console.log('Image URI: ' + results[i]);
		      gelleryPic += results[i];
		  }

		  //this.imageUri = gelleryPic;
		}, (err) => {
			console.log(err);
		});
 	}

 	openBarcodeScanner() {
 		this.barcodeScanner.scan().then((barcodeData) => {
 			console.log(barcodeData.text);
 			alert(barcodeData);
		}, (err) => {
		    console.log(err);
		});
 	}
 }

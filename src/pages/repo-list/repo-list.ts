import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the RepoListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
 	selector: 'page-repo-list',
 	templateUrl: 'repo-list.html',
 })
 export class RepoListPage {

 	repoList: any[];
 	loader: any;

 	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public loadingCtrl: LoadingController) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad RepoListPage');
 		this.presentLoading();
 		this.http.get('https://api.github.com/users/jeybs/repos')
 					.map(res => res.json())
 					.subscribe(
 						res => {
 							this.repoList = res;
 							this.hideLoading();
 						}, err => {
 							this.hideLoading();
 							console.log("Oops!");
 						});
 	}

 	ionViewDidEnter() {
 		console.log('ionViewDidEnter RepoListPage');
 	}

 	presentLoading() {
 		this.loader = this.loadingCtrl.create({
 			content: "Loading. Please wait.",
 			dismissOnPageChange: true
 		});

 		this.loadingCtrl.create

 		this.loader.present();
 	}

 	hideLoading() {
 		if(this.loader != null) this.loader.dismiss();
 	}

 	loadRepo(refresher) {
 		this.http.get('https://api.github.com/users/jeybs/repos')
 					.map(res => res.json())
 					.subscribe(
 						res => {
 							this.repoList = res;
 							refresher.complete();
 						}, err => {
 							refresher.complete();
 							console.log("Oops!");
 						});
 	}
 }

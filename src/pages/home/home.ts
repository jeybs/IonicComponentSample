import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RepoListPage } from '../repo-list/repo-list';
import { CameraPickerPage } from '../camera-picker/camera-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	itemList: any[];

	constructor(public navCtrl: NavController) {
		this.itemList = [];

		for(let i=0;i<10;i++) {
			this.itemList.push({name : "Joseph Bryan" + i, id : 1});
		}

	}

	itemSelected(item) {
		switch (item) {
			case 1:
				this.navCtrl.push(RepoListPage);
				break;
			case 2:
				alert(item);
				break;
			case 3:
				alert(item);
				break;
			case 4:
				this.navCtrl.push(CameraPickerPage);
				break;
			default:
				alert(0);
				break;
		}
	}
}

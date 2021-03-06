import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../_services/index';
import { PubNubAngular } from 'pubnub-angular2';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.scss'],
  providers: [ PubNubAngular ]
})

export class RetailerComponent implements OnInit {

  currentUser: any;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.currentUser = this.user.getCurrentUser();
  }
}

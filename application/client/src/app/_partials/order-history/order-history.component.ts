import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from './../../_services/index';
import { PubNubAngular } from 'pubnub-angular2';

@Component({
  selector: 'order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})

export class OrderHistoryComponent implements OnInit{
  history: any;
  displayedColumns: string[] = ['ProductId', 'ModifiedBy', 'CurrentOrderState', 'Timestamp'];
  @Input() orderId: string;
  statuses: any;

  constructor(private api: ApiService){}
  ngOnInit(){
    this.statuses = this.api.getAllStatuses();

    if (this.orderId) {
      console.log("OrderId: "+this.orderId);
      this.api.id = this.orderId;
      this.api.getOrderHistory().subscribe(history => {
        console.log(history);
        this.history = history;
      }, error => {
        alert ("Problem getting order history. Either order doesn't exist or isn't in the correct state for this user");
        console.log(error);
      });
    }
  }

  getHistory(id){
    console.log(id);
    this.api.id = id;
    this.api.getOrderHistory().subscribe(history => {
      console.log(history);
      this.history = history;
    }, error => {
      alert ("Problem getting order history. Either order doesn't exist or isn't in the correct state for this user");
      console.log(error);
    });
  }


}

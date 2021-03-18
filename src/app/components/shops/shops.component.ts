import { Component, Input, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {ShopModalComponent} from '../shop-modal/shop-modal.component'
@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  stores:any = []

@Input()
set filterShop(value: string) {
  if (value !== null) {
    // call your stuff
    console.log(value);
    console.log('filter', this.filterShop);
    
    
  }
}
 
  constructor(public _shop:ShopService, private matDialog: MatDialog) { }

  ngOnInit(): void {
   this.getShops()
  }

  getShops(term=false){

    this._shop.getStores().subscribe(data=>{
      this.stores = data;
    })
  }

  openDialog(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {id}
    this.matDialog.open(ShopModalComponent, dialogConfig);
  }
}

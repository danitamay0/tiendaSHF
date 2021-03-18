import { Component, Inject, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: 'app-shop-modal',
  templateUrl: './shop-modal.component.html',
  
  styleUrls: ['./shop-modal.component.scss']
})
export class ShopModalComponent implements OnInit {
  public store : any = {}
  constructor(public _shop : ShopService, 
    public dialogRef: MatDialogRef<ShopModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {
    this.getStore();
  }
  getStore(){

    this._shop.getStore(this.data.id).subscribe(data=>{
      this.store = data;
    })
  }
  close() {
    this.dialogRef.close();
  }

}

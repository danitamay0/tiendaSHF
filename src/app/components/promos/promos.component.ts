import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.scss']
})
export class PromosComponent implements OnInit {
  promos : any = [];
  constructor(public _shop:ShopService) { }

  ngOnInit(): void {
    this._shop.getPromos().subscribe(data=>{
      this.promos = data;
    })
  }


}

import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories:any = [];
  constructor( public _categories:ShopService ) { }

  ngOnInit(): void {
  
    this._categories.getCategories().subscribe(data=>{
      this.categories = data;
    })
  }

  select(category){
    let select = category.selected
   this.categories =  this.categories.map(cat=>{ 
      cat.selected = false;
      return cat
    })
    category.selected = !select;
  }

}

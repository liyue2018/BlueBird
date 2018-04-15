import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products:Array<Product>;

  constructor() { }

  ngOnInit() {
     this.products = [
        new Product(1,"第一个商品",39.98,4.5,"这是我创建的第一个商品",["电子","图书"]),
        new Product(2,"第一个商品",9.98,2.5,"这是我创建的第二个商品",["电子"]),
        new Product(3,"第一个商品",19.98,3.5,"这是我创建的第三个商品",["游戏","图书"]),
        new Product(4,"第一个商品",29.98,1.5,"这是我创建的第四个商品",["电子","玩具"]),
        new Product(5,"第一个商品",69.98,4.5,"这是我创建的第五个商品",["电子","图书","厨具"])
     ]
  }

}

export class Product {
    constructor(
       public id: number,
       public title: string,
       public price: number,
       public rating: number,
       public desc: string,
       public categories: Array<string>
    ){}
}

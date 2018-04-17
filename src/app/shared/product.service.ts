import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  private products:Product[] = [
        new Product(1,"第一个商品",39.98,4.5,"这是我创建的第一个商品",["电子","图书"]),
        new Product(2,"第二个商品",9.98,2.5,"这是我创建的第二个商品",["电子"]),
        new Product(3,"第三个商品",19.98,3.5,"这是我创建的第三个商品",["游戏","图书"]),
        new Product(4,"第四个商品",29.98,1.5,"这是我创建的第四个商品",["电子","玩具"]),
        new Product(5,"第五个商品",69.98,4.5,"这是我创建的第五个商品",["电子","图书","厨具"])
     ];

  private comments:Comment[] = [
        new Comment(1,1,"2018-04-10 20:20:22","张三",4.5,"very good"),
        new Comment(2,1,"2018-04-10 22:10:22","李四",4.5,"很不错！"),
        new Comment(3,2,"2018-04-11 21:20:22","王五",4.5,"棒！！！"),
        new Comment(4,2,"2018-04-10 10:20:02","刘其",4.5,"赞！！"),
        new Comment(5,3,"2018-04-11 12:20:09","陈晨",4.5,"很好"),
        new Comment(6,4,"2018-04-12 09:20:22","无名",4.5,"味美价廉"),
        new Comment(7,5,"2018-04-17 11:20:22","吴敏",4.5,"非常赞！"),
        new Comment(8,5,"2018-04-17 20:11:22","张三",4.5,"very good")

  ]
     getProducts():Product[] {
         return this.products;
     }
     getProduct(id: number):Product{
         return this.products.find((product:Product) => product.id == id);
     }
     getCommentsForProductId(id:number):Comment[] {
         return this.comments.filter((comment: Comment) => comment.productId == id);
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

export class Comment{
    constructor(
        public id:number,
        public productId:number,
        public timestamp:string,
        public user:string,
        public rating:number,
        public content:string
        ){}
}


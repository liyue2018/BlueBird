import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  private products:Product[] = [
        new Product(1,"Inside Venture Capital",'WEEKLY',39.98,4.5,"The latest deals, news, and firms in venture capital",["电子","图书"]),
        new Product(2,"Inside Daily Brief",'DAILY',39.98,4.5,"A concise presentation of the world's most important, interesting news",["电子","图书"]),
        new Product(3,"Inside Bitcoin",'TWICE WEEKLY',39.98,4.5,"Tracking trends, news, and analysis around Bitcoin and cryptocurrencies",["电子","图书"]),
        new Product(4,"Inside Cloud",'DAILY',39.98,4.5,"Cloud computing, enterprise storage, big data, and more.",["电子","图书"]),
        new Product(5,"Inside Wine",'WEEKLY',39.98,4.5,"The latest deals, news, and firms in venture capital",["电子","图书"]),
        new Product(6,"Inside Amazon",'DAILY',39.98,4.5,"Grab the carefully selected updates and tips right from the grape vine!",["电子","图书"]),
        new Product(7,"Inside Podcasting",'WEEKLY',39.98,4.5,"The best source of in-depth news and analysis about Amazon",["电子","图书"]),
        new Product(8,"Inside San Francisco",'TWICE WEEKLY',39.98,4.5,"Everything you need to know about the resurgence of the spoken word",["电子","图书"]),
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

  ];

    getAllCategories():string[] {
      return ["电子","图书","游戏","玩具","厨具"];
    }
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
       public tag: string,
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


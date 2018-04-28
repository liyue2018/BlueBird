import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  private products:Product[] = [
        new Product(1,"Inside Venture Capital",'WEEKLY','assets/small_x2_Wine.jpg',39.98,4.5,"The latest deals, news, and firms in venture capital",["电子","图书"]),
        new Product(2,"Inside Daily Brief",'DAILY','assets/small_x2_Screen_Shot_2016-08-18_at_10.43.17_AM.png',39.98,1.5,"A concise presentation of the world's most important, interesting news",["电子","图书"]),
        new Product(3,"Inside Bitcoin",'TWICE WEEKLY','assets/small_x2_o-PINT-GLASS-BEER-facebook.jpg',39.98,4.5,"Tracking trends, news, and analysis around Bitcoin and cryptocurrencies",["电子","图书"]),
        new Product(4,"Inside Cloud",'DAILY','assets/small_x2_Screen_Shot_2016-12-07_at_11.01.32_AM.png',39.98,1.5,"Cloud computing, enterprise storage, big data, and more.",["电子","图书"]),
        new Product(5,"Inside Wine",'WEEKLY','assets/small_x2_o-PINT-GLASS-BEER-facebook.jpg',39.98,2.5,"The latest deals, news, and firms in venture capital",["电子","图书"]),
        new Product(6,"Inside Amazon",'DAILY','assets/small_x2_Screen_Shot_2016-08-22_at_1.39.14_PM.png',39.98,4.5,"Grab the carefully selected updates and tips right from the grape vine!",["电子","图书"]),
        new Product(7,"Inside Podcasting",'WEEKLY','assets/small_x2_Screen_Shot_2016-08-18_at_10.43.17_AM.png',39.98,3.5,"The best source of in-depth news and analysis about Amazon",["电子","图书"]),
        new Product(8,"Inside San Francisco",'TWICE WEEKLY','assets/small_x2_Screen_Shot_2016-08-22_at_1.39.14_PM.png',39.98,4.5,"Everything you need to know about the resurgence of the spoken word",["电子","图书"]),
        new Product(9,"Inside Security",'WEEKLY','assets/small_x2_o-PINT-GLASS-BEER-facebook.jpg',39.98,2.5,"David Strom's in-depth cybersecurity news and analysis",["电子","图书"]),
        new Product(10,"Inside Beer",'TWICE WEEKLY','assets/small_x2_o-PINT-GLASS-BEER-facebook.jpg',39.98,1.5,"Industry buzz for professionals who make, sell, or distribute beer.",["电子","图书"]),
        new Product(11,"Inside San Francisco",'TWICE WEEKLY','assets/small_x2_Screen_Shot_2016-12-07_at_11.01.32_AM.png',39.98,4.5,"Everything you need to know about the resurgence of the spoken word",["电子","图书"]),
        new Product(12,"Inside San Francisco",'WEEKLY','assets/small_x2_Screen_Shot_2016-08-18_at_10.43.17_AM.png',39.98,4.5,"Everything you need to know about the resurgence of the spoken word",["电子","图书"]),
        new Product(13,"Inside San Francisco",'WEEKLY','assets/small_x2_o-PINT-GLASS-BEER-facebook.jpg',39.98,2.5,"Everything you need to know about the resurgence of the spoken word",["电子","图书"]),
        new Product(14,"Inside Space",'TWICE WEEKLY','assets/small_x2_Screen_Shot_2017-06-05_at_11.40.34_PM.png',39.98,3.5,"Everything you need to know about the resurgence of the spoken word",["电子","图书"]),
        new Product(15,"Inside Google & Alphabet",'TWICE WEEKLY','assets/small_x2_Wine.jpg',39.98,2.5,"A journey into the depths of outer space and limitless opportunities of space travel",["电子","图书"]),
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
  private schedules:Schedule[] = [
        new Schedule(1,'9:00','AM','Registration',''),
        new Schedule(2,'10:00','AM','Adam Wathan','Resisting Complexity'),
        new Schedule(3,'11:00','AM','Adam Wathan','Full-Stack Testing Strategies'),
        new Schedule(4,'12:00','PM','Jason McCreary','Laravel By The Numbers'),
        new Schedule(5,'1:00','PM','Adam Wathan','Resisting Complexity'),
        new Schedule(6,'2:30','PM','Adam Wathan','Resisting Complexity'),
        new Schedule(7,'3:30','PM','Evan You','Vuex Overview'),
        new Schedule(8,'4:30','PM','Science Storms After Party',''),
        new Schedule(9,'5:30','PM','Adam Wathan','Resisting Complexity'),
        new Schedule(10,'6:30','PM','Taylor Otwell','Keynote'),
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

     // 获取表单数据

     getSchedules():Schedule[]{
       return this.schedules;
     }

}

export class Product {
    constructor(
       public id: number,
       public title: string,
       public tag: string,
       public image:string,
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

// Schedule

 export class Schedule {
     constructor(
           public id: number,
           public timer: string,
           public solt:  string,
           public event: string,
           public describe: string,
         ) {
     }
 }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    formModel: FormGroup;
    categories: string[];

  constructor(fb: FormBuilder, private productService: ProductService) { 
     this.formModel = fb.group( {
         title:['', Validators.minLength(3)],
         price:['', this.positiveNumberValidator],
         category:['-1']
      })

  }

  ngOnInit() {
    this.categories = this.productService.getAllCategories();
    console.log(this.categories);
     }

    onSearch(){
        if(this.formModel.valid){
        console.log(this.formModel.value);
    }
   }

   positiveNumberValidator(control:FormControl):any{
       if(!control.value){
           return null;
       }
       let price = parseInt(control.value);
       if(price > 0){
           return null
       }else {
           return {positiveNumber: true}
       }
   }

}

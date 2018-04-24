import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { samePasswordValidator,mobileValidator } from '../validator/validators';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

    formModel: FormGroup;

  constructor(fb:FormBuilder) { 
      this.formModel = fb.group({
          username:['',[Validators.minLength(4), Validators.required]],
          email:[''],
          passwordsGroup: fb.group({
              password:['',[Validators.minLength(8)]],
              confirm:['']
          }, {validator: samePasswordValidator}),
          mobile:['',[mobileValidator]],
          vcode:['']
      })


  }

  ngOnInit() {
  }

  onSubmit(){
      if(this.formModel.valid){
          console.log(this.formModel.value);
      }
  }

}

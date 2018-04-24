
import { FormControl,FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';


 // 创建校验器

export function mobileValidator(control:FormControl):any {
      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      let valid = myreg.test(control.value);
      console.log("mobile的校验结果是：" + valid);
      return valid ? null : { mobile: true};
  }

// 异步校验器

export function mobileAsyncValidator(control:FormControl):any {
      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      let valid = myreg.test(control.value);
      console.log("mobile的校验结果是：" + valid);
      return Observable.of(valid ? null : { mobile: true}).delay(5000);
  }

// 创建密码和确认密码校验器

export function samePasswordValidator(group:FormGroup):any {
    let password:FormControl = group.get('password') as FormControl;
    let confirm:FormControl = group.get('confirm') as FormControl;
    let valid:boolean = (password.value === confirm.value);
    return valid ? null: { same: true};
}
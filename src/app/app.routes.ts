import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { MainContainerComponent } from './main-container/main-container.component';

export const appRoutes = [

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent,
     children:[
        { path: '', component:MainContainerComponent},
        { path: 'productDetail/:productId', component: ProductDetailComponent}
     ]

},
  { path: 'login', component: UserLoginComponent},
  { path: 'register', component: UserRegisterComponent},
  // { path: 'login', component: HomeComponent},
  // { path: 'productDetail/:productId', component: ProductDetailComponent}
];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BrowserComponent } from './pages/browser/browser.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/login",
    pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"browse",
    component:BrowserComponent
  },{
    path:"user-login",
    component:UserLoginComponent
  },
  {
    path:"registration",
    component:RegistrationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

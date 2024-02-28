declare var google:any;
import { Token } from '@angular/compiler';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
  private router=inject(Router)
ngOnInit(): void {
  google.accounts.id.initialize({
    client_id:"759719364166-qlphfq8f9f9rcvu0jhvi79f2soj5rh95.apps.googleusercontent.com",
    callback:(res:any)=>this.handleLogin(res)
  });
  google.accounts.id.renderButton(document.getElementById("google-btn"),{
    theme:"filled_blue",
    size:"large",
    shape:"rectangle",
    width:300,
  })
}
private decodeToken(token:string){
  return JSON.parse(atob(token.split(".")[1]));
}
handleLogin(response:any){
if(response){
  //decode the token
  const payload =this.decodeToken(response.credential);
  //store in session
  sessionStorage.setItem("LoggedInUser",JSON.stringify(payload));
  //navigate to home
  this.router.navigate(['browse'])
}
}
}

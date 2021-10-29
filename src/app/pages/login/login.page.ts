import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private auth:AuthentificationService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  
  direction(value){
    console.log("dans direction", value);
    
    this.auth.login(value).then
    (recup=>{
      console.log(recup);
      this.router.navigateByUrl("/accueil")

      
    }),
    (err=>{
      console.log("une erreur", err);
      
    })
  }
}

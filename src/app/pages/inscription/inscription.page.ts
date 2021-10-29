import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  validate: FormGroup;


  constructor(private authService: AuthentificationService,
    private rtDatabase: AngularFireDatabase,
    private formBuilder: FormBuilder,
    private navController:NavController
    
    ) { }

  ngOnInit() {

    this.validate = this.formBuilder.group({
      nom: new FormControl('', Validators.compose([
        Validators.required
      ])),
      
      prenom: new FormControl('', Validators.compose([
        Validators.required
      ])),

      email: new FormControl('', Validators.compose([
        Validators.required
      ])),

      telephone: new FormControl('', Validators.compose([
        Validators.required
      ])),

      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
    })

    
    
  }
  // add() {
  //   this.afDB.list('User/').push({
  //     Prénom: '',
  //     Nom: '',
  //     Tel:'',
  //     Email:''

      
  //   });
  

  // public inscritForm(data:any) {
  //   this.prenom=data.value.prenom;
  //   this.nom=data.value.nom;
  //   this.telephone=data.value.telephone;
  //   this.email=data.value.email;
  //   this.password=data.value.password;
  //   //this.afDB.list('User/').push(data.value);
  //   console.log(data.value);
  // }
  tryRegister(users) {
    console.log(users);
    this.authService.registerUser(users)
      .then(res => {
        console.log(res);
        
        this.rtDatabase.object('utilisateurs/'+ res.user.uid).set({

          prenom: users.prenom,
          nom: users.nom,
          email: users.email,
          tel: users.telephone,
          password: users.password,
          
    
        })
        this.navController.navigateForward('/profile')
        console.log("Votre compte a été créé. Veuillez vous connecter.");
      }, err => {
        console.log(err);
        console.log(err.message);
        
      })
  }
  

  
}

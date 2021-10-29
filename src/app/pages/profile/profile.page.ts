import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NavController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/service/authentification.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  // Déclaration des Variables
  private nom: any;
  private prenom: any;
  private email: any;
  private userId: any;

  constructor(
    private navCtrl: NavController,
    private auth: AngularFireAuth,
    private db: AngularFireDatabase,
    private authService: AuthentificationService
  ) { }

  ngOnInit() {

    this.auth.authState.subscribe(
      (res)=>{
        this.userId = res.uid;
        console.log(this.userId);
        
        this.db.list('utilisateurs/'+this.userId).valueChanges().subscribe(
          data=>{
            this.nom = data[3];
            this.prenom = data[1];
            this.email = data[0];
            
          })
      }
    )

  }

}

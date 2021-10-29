import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import{Router} from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  private nom: any;
  private prenom: any;
  private email: any;
  private userId: any;
 

  constructor(
    public afAuth:AngularFireAuth,
    public route:Router,
    private db: AngularFireDatabase
  ) { }
  logout(){
    this.afAuth.signOut();
    this.route.navigate(["/login"])
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(
      (res)=>{
        this.userId = res.uid;
        console.log(this.userId);
        
        this.db.list('utilisateurs/'+this.userId).valueChanges().subscribe(
          data=>{
            this.nom = data[3];
            this.prenom = data[1];
            this.email = data[0];
            console.log(name);
            
          })
      }
    )
  }

}

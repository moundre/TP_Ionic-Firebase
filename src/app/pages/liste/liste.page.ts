import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage implements OnInit {

  public tlist: any;
  constructor(
    public fireData: AngularFireDatabase

  ) { 
    
  }
  ngOnInit() {
   
    this.fireData.list('utilisateurs/').valueChanges().subscribe(
      (res)=>{
        this.tlist =res;
      }
      );
    
  }

}



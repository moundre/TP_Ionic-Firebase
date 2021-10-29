import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage implements OnInit {
  test: string;

  public alllist: any;
  constructor(
    public fireData: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.fireData.list('utilisateurs/').valueChanges().subscribe(
      (res)=>{
        this.alllist =res;
      }
      );
  }
  
}

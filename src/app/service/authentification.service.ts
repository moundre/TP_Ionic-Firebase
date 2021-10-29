import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {


  constructor(private afAuth: AngularFireAuth,
      private firestore: AngularFireDatabase ) { }
  registerUser(value) {
    return new Promise<any>((resolve, reject) => {

      this.afAuth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    }) 
  
  }
  // userDetails() {
  //   return this.afAuth.user
  // }

  login(value){
    // return new Promise<any>((resolve, reject) => {

    return  this.afAuth.signInWithEmailAndPassword(value.email, value.password)

          // err => reject(err))
    // }) 
  }
  
  
}

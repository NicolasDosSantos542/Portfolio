
import { Injectable } from '@angular/core';

/***********  Represente le profil (fonction) de la personne */
export class Profile {
    constructor(public prId:string, public prName:string) {
    }
}

// Represente la technologie
export class Technology {
    constructor(public techId:number, public techName:string) {
    }
}


export class User {
    userName: string;
    profile: Profile = null;
    technologies: Technology[];
    constructor() {
    }
}


@Injectable() // pour l'injecter sans faire un appel explecite
              // (Exemple passer comme parametre d'un constructeur)
export class UserService {
   getPofiles(): Profile[] {
      let profiles = [
		 new Profile('dev', 'Developpeur'),
		 new Profile('man', 'Manager'),
         new Profile('dir', 'Directeur'),
         new Profile('tst', 'Testeur'),
         new Profile('chf', 'Chef de projet')
      ]
      return profiles;
   }
   getTechnologies(): Technology[] {
      let technologies = [
		 new Technology(100, 'ASP.NET'),
		 new Technology(101, 'Angular7'),
		 new Technology(102, 'Type Script'),
                 new Technology(103, 'C#')
      ]
      return technologies;
   }
   createUser(user: User) {
           //dès qu'on créé un user on affiche ses infos dans la console Log
           console.log("Nom du candidat: " + user.userName);
	   console.log("Profile/Fonction Id: " + user.profile.prId);
	   console.log("Profile/Fonction Nom: " + user.profile.prName);
	   for (let i=0; i < user.technologies.length; i++) {
    	      console.log("Technologie Id: " + user.technologies[i].techId);
	      console.log("Technologie Nom: " + user.technologies[i].techName);
           }
   }
}

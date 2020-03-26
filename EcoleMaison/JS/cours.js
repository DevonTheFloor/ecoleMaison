


/*Affiche le contenu de la page d'acceuil, pour modifier le contenu, il faut modifier le tableau "let cours"*/

function acceuil(){
let affichage = document.getElementById('page');
  
  //tableau listant les cours à afficher
   let cours = ["Anglais","Chimie","Espagnole","Français","Geographie","Histoire","Musique","physique","SVT","Technologie"];
  
  let navigation = document.createElement('nav');
  let list = document.createElement('ul');
  
  //boucle for sur le tableau "cours"
  for(i=0; i<cours.length; i++){
    let lien = document.createElement('a');
    lien.setAttribute("id","link");
    lien.href = "deux.html?matiere="+cours[i];
    let menu = document.createElement('li');
    menu.setAttribute("class","btn-menu");
     menu.setAttribute("class","btn-menu");
    let titre = document.createElement('h2');
    titre.textContent= cours[i] ;
    titre.id= cours[i];
    
    list.appendChild(lien);
    lien.appendChild(menu);
    menu.appendChild(titre);
    
  }
   affichage.appendChild(navigation);
    navigation.appendChild(list);

 };
//evenemrnt load sur la page pour lancer automatiquement le chargement.
window.addEventListener('load',acceuil());




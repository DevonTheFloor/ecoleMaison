


/*Affiche le contenu de la page d'acceuil, pour modifier le contenu, il faut modifier le tableau "let cours"*/

function accueil(){
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
    let titre = document.createElement('h2');
    titre.textContent= cours[i] ;
    titre.id= cours[i];
    
    list.appendChild(lien);
    lien.appendChild(menu);
    menu.appendChild(titre);
    
  }
   affichage.appendChild(navigation);
    navigation.appendChild(list);

  /* function en test de mofification du menu depuis une interphase utilisateur. 
  
function affichFormu(){
let selecmat = document.getElementById('selecmat');
  for (i=0;i<cours.length;i++){
    let opt = document.createElement('option');
    opt.id=cours[i];
    opt.textContent=cours[i];
      selecmat.appendChild(opt);
  }
}
 affichFormu(); 
  */
 };

//evenement load sur la page pour lancer automatiquement le chargement.
window.addEventListener('load',accueill());


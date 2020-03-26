
  /* code JS pour afficher les categories de la matiere consernée, soit cours, soit devoir, etc... modifie ça autant que tu en as besoin.Tuy peux en rajouter en enlever.*/

function service(){
  
  //cette fonction récupère un paramètre dans l'URL, ce qui nous permet de praramétrer la requête sans base de donnée ni réseau.
  let params = new URLSearchParams(document.location.search);
console.log(params);
let matiere = params.get("matiere");
  
  //console log de controle, s'affiche dans les dev tools
console.log("matiere : "+matiere);
 
  //menu des catégories , à adapter en fonction de tes besoins
  let smenu=["Cours","Devoir","TD"];
  
  let page = document.getElementById('page');
   let slist = document.createElement('ul');  
    for(i=0;i<smenu.length;i++){
      let lien = document.createElement('a');
      lien.href="trois.html?doc="+matiere+smenu[i];
      let ssli = document.createElement('li');
      ssli.textContent= smenu[i];
      slist.appendChild(lien);
       lien.appendChild(ssli);  
      
    }
    page.appendChild(slist);

  };
//lancement de la fonctiàn sevice
service();
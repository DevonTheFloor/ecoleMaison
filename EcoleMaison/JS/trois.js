// page finale, elle affiche tous les documents qui correspondent à ta navigation

function listing() {

  //fonction pour faire transiter des paramètres dans l'url, c'est lka même que sur l'utre page.
  let params = new URLSearchParams(document.location.search);
  console.log(params);
  let source = params.get("doc");
  console.log("doc : " + source);

  //console de contrôle , vérifie le bon transite de la donnée, s'affiche dans dev tool
  console.log("source: " + source);


  let tablo;
  //en fonction des paramètres passés par les deux autres page(switch), affiche la liste qui correspond à ta recherche
  switch (source) {

    /*c'est ici que tu vas enregistrer tout tes documents, et oui c'est pas magique, faut bien les inscrire quelque part. Evite les espace dans les noms. Ici c'est le tableau qui va afficher les documents du cours de chimie, comme son nom l'indique. Ce nom doit être le même que les paramètres des URLs. Si tu as des questions poses les sur le workplace ou le discord.
    POUR L'INSTANT IL N'Y EN A QUE TROIS MAIS IL DOIT Y EN AVOIR TROIS FOIS LE NOMBRE DE COURS (ici trente)*/
      
      //============CHIMIE
    case "ChimieCours":

      //les éléments du tableau doivent être le nom exacte des fichiers, ex: electricite-chapitre10.pdf. N'oublie pas l'extension!
      tablo = ["carbon-chap10.pdf", "tablo.pdf"];
      break;

      //ecite les espace, remplace les par des underscore, le fichier cible doit porter l'exacte le même nom
    case "ChimieDevoir":
      tablo = ["chimieDevoir.pdf", "quoi_faire.pdf"];
      break;
    case "ChimieCorrection":
      tablo = ["paracetamolCorrection.pdf", "comment_faire_du_savon.pdf"];
      break;
    default:
//============ANGLAIS
    case "AnglaisDevoir":
      tablo = ["fichier_test.pdf","AnglaisDevoir.pdf", "quoi_faire.pdf"];
      break;
    case "AnglaisCours":
      tablo = ["physiqueDevoir.pdf", "quoi_faire.pdf"];
      break;
    case "AnglaisCorrection":
      tablo = ["physiqueDevoir.pdf", "quoi_faire.pdf"];
      break;
// a toi de mettre en place tous les tableau dont tu as besoin
//====================MATHS
//================= GEOGRAPHIE
//=====================HISTOIRE
      
      
      //message de controle, s'affiche dans la console en cas d'erreur
      console.log("Probleme! Y a pas de tablo!");
  }

  //controle affiche la valeur de tablo si il existe
  console.log("tablo : " + tablo);

  //le même principe de boucle sur le tableau que les deux précédentes pages.
  let page = document.getElementById('page');
  let liste = document.createElement('ul');
  for (i = 0; i < tablo.length; i++) {
    let voir = document.createElement('a');
    voir.href = "doc/"+tablo[i];
    let fichier = document.createElement('li');
    fichier.textContent = tablo[i];
    liste.appendChild(voir);
    voir.appendChild(fichier);
  }
  page.appendChild(liste);

}

console.log("apres tout");

listing();

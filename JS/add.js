function ajouterdate() {
    // Créer les éléments input
    var newdate = document.createElement("input");
    var newheurs = document.createElement("input");

    // Attribuer des ID uniques
    newdate.id = "date_" + Date.now();
    newheurs.id = "heures_" + Date.now();

    // Définir les attributs des champs
    newdate.setAttribute("type", "date");
    newdate.setAttribute("placeholder", "Entrer nouvelle date");
    newdate.classList.add("input-date");

    newheurs.setAttribute("type", "time");
    newheurs.setAttribute("placeholder", "Entrer vos Heures");
    newheurs.classList.add("input-time");

    // Créer les labels
    var labelDate = document.createElement("label");
    labelDate.textContent = "New Date :";
    labelDate.setAttribute("for", newdate.id);  // Associer le label avec l'input 'newdate'

    var labelHeures = document.createElement("label");
    labelHeures.textContent = "New Heure :";
    labelHeures.setAttribute("for", newheurs.id);  // Associer le label avec l'input 'newheurs'

    var container=document.getElementsByClassName("Container")[0];
    container.appendChild(labelDate);   // Ajouter le label pour 'date'
    container.appendChild(newdate);     // Ajouter le champ 'date'
    container.appendChild(labelHeures); // Ajouter le label pour 'heures'
    container.appendChild(newheurs);
}

function RetourAccueil(){
      window.location.href=("file:///C:/Users/LENOVO-User/OneDrive/emplacement_Bureau/learn/JS/Mini_Projects/Todo%20List%20avec%20CRUD%20et%20Local%20Storage/HTML/index.html");
}

var inputmodule = document.getElementById("module");
var inputdate = document.getElementById("dateRevison");
var inputheure = document.getElementById("heure");
var inputexamen = document.getElementById("dateExzmen");

function ValidateForm() {

}
    
var inputmodule = document.getElementById("module");
var inputdate = document.getElementById("dateRevison");
var inputheure = document.getElementById("heure");
var inputexamen = document.getElementById("dateExamen");

var errmod = document.getElementById("errmod");
var errdate = document.getElementById("errdate");
var errheure = document.getElementById("errhr");
var errexm = document.getElementById("errexm");




var TableRevisions =new Array();
var datesheures=[];

function ValidateForm(event) {
    
    event.preventDefault(); // Empêche le rechargement de la page
    let isValid = true;
    datesheures=[];

    // Validation du champ "module"
    if (inputmodule && inputmodule.value.trim() !== "") {
        inputmodule.style.border = "1px solid #ccc"; // Réinitialise le style en cas de validation
        errmod.textContent = ""; // Supprime le message d'erreur
    } else {
        inputmodule.style.border = "2px solid red";
        errmod.textContent = "Enter your module!";
        isValid = false;
    }
    // Validation du champ "dateRevison" pour tous les dates (inclues les dates ajoutés dynamiquement
    document.querySelectorAll(".Container").forEach(container => {
        const date = container.querySelector(".Dates");
        const heure = container.querySelector(".Heure");
        if (date && date.value.trim() === "") {
            date.style.border = "2px solid red"; // Bordure rouge si le champ est vide
            isValid = false; // Formulaire invalide
        } else {
               if(heure && heure.value.trim() === ""){
                heure.style.border = "2px solid red"; // Bordure rouge si le champ est vide
                isValid = false; // Formulaire invalide
               }else{
                date.style.border = "1px solid #ccc"; // Réinitialise la bordure de date
                heure.style.border = "1px solid #ccc"; // Réinitialise la bordure de heure
                datesheures.push({
                    date:date.value,
                    heure:heure.value
                });
               } 
            }
        })
    

    // Validation du champ "dateExamen"
    if (inputexamen && inputexamen.value.trim() !== "") {
        inputexamen.style.border = "1px solid #ccc";
        errexm.textContent = "";
    } else {
        inputexamen.style.border = "2px solid red";
        errexm.textContent = "Enter an exam date!";
        isValid = false;
    }
    // Vérification finale
    if (isValid) {
         var revision = {
            module:inputmodule.value.trim() ,
            dateRevison:datesheures,
            dateExamen: inputexamen.value,
        };
        TableRevisions.push(revision);
        console.log("Formulaire valide :",revision);
        console.log("TableRevisions :", TableRevisions);
       
       
    } else {
        console.log("Le formulaire contient des erreurs.");
    }
}

function ajouterdate() {
    var cont_dateheure = document.createElement("div");
    cont_dateheure.className = "Container";
    // Créer les éléments input
    var newdate = document.createElement("input");
    var newheurs = document.createElement("input");

    // Attribuer des ID uniques
    newdate.id = "date_" + Date.now();
    newheurs.id = "heures_" + Date.now();

     // Attribuer a une class pour tous les dates et heure
     newdate.className="Dates";
     newheurs.className="Heure";

    // Définir les attributs des champs
    newdate.setAttribute("type", "date");
    newdate.setAttribute("placeholder", "Entrer nouvelle date");
    
    newheurs.setAttribute("type", "time");
    newheurs.setAttribute("placeholder", "Entrer vos Heures");

    // Créer les labels
    var labelDate = document.createElement("label");
    labelDate.textContent = "New Date :";
    labelDate.setAttribute("for", newdate.id);  // Associer le label avec l'input 'newdate'

    var labelHeures = document.createElement("label");
    labelHeures.textContent = "New Heure :";
    labelHeures.setAttribute("for", newheurs.id);  // Associer le label avec l'input 'newheurs'

    cont_dateheure.appendChild(labelDate);
    cont_dateheure.appendChild(newdate);
    cont_dateheure.appendChild(labelHeures);
    cont_dateheure.appendChild(newheurs);
   

    var container=document.getElementsByClassName("Container")[0];
    document.querySelector(".Container").appendChild(cont_dateheure);

};

function RetourAccueil(){
      window.location.href=("index.html");
}
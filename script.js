"use strict";
// ----------------
// mise en place de la map
const body = document.getElementsByTagName("body")[0];
const tbl = document.createElement("table");
const tblBody = document.createElement("tbody");
// cases occupees (pour éviter de mettre 2 éléments sur la m^me case)
let cases_occupees = [];
// ----------------
function grille(){

    const rowLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  
    for (let i = 0; i < 8; i++) {
      let row = document.createElement("tr");
      
      for (let j = 1; j <= 36; j++) {
        var cell = document.createElement("td");
        var rowLetter = rowLetters[i];
        
        // Créer l'ID en combinant la lettre de la ligne et le numéro de la colonne
      var cellId = rowLetter + j;
      cell.setAttribute('id', cellId);

      // Créer un élément div
      var div = document.createElement("div");

      // Ajouter la div à la cellule
      cell.appendChild(div);
      div.classList.add('umbrella');

      // Créer un élément paragraphe
      var paragraph = document.createElement("p");

      // Ajouter le texte de l'ID de la cellule au paragraphe
      paragraph.textContent = cellId;

      // Ajouter le paragraphe après la div dans la cellule
      cell.appendChild(paragraph);

      // Ajouter la cellule à la ligne
      row.appendChild(cell);
    }

    tblBody.appendChild(row);
  }

  tbl.setAttribute("id", "map");
  tbl.setAttribute("width", "750px");
  tbl.setAttribute("height", "375px");
  tbl.setAttribute("border","1");

  tbl.appendChild(tblBody);
  body.appendChild(tbl);
}
// ----------------


// ----------------
window.onload = function(){
  grille();
}
// ----------------

// ----------------

function changerCouleurFond(element) {
    var umbrella = element.getElementsByClassName('umbrella')[0];
    var currentColor = umbrella.style.backgroundColor;
    var originalColor = 'green';

    if (currentColor === originalColor || currentColor === '') {
        umbrella.style.backgroundColor = 'blue';

           // Créer la modale
  var modal = document.createElement('div');
  modal.classList.add('modal');

  var dropdown = document.createElement('select');
  dropdown.innerHTML = `
    <option value="1-lit">1 lit</option>
    <option value="1-fauteuil">1 fauteuil de réalisateur</option>
    <option value="2-lits">2 lits</option>
    <option value="2-fauteuils">2 fauteuils de réalisateur</option>
    <option value="1-lit-1-fauteuil">1 lit et 1 fauteuil de réalisateur</option>
  `;

  var validerBtn = document.createElement('button');
  validerBtn.textContent = 'Valider';

  validerBtn.addEventListener('click', function() {
    var selectedOption = dropdown.value;
    // Faire quelque chose avec l'option sélectionnée
    console.log('Option sélectionnée :', selectedOption);

    // Fermer la modale
    modal.remove();
  });

  modal.appendChild(dropdown);
  modal.appendChild(validerBtn);
  document.body.appendChild(modal);

  // Positionner la modale en tant qu'élément superposé
  modal.style.position = 'absolute';
  modal.style.top = '28%';
  modal.style.left = '35%';
  modal.style.backgroundColor = 'rgba(230, 192, 25, 0.856)'; // Fond semi-transparent
  modal.style.zIndex = '9999';
  modal.style.textAlign ='center';
  modal.style.padding = '15px';
  modal.style.border ='1px solid blue'
  modal.style.borderRadius = '10px'

  // Fermer la modale si l'utilisateur clique sur une autre div
  document.addEventListener('click', function(event) {
    var targetElement = event.target;
    if (!modal.contains(targetElement) && targetElement !== element) {
      modal.remove();
    }
  });
    } else {
        umbrella.style.backgroundColor = originalColor;
    }                                              
}

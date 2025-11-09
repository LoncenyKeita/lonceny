// déclaration de variables
var inputField = document.getElementById('inputField');
var ToDoButton = document.getElementById('ToDoButton');
var ToDoContainer = document.getElementById('ToDoContainer');

//création de la fonction click
ToDoButton.onclick = function(){
   
    //verifier si l'input n'est pas vide
    if(inputField.value !=""){
    // si l'input n'est pas vide, créer un paragraphe
    var paragraphe = document.createElement('p');
    }
    //valorisé ce paragraphe avec le contenu input
    paragraphe.innerText = inputField.value;
    //stylisé ce paragraphe
    paragraphe.classList.add('paragraphe_style');
    //inserer le paragraphe
    ToDoContainer.appendChild(paragraphe);
    // vider l'input
    inputField.value="";
    // barré le paragraphe quand on click dessus
    paragraphe.addEventListener('click', function(){paragraphe.classList.add('paragraphe_click')})
    //supprimé quand on double click
    paragraphe.addEventListener('dblclick', function(){ToDoContainer.removeChild(paragraphe)})
    
}
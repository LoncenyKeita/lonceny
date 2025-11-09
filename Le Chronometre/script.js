// Les variables dont a besoins
var span, btn_start, btn_stop, t, ms, s, mn, h;
// Fonction pour initialiser les variables quand la page se charge
window.onload=function(){
    span=document.getElementsByTagName('span');
    btn_start=document.getElementById('start');
    btn_stop=document.getElementById('stop');
    t=null;
     ms=0, s=0, mn=0, h=0;

      
}

// Mise en place du compteur
function update_chrono(){
    ms +=1;
    if(ms==10){
        ms=0;
        s+=1;
    }
    if(s==60){
        s=0;
        mn+=1;
    }
    if(mn==60)
       {
        mn=0,
        h+=1;
       }

// Insertion des valeur dans les spans [0] permet de selectionner le premier span
// [1] permet de selectioner le deuxième span etc...
span[0].innerHTML = h +"h";
span[1].innerHTML = mn +"mn";
span[2].innerHTML = s +"s";
span[3].innerHTML = ms +"ms";

}

// Fonction pour démarrer le chronomètre
function start() {
   
        t = setInterval(update_chrono, 100); // Exécution toutes les 100ms
        btn_start.disabled = true; // Désactiver le bouton "Start"
}

// Fonction pour arrêter le chronomètre
function stop(){
    clearInterval(t) //Permet de d'arrêter le setInterval
    t=null;         // Permet de reinitailiser
    btn_start.disabled = false; // Réactiver le bouton "Start"

}

// Fonction pour réinitialiser le chronomètre
function reset(){
    ms=0, s=0, mn=0, h=0; // Réinitialiser les valeurs
    stop();
if(span.length >=4){
    span[0].innerHTML = h +"0h";
    span[1].innerHTML = mn +"0mn";
    span[2].innerHTML = s +"0s";
    span[3].innerHTML = ms +"0ms";
}
btn_start.disabled = false // Réactiver le bouton start
}

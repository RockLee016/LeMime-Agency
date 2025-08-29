import {addListenerMenuAmberger,
        buble,
        observerSectionChiffre} from "./functions/functions.js"




// Quand on clique sur le menu hamberger dans le mobile
addListenerMenuAmberger ("#menu_amberger", "#menu_contact", "#close_menu");

// Affichage des bulles
buble ("#Nos_realisations");

// Observer de ka section des chiffres
observerSectionChiffre (".counter");
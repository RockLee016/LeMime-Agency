function open_menu (balise) {
    $(balise).removeClass("hidden");

    setTimeout ( () => {
        $(balise).removeClass("-translate-y-4/3");
    }, 50)
}
function close_menu (balise) {
    $(balise).addClass("-translate-y-4/3");
    
    setTimeout ( () => {
        $(balise).removeClass("hidden");
    }, 50)
}



// cette fonction va ajouter un listener sur l'event click du menu amberger
// faire appel à fonction open_penu pour afficher
// LEGEND
    // # baliseName: la balise du menu amberger,
    // # baliseMenu: la balise du contener du menu amberger
export function addListenerMenuAmberger (baliseName, baliseMenu, baliseClose) {
    $(baliseName).on("click", (e) => {
        open_menu (baliseMenu);
    });

    $(baliseClose).on("click", (e) => {
        close_menu (baliseMenu);
    });
}
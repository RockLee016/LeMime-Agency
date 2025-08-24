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



// Cette fonction va faire apparaitre les buble.
export function buble (balise) {
    let count = 200;
    let section = document.querySelector(balise);
    let i = 0;
    while (i < count) {
      let buble = document.createElement('i');
      buble.className = "buble";
      let x = Math.floor(Math.random() * section.offsetWidth);
      let y = Math.floor(Math.random() * section.offsetHeight);
      let size = Math.random() * 10;
      
      buble.style.left = x+"px";
      buble.style.top = 2*y+"px";
      buble.style.width = 2+size+"px";
      buble.style.height = 2+size+"px";
      buble.style.animationDuration = 5+size+"s";
      buble.style.animationDelay = -size+"s";
      section.appendChild(buble);
      i++;
    }
    
}
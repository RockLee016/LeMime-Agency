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



// Cette fonction va afficher un compteur de chiffres de la section Chiffres et les mettre à jour.
// LEGEND:
    // counter: C’est simplement l’élément HTML qu’on anime.
    // target : elle va contenir les chiffres à atteindre
    // duration : la durée de l'animation
    // stepTime : la vitesse de mise à jour de la fonction updateCounter()
    // start : le point de depart
    // increment : le nombre à increment à chaque mise à jour de l'animation
        // Il est trouvé gràce à cette operation dans la fonction afin de determiner par rapport aux chiffres à atteindre, la durée et la vistesse de l'animation le chiffre
        // à incrementer dynamiquement.
    // updateCounter : la fonction de ise à jour de des chiffres visuellement
function animateCounter (counter) {
    const target = +counter.dataset.target ; //cette const va contenir le chiffre exact à atteindre
    const duration = 1000; //Cette const contient la durée total de l'animation en ms
    const stepTime = 50; //La vitesse de mise à jour des chiffres

    let start = 0; //le point de départ des chiffres
    const increment = target / (duration/stepTime); //increment représente la quantité qu’on ajoute au compteur à chaque “pas” de l’animation.

    const updateCounter = () => {
        start += increment;

        if(start < target){
            counter.textContent = Math.floor(start);
            setTimeout(updateCounter, stepTime);
        }else{
            counter.textContent = target
        }
    };

    updateCounter();
}



// cette fonction va observer et detecter des que la section des chiffres rentre dans le viewport
// LEGEND :
    // counter: C’est simplement l’élément HTML qu’on anime.
    // options: sert à régler quand l’animation démarre.
    // threshold: 0.5 → l’élément doit être au moins à moitié visible (50%) dans l’écran pour déclencher l’animation.
    // threshold: 0 → dès qu’il touche l’écran.
    // threshold: 1 → seulement quand il est entièrement visible.
    // observer: l'observer de l'lelemnt HTML à animer.
        // entries : une liste de tous les éléments observés (ici, nos counters).
        // Chaque entry contient des infos :
        //entry.target → l’élément observé (<span class="counter">...)
        // entry.isIntersecting → vrai/faux : est-ce que l’élément est visible à l’écran ?
        // obs → c’est l’observateur lui-même (le “regardeur”). On peut lui dire d’arrêter d’observer un élément avec obs.unobserve(...).
export function observerSectionChiffre (counter) {
    const counters = document.querySelectorAll(counter); //toutes les balises des chiffres
    const options = { threshold: 0.5}; 

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach ( entry => {
            if(entry.isIntersecting){
                animateCounter(entry.target);
                obs.unobserve(entry.target)
            }
        });
    }, options)

    counters.forEach(counter => observer.observe(counter));
}
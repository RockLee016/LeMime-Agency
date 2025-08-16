const swiper = new Swiper (".swiper", {
    loop:true,
    speed: 1200,
    autoplay: { delay: 5000 },
    on:{
        // Initialisation - déclencher les animations du premier slide
        init: function () {
            // Déclencher les animations du premier slide après un court délai
            setTimeout(() => {
                this.emit('slideChangeTransitionEnd');
            }, 100);
        },
        
        // quand le slide est en cours de chargement et la disparition aussi
        slideChangeTransitionStart: function () {
            // Animation de disparition fluide
            const actif_slide = this.slides[this.activeIndex];
            const headline = actif_slide.querySelector(".headline");
            const description = actif_slide.querySelector(".description");
            const cta = actif_slide.querySelector(".cta");
            
            // Disparition séquentielle inverse
            if (cta) {
                cta.classList.remove("opacity-100");
                cta.classList.add("opacity-0");
                cta.classList.remove("animate__zoomIn");
            }
            
            setTimeout(() => {
                if (description) {
                    description.classList.remove("opacity-100");
                    description.classList.add("opacity-0");
                    description.classList.remove("animate__lightSpeedInRight");
                }
            }, 150);
            
            setTimeout(() => {
                if (headline) {
                    headline.classList.remove("opacity-100");
                    headline.classList.add("opacity-0");
                    headline.classList.remove("animate__fadeInDown");
                }
            }, 300);
            
            // Réinitialiser l'overlay
            setTimeout(() => {
                document.querySelectorAll(".slide-overlay").forEach( el => { 
                    el.classList.remove("h-full");
                    el.classList.add("h-0");
                });
            }, 600);
        },
        
        // quand le slide est prêt et afficher à l'écran
        slideChangeTransitionEnd: function () {
            // sélection du slide actif
            const actif_slide = this.slides[this.activeIndex];

            // sélection de slide_overlay, headline, description et cta du slide actif uniquement
            const overlay = actif_slide.querySelector(".slide-overlay");
            const headline = actif_slide.querySelector(".headline");
            const description = actif_slide.querySelector(".description");
            const cta = actif_slide.querySelector(".cta");

            // Animation de l'overlay : carré noir
            overlay.classList.remove("h-0");
            overlay.classList.add("h-full");

            // Apparition séquentielle du contenu
            setTimeout ( () => {
                headline.classList.remove("opacity-0");
                headline.classList.add("opacity-100"); 
                headline.classList.add("animate__fadeInDown");
            }, 300);
            setTimeout ( () => {
                description.classList.remove("opacity-0");
                description.classList.add("opacity-100");
                description.classList.add("animate__lightSpeedInRight");
            }, 600);
            setTimeout ( () => {
                cta.classList.remove("opacity-0");
                cta.classList.add("opacity-100");
                cta.classList.add("animate__zoomIn");
            }, 900);
        }
    }
});
const swiper = new Swiper (".swiper_1", {
    loop:true,
    speed: 1200,
    autoplay: { delay: 5000 },
    
    // Configuration de la pagination
    pagination: {
        el: '.swiper_1 .swiper-pagination',
        clickable: true,
    },
    
    // Configuration des boutons de navigation
    navigation: {
        nextEl: '.swiper_1 .swiper-button-next',
        prevEl: '.swiper_1 .swiper-button-prev',
    },
    
    // Configuration de la scrollbar (optionnel)
    scrollbar: {
        el: '.swiper_1 .swiper-scrollbar',
        draggable: true,
    },
    
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

// Nos réalisation: PUBLICITE
const swiper_pub = new Swiper (".swiper_pub", {
    loop: false,
    speed:800,
    effect: "cards",
    cardsEffect: {
        slideShadows: false,
        perSlideOffset: 20,
        perSlideRotate: 4,
        rotate: true
    },
    pagination: {
        el: '.swiper_pub .swiper-pagination',
        clickable: true,
    },
    
    navigation: {
        prevEl: ".swiper_pub .swiper-button-prev",
        nextEl: ".swiper_pub .swiper-button-next"
    },

    // les animation quand le slide change
    on:{
        init() {
            const root = this.el;
            // assurer la classe base Animate.css + état initial
            root.querySelectorAll(".member_informations").forEach(el => {
            //   el.classList.add("animate__animated");
              el.classList.remove("animate__fadeInUp","animate__fadeOutDown","opacity-80");
            //   el.classList.add("opacity-0");
            });
            const active = root.querySelector(".swiper-slide-active .member_informations");
            if (active) {
              active.classList.remove("opacity-0","animate__fadeOutDown");
              active.classList.add("opacity-80","animate__fadeInUp");
            }
          },
          slideChangeTransitionStart () {
            const root = this.el;
      
            // reset tout le monde
            root.querySelectorAll(".member_informations").forEach(el => {
              el.classList.remove("opacity-80","animate__fadeInUp");
              el.classList.add("opacity-0","animate__fadeOutDown");
            });
      
            // activer uniquement la slide active
            const active = root.querySelector(".swiper-slide-active .member_informations");
            if (active) {
              active.classList.remove("opacity-0","animate__fadeOutDown");
              active.classList.add("opacity-80","animate__fadeInUp");
            }
          }
    }
});

const swiper_mobile = new Swiper (".swiper_pub_mobile", {
    loop:false,
    effect: "cards",
    cardsEffect: {
        slideShadows: false,
        perSlideOffset: 20,
        perSlideRotate: 4,
        rotate: true
    },
    speed: 1200,
    autoplay:{delay:5000}
});

// Nos réalisation: BRANDING & IDENTITE VISUELLE
const swiper_branding = new Swiper (".swiper_branding", {
    loop: false,
    speed:800,
    effect: "cards",
    cardsEffect: {
        slideShadows: false,
        perSlideOffset: 20,
        perSlideRotate: 4,
        rotate: true
    },
    pagination: {
        el: '.swiper_branding .swiper-pagination',
        clickable: true,
    },
    
    navigation: {
        prevEl: ".swiper_branding .swiper-button-prev",
        nextEl: ".swiper_branding .swiper-button-next"
    },

    // les animation quand le slide change
    on:{
        init() {
            const root = this.el;
            // assurer la classe base Animate.css + état initial
            root.querySelectorAll(".member_informations_branding").forEach(el => {
            //   el.classList.add("animate__animated");
              el.classList.remove("animate__fadeInUp","animate__fadeOutDown","opacity-80");
            //   el.classList.add("opacity-0");
            });
            const active = root.querySelector(".swiper-slide-active .member_informations_branding");
            if (active) {
              active.classList.remove("opacity-0","animate__fadeOutDown");
              active.classList.add("opacity-80","animate__fadeInUp");
            }
          },
          slideChangeTransitionStart () {
            const root = this.el;
      
            // reset tout le monde
            root.querySelectorAll(".member_informations_branding").forEach(el => {
              el.classList.remove("opacity-80","animate__fadeInUp");
              el.classList.add("opacity-0","animate__fadeOutDown");
            });
      
            // activer uniquement la slide active
            const active = root.querySelector(".swiper-slide-active .member_informations_branding");
            if (active) {
              active.classList.remove("opacity-0","animate__fadeOutDown");
              active.classList.add("opacity-80","animate__fadeInUp");
            }
          }
    }
});

const swiper_branding_mobile = new Swiper (".swiper_branding_mobile", {
    loop:false,
    effect: "cards",
    cardsEffect: {
        slideShadows: false,
        perSlideOffset: 20,
        perSlideRotate: 4,
        rotate: true
    },
    speed: 1200,
    autoplay:{delay:5000}
});

// Nos réalisation: MARKETING DIGITAL
const swiper_marketing = new Swiper (".swiper_marketing", {
    loop: false,
    speed:800,
    effect: "cards",
    cardsEffect: {
        slideShadows: false,
        perSlideOffset: 20,
        perSlideRotate: 4,
        rotate: true
    },
    pagination: {
        el: '.swiper_marketing .swiper-pagination',
        clickable: true,
    },
    
    navigation: {
        prevEl: ".swiper_marketing .swiper-button-prev",
        nextEl: ".swiper_marketing .swiper-button-next"
    },

    // les animation quand le slide change
    on:{
        init() {
            const root = this.el;
            // assurer la classe base Animate.css + état initial
            root.querySelectorAll(".member_informations_marketing").forEach(el => {
            //   el.classList.add("animate__animated");
              el.classList.remove("animate__fadeInUp","animate__fadeOutDown","opacity-80");
            //   el.classList.add("opacity-0");
            });
            const active = root.querySelector(".swiper-slide-active .member_informations_marketing");
            if (active) {
              active.classList.remove("opacity-0","animate__fadeOutDown");
              active.classList.add("opacity-80","animate__fadeInUp");
            }
          },
          slideChangeTransitionStart () {
            const root = this.el;
      
            // reset tout le monde
            root.querySelectorAll(".member_informations_marketing").forEach(el => {
              el.classList.remove("opacity-80","animate__fadeInUp");
              el.classList.add("opacity-0","animate__fadeOutDown");
            });
      
            // activer uniquement la slide active
            const active = root.querySelector(".swiper-slide-active .member_informations_marketing");
            if (active) {
              active.classList.remove("opacity-0","animate__fadeOutDown");
              active.classList.add("opacity-80","animate__fadeInUp");
            }
          }
    }
});

const swiper_marketing_mobile = new Swiper (".swiper_marketing_mobile", {
    loop:false,
    effect: "cards",
    cardsEffect: {
        slideShadows: false,
        perSlideOffset: 20,
        perSlideRotate: 4,
        rotate: true
    },
    speed: 1200,
    autoplay:{delay:5000}
});

const swiper_temoignage = new Swiper (".swiper_temoignage", {
    freeMode: true,
    spaceBetween: 40,
    breakpoints: {
        768: { slidesPerView: 2 }, // lg
        1024: { slidesPerView: 3 } // lg
    },
    autoplay:{delay:5000},
    speed: 2000,
    // Configuration de la scrollbar (optionnel)
    pagination: {
        el: '.swiper_temoignage .swiper-pagination',
        clickable: true,
    },
})


// Le swiper de la section nos partenaires
const swiper_partenaire = new Swiper (".swiper_partenaire", {
    breakpoints:{
        0:{
            slidesPerView: 3,

            // la configuration de la pagination
            pagination: {
                el: ".swiper_partenaire .swiper-pagination",
                clickable: true
            }
        },
        768: {
            slidesPerView: 6,
        }
    }
});
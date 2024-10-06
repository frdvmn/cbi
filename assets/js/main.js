

document.addEventListener("DOMContentLoaded", () => {

    let openLandingMenu = () => {
        let burgerIcon = document.querySelector('.landing button.menu');
        let burgerMenu = document.querySelector('.landing nav.navigation');
        
        burgerIcon.addEventListener("click", (e) => {
            burgerIcon.classList.toggle('opened');
            burgerIcon.setAttribute('aria-expanded', burgerIcon.classList.contains('opened'));

            burgerMenu.classList.toggle('opened');
            burgerMenu.setAttribute('aria-expanded', burgerIcon.classList.contains('opened'));
        });
    }
    openLandingMenu();

    let burgerHideOnScroll = () => {
        let burgerIcon = document.querySelector('.landing button.menu');
        let scrollPrev = 0;
        window.addEventListener('scroll', function(e) {
            let scrolled = this.scrollY;
            if ( scrolled > 100 && scrolled > scrollPrev && !burgerIcon.classList.contains('opened')) {
                burgerIcon.classList.add('out');
            } else {
                burgerIcon.classList.remove('out');
            }
            scrollPrev = scrolled;
        });
    };
    burgerHideOnScroll();

    
    new Glide('.news-slider', {
        type: 'carousel',
        perView: 1
    }).mount()
      
      
});
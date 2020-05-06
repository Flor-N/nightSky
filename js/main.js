let elM = {
    menuBtn: document.querySelector('.btn_bg'),
    hamburger: document.querySelector('.menu-btn__burger'),
    showMenu: false,
    nav: document.querySelector('.menu')
}

let ftM = {

    openMenu: function() {
        elM.menuBtn.addEventListener('click', ftM.showMenu);
    },

    showMenu: function() {

        if (!elM.showMenu) {
            elM.hamburger.classList.add('open');
            elM.nav.classList.add('open');
            elM.menuBtn.classList.add('open');

            elM.showMenu = true;
        } else {
            elM.hamburger.classList.remove('open');
            elM.nav.classList.remove('open');
            elM.menuBtn.classList.remove('open');

            elM.showMenu = false;
        }

    }

}

ftM.openMenu();
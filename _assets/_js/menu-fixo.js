
setInterval(() => {
    
    if(window.scrollY >= 800) {
    menuFixed.classList.add('menu-fixed')
    }

    else if(window.scrollY < 800) {
    menuFixed.classList.remove('menu-fixed')
    }

}, 100);


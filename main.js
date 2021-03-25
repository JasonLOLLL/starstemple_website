// shared project by Jason and Spencer
let toggleNavStatus = false;

isPhone = () => {
    var mq = window.matchMedia( "(max-width: 480px)" );
    if (mq.matches) {
        return true;
    }
    else {
        return false;
    }
}


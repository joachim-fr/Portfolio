let pcUI = document.getElementById("PCUI");
let mobileUI = document.getElementById("MobileUI");

function UIMobileversion() {
    var ref = document.getElementById("css");
    var href = ref.getAttribute("href");
    if (window.innerHeight > window.innerWidth) {
        if (!href.startsWith("Styles/M")) {
            $(pcUI).hide();
            $(mobileUI).show();
            ref.setAttribute("href", "Styles/" + "M" + href.slice(7));
        } else {
            $(pcUI).hide();
            $(mobileUI).show();
        }
    } else {
        if (href.startsWith("Styles/M")) {
            ref.setAttribute("href", "Styles/" + href.slice(8));
        }
        $(pcUI).show();
        $(mobileUI).hide();
    }
}

window.addEventListener('resize', UIMobileversion);
window.addEventListener('load', UIMobileversion);
window.addEventListener('orientationchange', UIMobileversion);
window.addEventListener('fullscreenchange', UIMobileversion);




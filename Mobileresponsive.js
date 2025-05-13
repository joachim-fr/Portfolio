let pcUI = document.getElementById("PCUI");
let mobileUI = document.getElementById("MobileUI");

function UIMobileversion() {
    var ref = document.getElementById("css");
    if (!ref) return;
    var href = ref.getAttribute("href");
    if (window.innerHeight > window.innerWidth) {
        if (!href.startsWith("M")) {
            $(pcUI).hide();
            $(mobileUI).show();
            ref.setAttribute("href", "M" + href);
        } else {
            $(pcUI).hide();
            $(mobileUI).show();
        }
    } else {
        if (href.startsWith("M")) {
            ref.setAttribute("href", href.substring(1));
        }
        $(pcUI).show();
        $(mobileUI).hide();
    }
}

window.addEventListener('resize', UIMobileversion);
window.addEventListener('load', UIMobileversion);
window.addEventListener('orientationchange', UIMobileversion);
window.addEventListener('fullscreenchange', UIMobileversion);




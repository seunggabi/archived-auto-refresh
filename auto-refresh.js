function init() {
    const url = getCookie("url");
    const count = getCookie("count");
    const period = getCookie("period") || 200;

    if(~location.href.indexOf(url) && count > 0) {
        setCookie("count", count-1, 365);
        setTimeout(callback, period);
    }
}

function callback() {
    location.reload();
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(name, value, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();

    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

(function(){
    init();
})();

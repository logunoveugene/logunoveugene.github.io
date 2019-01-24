var random = Math.random();
if (random >= '0.5') {
    var rand = 1;
} else {
    var rand = 2;
}
;var ab_cookie = getCookie('ab_cookie');
switch (ab_cookie) {
    case 'a':
        break;
    case 'b':
        redirectToB();
        break;
    default:
        if (rand == 1) {
            setCookie('ab_cookie', 'a', 3);
        } else {
            setCookie('ab_cookie', 'b', 3);
            redirectToB();
        }
}

function redirectToB() {
    window.location = "http://javascript.ru"
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = encodeURI(value) + ((exdays == null) ? "" : ("; expires=" + exdate.toUTCString()));
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^s+|s+$/g, "");
        if (x == c_name) {
            return decodeURI(y);
        }
    }
}

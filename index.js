module.exports = ({ title: e, icon: t }) => {

    let r = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        o = document.querySelector("head"),
        c = document.querySelector('link[rel="apple-touch-icon"]'),
        l = document.querySelector('link[rel="icon"]');

    if (((document.title = e || null), r && (c.href = t || "/favicon.ico"), l))
        l.href = t || "/favicon.ico";
    else {
        let e = document.createElement("link");
        e.rel = "icon";
        e.href = t;
        o.appendChild(e);
    }

    return !0;

};

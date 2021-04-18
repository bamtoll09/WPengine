function loadScript(url, callback) {
    var script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    script.onload = callback;
    document.getElementsByTagName("head")[0].appendChild(script);
}
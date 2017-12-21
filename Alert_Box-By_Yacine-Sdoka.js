var div = document.createElement("div");
div.style.backgroundColor = "rgba(0,0,0,0.5)";
div.style.width = "100%";
div.style.height = "100%";
div.style.position = "fixed";
div.style.textAlign = "center";
div.style.transition = "all 250ms";
div.style.opacity = 0;
div.style.top = 0;
div.style.display = "none";
var div2 = document.createElement("div");
div2.style.transition = "all 500ms";
div2.style.height = "40px";
var div3 = document.createElement("div");
div3.style.textAlign = "left";
div3.style.width = "80%";
div3.style.marginLeft = "10%";
div3.style.marginBottom = "-30px";
div3.style.backgroundColor = "white";
div3.style.borderRadius = "5px";
var mes = document.createElement("div");
mes.style.fontSize = "26px";
var domain_hostname = window.location.hostname;
if (!domain_hostname) {
    domain_hostname = "This web";
}
mes.innerHTML = domain_hostname+" Say";
mes.style.textAlign = "center";
var div4 = document.createElement("div");
div4.style.marginLeft = "10px";
div4.style.marginTop = "15px";
div4.style.width = "calc(100% - 25px)";
div4.style.borderRadius = "5px";
var ok_but = document.createElement("button");
ok_but.style.position = "absolute";
ok_but.innerHTML = "ok";
ok_but.style.fontSize = "20px";
ok_but.style.backgroundColor = "#fff";
ok_but.style.color = "#209060";
ok_but.style.cursor = "pointer";
ok_but.style.border = "none";
ok_but.style.outline = "none";
ok_but.style.borderRadius = "10px";
ok_but.style.right = "12%";
ok_but.style.zIndex = 10;
var cen_check = false;
ok_but.onclick = function () {
    cen_check = false;
    div.style.opacity = 0;
    div2.style.marginTop = window.innerHeight+"px";
    setTimeout(function () {
        div.style.display = "none";
        div2.style.marginTop = 0;
        div4.style.height = "";
        div4.innerHTML = "";
    }, 250);
};
div3.appendChild(mes);
div3.appendChild(div4);
div2.appendChild(div3);
div2.appendChild(ok_but);
div.appendChild(div2);
document.body.appendChild(div);
document.body.style.margin = 0;
window.onresize = function () {
    if (cen_check === true) {
        var x = window.innerHeight;
        var xx = div2.offsetHeight;
        var st = ok_but.offsetHeight+10;
        var sx = div4.offsetHeight;
        div3.style.height = sx+xx+st+"px";
        div2.style.marginTop = (((x-sx+xx)/2)-60)+"px";
        if ((sx+xx) > x) {
            div4.style.overflowY = "auto";
            div4.style.overflowX = "hidden";
            div4.style.height = x-220+"px";
            div3.style.height = x-140+"px";
            div2.style.marginTop = ((x-(x-150))/2)+"px";
        }
    }
};
function recover_text(cont) {
    cont = cont.replace(/</g, "&lt;");
    cont = cont.replace(/>/g, "&gt;");
    cont = cont.replace(/\n/g, "<br>");
    return cont;
}
function Alert(content) {
    cen_check = true;
    div.style.display = "block";
    var x = window.innerHeight;
    var xx = div2.offsetHeight;
    var st = ok_but.offsetHeight+10;
    if (!content) {
        content = "";
    }
    div4.innerHTML = recover_text(content);
    var sx = div4.offsetHeight;
    div3.style.height = sx+xx+st+"px";
    div2.style.marginTop = (((x-sx+xx)/2)-60)+"px";
    if ((sx+xx) > x) {
        div4.style.overflowY = "auto";
        div4.style.overflowX = "hidden";
        div4.style.height = x-220+"px";
        div3.style.height = x-140+"px";
        div2.style.marginTop = ((x-(x-150))/2)+"px";
    }
    setTimeout (function () {
        div.style.opacity = 1;
    }, 20);
}

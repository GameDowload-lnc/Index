//This code has been created by yacin akon FB https://fb.me/Yacine.Dj 2017 - 2018
Y_K_Coder = {
    D_Write: function (puted) {
        puted = PutedReChange(pured);
        document.write(puted);
    }
    Write: function (puted, place) {
        puted = PutedReChange(pured);
        if (place) {
            document.getElementById(place).innerHTML=puted;
        }
        else {
            document.body.innerHTML=puted;
        }
    }
}
Y_K_ReCoder = {
    D_Write: function (puted) {
        puted = PutedChange(pured);
        document.write(puted);
    }
    Write: function (puted, place) {
        puted = PutedChange(pured);
        if (place) {
            document.getElementById(place).innerHTML=puted;
        }
        else {
            document.body.innerHTML=puted;
        }
    }
}
var Alfabet = 'ABCDEFGHIJKMNLOPQRSTUVWXYZÀÁÂÃÄÅÆĀĂĄÇĆČŹŻŽÝÜÛÚÙŲŰŮŪÈÉÊËĒĖĘĚĔƏÞŤȚŢÏÎÍÌİĮĪÕÔÓÒŒŐØÖŔŘŁĽĻĹß§ŚŠŞĎĐĢĞĶŇŅŃÑàáâãäåæāăąçćčźżžýüûúùųűůūèéêëēėęěĕəþťțţïîíìıįīõôóòœőøö١٢٣٤٥٦٧٨٩٠ŕřłľļĺśšşďđģğķňņńñ/|_#&$@%×÷€£¥₩+=:;,?!~*.^(){-}[]>"<'+"'abcdefghijklmnopqrstuvwxyz0123456789اأإآىئؤءةبتثحجخدذسشرزطظصضعغفقكمنلهوي";
function AddZ(e) {
    if (e < 10) {
        e = "00" + e;
    }
    else if (e < 100 & e >= 10) {
        e = "0" + e;
    }
    else {
        e = "" + e;
    }
    return e;
}
function PutedChange(TLen) {
    if (this.value) {
        TLen = this.value;
    }
    var Val = TLen.length;
    var Val1 = Alfabet.length;
    TLene = "";
    for (var xc = 0; xc < Val; xc++) {
        if (TLen[xc]) {
            for (var xb = 0; xb < Val1; xb++) {
                if (TLen[xc] === Alfabet[xb]) {
                    var c1 = AddZ(xb+1);
                    var c2 = c1[0]+c1[1];
                    TLene += Alfabet[Math.floor(c2)]+c1[2];
                }
            }
            if (TLen[xc] === " " || TLen[xc] != " ") {
                TLene += "-";
            }
        }
    }
    if (TLen === "") {
        return 0;
    }
    return TLene;
}
function PutedReChange(TLen) {
    var lx = TLen.length;
    TLene1 = "";
    var tf = "";
    for (var xc = 0; xc < lx; xc++) {
        if (TLen[xc] === "-" & TLen[xc+1] === "-") {
            TLene1 += " ";
        }
        else if (TLen[xc] != "-" & TLen[xc+1] != "-" & TLen[xc+2] === "-") {
            var c1 = Alfabet.indexOf(TLen[xc]);
            var c2 = TLen[xc+1];
            tf = Math.floor(c1+""+c2)-1;
            TLene1 += Alfabet[tf];
        }
        if (tf >= Alfabet.length || Alfabet[tf] === undefined) {
            return 0;
        }
    }
    return TLene1;
}
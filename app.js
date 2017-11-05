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
function PutedReChange(TLene) {
    var lx = TLene.length;
    TLene1 = "";
    var tf = "";
    var yu = 0;
    var vg;
    if (TLene === err1) {
        return err1;
    }
    for (var xc = 0; xc < lx; xc++) {
        if (TLene[xc] === "-" & TLene[xc+1] === "-") {
            TLene1 += " ";
        }
        else if (TLene[xc] != "-" & TLene[xc+1] != "-" & TLene[xc+2] != "-" & TLene[xc+3] === "-") {
            yu = 1;
            tf = Math.floor(TLene[xc]+""+TLene[xc+1]+""+TLene[xc+2])-1;
            TLene1 += Alfabet[tf];
            CopyBtn2.style.display="block";
            CopyBtn2.style.opacity="1";
            CopyBtn2.style.height=CopyBtn.offsetHeight+"px";
        }
        if (tf >= Alfabet.length || Alfabet[tf] === undefined) {
            return 0;
        }
    }
    return TLene1;
}
/* Támadó értékek */
var tamado_katona = 1;
var tamado_vedo = 0;
var tamado_tamado = 4;
var tamado_ijasz = 2;
var tamado_lovas = 6;
var tamado_elit = 5;
var tabornokok_bonusz = [0, 0.03, 0.05, 0.06, 0.07, 0.08, 0.1, 0.2];
var erosebb_szorzo = 0.1;

/* Védő értékek */
var vedo_katona = 1;
var vedo_vedo = 4;
var vedo_tamado = 0;
var vedo_ijasz = 6;
var vedo_toronyij = 12;
var vedo_lovas = 2;
var vedo_elit = 5;

var mf_szorzo = 0.4;
var vedelem_szorzo = 0.3;
var verszomj_szorzo = 0.3;

function calculateDefPoints() {
    var faj = $('#csata_vedekezo_faj').val();
    var terulet = parseInt(0+$('#csata_vedekezo_terulet').val());
    var ortornyok = parseInt(0+$('#csata_vedekezo_ortornyok').val());
    var moral = parseInt(0+$('#csata_vedekezo_moral').val());
    var katona = parseInt(0+$('#csata_vedekezo_katona').val());
    var vedo = parseInt(0+$('#csata_vedekezo_vedo').val());
    var tamado = parseInt(0+$('#csata_vedekezo_tamado').val());
    var ijasz = parseInt(0+$('#csata_vedekezo_ijasz').val());
    var lovas = parseInt(0+$('#csata_vedekezo_lovas').val());
    var elit = parseInt(0+$('#csata_vedekezo_elit').val());
    /* Katonák pontjai */
    var points = katona * window.vedo_katona;
    points += vedo * window.vedo_vedo;
    points += tamado * window.vedo_tamado;
    points += lovas * window.vedo_lovas;
    points += elit * window.vedo_elit;
    /* Toronyíjászok pontjai */
    if ((ortornyok*40) < ijasz) {
        var toronyij = ortornyok*40;
        ijasz = ijasz-toronyij;
    } else {
        var toronyij = ijasz;
        ijasz = 0;
    }
    points += ijasz * window.vedo_ijasz;
    points += toronyij * window.vedo_toronyij;
    points = points * (moral/100);
    /* Tornyok pontjai */
    var ortorony_szorzo = (terulet/ortornyok)/100;
    if (ortorony_szorzo > 0.3) {
        ortorony_szorzo = 0.3;
    }
    ortorony_bonusz = points * ortorony_szorzo;
    /* MF pontjai */
    var mf_bonusz = 0;
    if (!$('#csata_vedekezo_szovetseg').is(':checked')) {
        mf_bonusz = points * window.mf_szorzo;
    }
    /* Védelem bónusz */
    var vedelem_bonusz = 0
    if ($('#csata_vedekezo_vedelem').is(':checked')) {
        vedelem_bonusz = points * window.vedelem_szorzo;
    }
    /* Faji bónuszok */
    var faji_bonusz = 0;
    if (faj==1) {
        // elf
        faji_bonusz = points * 0.3;
    } else if (faj==3) {
        // félelf
        faji_bonusz = points * 0.1;
    }
    /* Tudomány bónusz */
    var tudomany_bonusz = 0;
    if ($('#csata_vedekezo_tudos').is(':checked')) {
        var tudomany_szorzo = window.tudomany_alap;
        if (faj==1) {
            // elf
            tudomany_szorzo =  40;
        } else if (faj==2) {
            // ork
            tudomany_szorzo = 40;
        } else if (faj==4) {
            // törpe
            tudomany_szorzo = 40;
        } else if (faj==5) {
            // gnóm
            tudomany_szorzo = 50;
        } else if (faj==7) {
            tudomany_szorzo = 0;
        }
        if (szemelyiseg==8) {
            // tudós
            tudomany_szorzo += 5;
        }
        tudomany_bonusz = points * (tudomany_szorzo/100);
    }
    points += tudomany_bonusz;
    points += faji_bonusz;
    points += mf_bonusz;
    points += ortorony_bonusz;
    points += vedelem_bonusz;
    return points;
}

function calculateAttPoints() {
    var faj = $('#csata_tamado_faj').val();
    var moral = parseInt(0+$('#csata_tamado_moral').val());
    var katona = parseInt(0+$('#csata_tamado_katona').val());
    var vedo = parseInt(0+$('#csata_tamado_vedo').val());
    var tamado = parseInt(0+$('#csata_tamado_tamado').val());
    var ijasz = parseInt(0+$('#csata_tamado_ijasz').val());
    var lovas = parseInt(0+$('#csata_tamado_lovas').val());
    var elit = parseInt(0+$('#csata_tamado_elit').val());
    var tabornok = parseInt(0+$('#csata_tamado_tabornok').val());
    /* Katonák pontjai */
    var points = katona * window.tamado_katona;
    points += vedo * window.tamado_vedo;
    points += tamado * window.tamado_tamado;
    points += ijasz * window.tamado_ijasz;
    points += lovas * window.tamado_lovas;
    points += elit * window.tamado_elit;
    points = points * (moral/100);
    var tabornok_bonusz = points * window.tabornokok_bonusz[tabornok];
    /* Erősebb megtámadásáért járó bónusz */
    var erosebb_bonusz = 0;
    if ($('#csata_tamado_erosebb').is(':checked')) {
        erosebb_bonusz = points * window.erosebb_szorzo;
    }
    /* MF bónusz */
    var mf_bonusz = 0
    if (!$('#csata_tamado_szovetseg').is(':checked')) {
        mf_bonusz = points * window.mf_szorzo;
    }
    /* Vérszomj bónusz */
    var verszomj_bonusz = 0
    if ($('#csata_tamado_verszomj').is(':checked')) {
        verszomj_bonusz = points * window.verszomj_szorzo;
    }
    /* Faji bónuszok */
    var faji_bonusz = 0;
    if (faj==2) {
        // ork
        faji_bonusz = points * 0.3;
    }
    /* Faji maluszok */
    var faji_malusz = 0;
    if (faj==3) {
        // félelf
        faji_malusz = points * 0.1;
    }
    /* Tudomány bónusz */
    var tudomany_bonusz = 0;
    if ($('#csata_tamado_tudos').is(':checked')) {
        var tudomany_szorzo = window.tudomany_alap;
        if (faj==1) {
            // elf
            tudomany_szorzo =  40;
        } else if (faj==2) {
            // ork
            tudomany_szorzo = 40;
        } else if (faj==4) {
            // törpe
            tudomany_szorzo = 40;
        } else if (faj==5) {
            // gnóm
            tudomany_szorzo = 50;
        } else if (faj==7) {
            tudomany_szorzo = 0;
        }
        if (szemelyiseg==8) {
            // tudós
            tudomany_szorzo += 5;
        }
        tudomany_bonusz = points * (tudomany_szorzo/100);
    }
    points += tudomany_bonusz;
    points += faji_bonusz;
    points -= faji_malusz;
    points += tabornok_bonusz;
    points += erosebb_bonusz;
    points += mf_bonusz;
    points += verszomj_bonusz;
    return points;
}

function showFightResult() {
    $("#csata_vedekezo").html("Védekező");
    $("#csata_tamado").html("Támadó");
    var def = parseInt(calculateDefPoints());
    var att = parseInt(calculateAttPoints());
    if (def > att) {
        /* A védők nyertek */
        $("#csata_vedekezo").html($("#csata_vedekezo").html()+" <span style='font-size: smaller'>("+def+" pont)</span>");
        $("#csata_tamado").html($("#csata_tamado").html()+" <span style='font-size: smaller'>("+att+" pont)</span>");
        $("#csata_vedekezo").css("color", "green");
        $("#csata_tamado").css("color", "red");
    } else {
        /* A támadók nyertek */
        $("#csata_tamado").html($("#csata_tamado").html()+" <span style='font-size: smaller'>("+def+" pont)</span>");
        $("#csata_vedekezo").html($("#csata_vedekezo").html()+" <span style='font-size: smaller'>("+att+" pont)</span>");
        $("#csata_tamado").css("color", "green");
        $("#csata_vedekezo").css("color", "red");
    }
}
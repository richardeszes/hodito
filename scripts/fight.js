/* Támadó értékek */
var tamado = {katona:1, vedo:0, tamado:4, ijasz:2, lovas:6, elit:5};
var tabornokok_bonusz = [0, 0.03, 0.05, 0.06, 0.07, 0.08, 0.1, 0.2];
var erosebb_szorzo = 0.1;

/* Védő értékek */
var vedo = {katona:1, vedo:4, tamado:0, ijasz:6, lovas:2, elit:5};
var szabadsag = [0, 0.1, 0.2, 0.3];

/* Élőhalott szintenkénti bónusz */
var elohalott_szint = [0.4, 0.3, 0.2, 0.1, 0];

/* Faji bónuszok */
var bonuszok = [{
					// elf
					ferohely: 1, // szorzó a barakk- és őrtorony férőhelyhez
					vedekezes: 0.3, // szorzó a védekezés bónusz kiszámításához (<1, ha nincs: 0)
					tamadas: 0 // szorzó a támadás bónusz kiszámításához (<1, ha nincs: 0)
				},
				{
					// ork
					ferohely: 1, // szorzó a barakk- és őrtorony férőhelyhez
					vedekezes: 0, // szorzó a védekezés bónusz kiszámításához (<1, ha nincs: 0)
					tamadas: 0.3 // szorzó a támadás bónusz kiszámításához (<1, ha nincs: 0)
				},
				{
					// félelf
					ferohely: 1, // szorzó a barakk- és őrtorony férőhelyhez
					vedekezes: 0.1, // szorzó a védekezés bónusz kiszámításához (<1, ha nincs: 0)
					tamadas: 0 // szorzó a támadás bónusz kiszámításához (<1, ha nincs: 0)
				},
				{
					// törpe
					ferohely: 1.2, // szorzó a barakk- és őrtorony férőhelyhez
					vedekezes: 1.2, // szorzó a védekezés bónusz kiszámításához (<1, ha nincs: 0)
					tamadas: 0 // szorzó a támadás bónusz kiszámításához (<1, ha nincs: 0)
				},
				{
					// gnóm
					ferohely: 1, // szorzó a barakk- és őrtorony férőhelyhez
					vedekezes: 0, // szorzó a védekezés bónusz kiszámításához (<1, ha nincs: 0)
					tamadas: 0 // szorzó a támadás bónusz kiszámításához (<1, ha nincs: 0)
				},
				{
					// óriás
					ferohely: 1, // szorzó a barakk- és őrtorony férőhelyhez
					vedekezes: 0.15, // szorzó a védekezés bónusz kiszámításához (<1, ha nincs: 0)
					tamadas: 0.15 // szorzó a támadás bónusz kiszámításához (<1, ha nincs: 0)
				},
				{
					// élőhalott
					ferohely: 1, // szorzó a barakk- és őrtorony férőhelyhez
					vedekezes: 0, // szorzó a védekezés bónusz kiszámításához (<1, ha nincs: 0)
					tamadas: 0 // szorzó a támadás bónusz kiszámításához (<1, ha nincs: 0)
				},
				{
					// ember
					ferohely: 1, // szorzó a barakk- és őrtorony férőhelyhez
					vedekezes: 0, // szorzó a védekezés bónusz kiszámításához (<1, ha nincs: 0)
					tamadas: 0 // szorzó a támadás bónusz kiszámításához (<1, ha nincs: 0)
				}];

var mf_szorzo = 0.4;
var vedelem_szorzo = 0.3;
var verszomj_szorzo = 0.3;

function calculateDefPoints() {
    var faj = $('#csata_vedekezo_faj').val();
    var szint = $('#csata_szint').val();
    var szabadsagon = parseInt($('#csata_vedekezo_szovetseg_szabadsagon').val());
    var terulet = parseInt($('#csata_vedekezo_terulet').val());
    var ortornyok = parseInt($('#csata_vedekezo_ortornyok').val());
    var moral = parseInt($('#csata_vedekezo_moral').val());
    var katona = parseInt($('#csata_vedekezo_katona').val());
    var vedo = parseInt($('#csata_vedekezo_vedo').val());
    var tamado = parseInt($('#csata_vedekezo_tamado').val());
    var ijasz = parseInt($('#csata_vedekezo_ijasz').val());
    var lovas = parseInt($('#csata_vedekezo_lovas').val());
    var elit = parseInt($('#csata_vedekezo_elit').val());
    /* Katonák pontjai */
    var points = katona * window.vedo.katona;
    points += vedo * window.vedo.vedo;
    points += tamado * window.vedo.tamado;
    points += lovas * window.vedo.lovas;
    points += elit * window.vedo.elit;
    points += ijasz * window.vedo.ijasz;
    /* Toronyíjászok pontjai */
    var lakashelyzeti_szorzo = parseInt($('#csata_vedekezo_lakashelyzet_tudomany').val());
    if (faj==7) {
	    // élőhalott
	    lakashelyzeti_szorzo = window.elohalott_bonusz[szint-1];
	}
    var toronyij_szorzo = window.vedo.ijasz;
	if (faj == 1) {
		//elf
		toronyij_szorzo = 8;
	}
	if (ijasz > (ortornyok * 40 * (1+(lakashelyzeti_szorzo/100)) * window.bonuszok[faj-1].ferohely)) {
		toronyij = ijasz;
	} else {
		toronyij = ortornyok * 40 * (1+(lakashelyzeti_szorzo/100)) * window.bonuszok[faj-1].ferohely;
	}
    var toronyij_szorzo = window.vedo.ijasz;
    if (faj==3) {
        // elf
        toronyij_szorzo += 2;
    }
    points += ijasz * window.vedo.ijasz;
    points += toronyij * toronyij_szorzo;
    points = points * (moral/100);
    /* Tornyok pontjai */
    if (faj==5) {
        // gnóm
        if (terulet==0 || ortornyok==0) {
            var ortorony_szorzo = 0;
        } else {
            var ortorony_szorzo = (ortornyok/terulet)*3;
        }
    } else {
        if (terulet==0 || ortornyok==0) {
            var ortorony_szorzo = 0;
        } else {
            var ortorony_szorzo = (ortornyok/terulet)*2;
        }
    }
    if (ortorony_szorzo > 0.3) {
        ortorony_szorzo = 0.3;
    }
    ortorony_bonusz = points * ortorony_szorzo;
    /* MF pontjai */
    var mf_bonusz = 0;
    if (!($('#csata_vedekezo_szovetseg').is(':checked'))) {
        mf_bonusz = points * window.mf_szorzo;
    }
    /* Védelem bónusz */
    var vedelem_bonusz = 0;
    if ($('#csata_vedekezo_vedelem').is(':checked')) {
        vedelem_bonusz = points * window.vedelem_szorzo;
    }
    /* Faji bónuszok */
    var faji_bonusz = points * window.bonuszok[faj-1].vedekezes;
    if (faj==7) {
        // élőhalott
        faji_bonusz = points * window.elohalott_szint[szint-1];
    }
    /* Tudomány bónusz */
    var hadugyi_szorzo = parseInt($('#csata_vedekezo_hadugy_tudomany').val());
    var hadugyi_bonusz = points * (hadugyi_szorzo/100);
    /* Szabadságon lévő szövetségesek után járó bónusz */
    var szabadsag_bonusz = 0;
    if ($('#csata_vedekezo_szovetseg').is(':checked')) {
	    if (szabadsagon > 3) {
	    	szabadsagon = 3;
	    }
	    if (szabadsagon > 0) {
	    	szabadsag_bonusz = points * window.szabadsag[szabadsagon];
	    }
    }
    console.log('[VÉD] base='+points);
    points += hadugyi_bonusz;
    points += faji_bonusz;
    points += mf_bonusz;
    points += ortorony_bonusz;
    points += vedelem_bonusz;
    points += szabadsag_bonusz;
    console.log('[VÉD] hadugyi_bonusz='+hadugyi_bonusz);
    console.log('[VÉD] faji_bonusz='+faji_bonusz);
    console.log('[VÉD] mf_bonusz='+mf_bonusz);
    console.log('[VÉD] ortorony_bonusz='+ortorony_bonusz);
    console.log('[VÉD] vedelem_bonusz='+vedelem_bonusz);
    console.log('[VÉD] szabadsag_bonusz='+szabadsag_bonusz);
    console.log('[VÉD] sum='+points);
    return points;
}

function calculateAttPoints() {
    var faj = $('#csata_tamado_faj').val();
    var szint = $('#csata_szint').val();
    var moral = parseInt($('#csata_tamado_moral').val());
    var katona = parseInt($('#csata_tamado_katona').val());
    var vedo = parseInt($('#csata_tamado_vedo').val());
    var tamado = parseInt($('#csata_tamado_tamado').val());
    var ijasz = parseInt($('#csata_tamado_ijasz').val());
    var lovas = parseInt($('#csata_tamado_lovas').val());
    var elit = parseInt($('#csata_tamado_elit').val());
    var tabornok = parseInt($('#csata_tamado_tabornok').val());
    /* Katonák pontjai */
    var points = katona * window.tamado.katona;
    points += vedo * window.tamado.vedo;
    points += tamado * window.tamado.tamado;
    points += ijasz * window.tamado.ijasz;
    points += lovas * window.tamado.lovas;
    points += elit * window.tamado.elit;
    points = points * (moral/100);
    var tabornok_bonusz = points * window.tabornokok_bonusz[tabornok-1];
    /* Erősebb megtámadásáért járó bónusz */
    var erosebb_bonusz = 0;
    if ($('#csata_tamado_erosebb').is(':checked')) {
        erosebb_bonusz = points * window.erosebb_szorzo;
    }
    /* MF bónusz */
    var mf_bonusz = 0
    if (!($('#csata_tamado_szovetseg').is(':checked'))) {
        mf_bonusz = points * window.mf_szorzo;
    }
    /* Vérszomj bónusz */
    var verszomj_bonusz = 0
    if ($('#csata_tamado_verszomj').is(':checked')) {
        verszomj_bonusz = points * window.verszomj_szorzo;
    }
    /* Faji bónuszok */
    var faji_bonusz = points * window.bonuszok[faj-1].tamadas;
    if (faj==7) {
        // élőhalott
        faji_bonusz = points * window.elohalott_szint[szint-1];
    }
    /* Faji maluszok */
    var faji_malusz = 0;
    if (faj==3) {
        // félelf
        faji_malusz = points * 0.1;
    }
    /* Tudomány bónusz */
    var tudomany_szorzo = parseInt($('#csata_tamado_tudomany').val());
    var tudomany_bonusz = points * (tudomany_szorzo/100);
    console.log('[TÁM] base='+points);
    points += tudomany_bonusz;
    points += faji_bonusz;
    points -= faji_malusz;
    points += tabornok_bonusz;
    points += erosebb_bonusz;
    points += mf_bonusz;
    points += verszomj_bonusz;
    console.log('[TÁM] tudomany_bonusz='+tudomany_bonusz);
    console.log('[TÁM] faji_bonusz='+faji_bonusz);
    console.log('[TÁM] faji_malusz='+faji_malusz);
    console.log('[TÁM] tabornok_bonusz='+tabornok_bonusz);
    console.log('[TÁM] erosebb_bonusz='+erosebb_bonusz);
    console.log('[TÁM] mf_bonusz='+mf_bonusz);
    console.log('[TÁM] verszomj_bonusz='+verszomj_bonusz);
    console.log('[TÁM] sum='+points);
    return points;
}

function showFightResult() {
    $("#csata_vedekezo").html("Védekező");
    $("#csata_tamado").html("Támadó");
    $("#csata_vedekezo").css("color", "");
    $("#csata_tamado").css("color", "");
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
        $("#csata_tamado").html($("#csata_tamado").html()+" <span style='font-size: smaller'>("+att+" pont)</span>");
        $("#csata_vedekezo").html($("#csata_vedekezo").html()+" <span style='font-size: smaller'>("+def+" pont)</span>");
        $("#csata_tamado").css("color", "green");
        $("#csata_vedekezo").css("color", "red");
    }
}

function setAttSciMax(elem) {
	var faj = $('#csata_tamado_faj').val()-1;
    var tudomany_szorzo = window.tudomany[faj].hadugy;
	if ($('#csata_tamado_tudos').is(':checked')) {
		// tudós
		window.tudomany[faj].tudos;
	}
	$('#'+elem).val(tudomany_szorzo);
}

function setDefSciMax(elem) {
	var faj = $('#csata_vedekezo_faj').val()-1;
    if (elem=='hadugy') {
	    var tudomany_szorzo = window.tudomany[faj].hadugy;
		if ($('#csata_vedekezo_tudos').is(':checked')) {
			// tudós
			window.tudomany[faj].tudos;
		}
    } else if (elem=='lakashelyzet') {
    	var tudomany_szorzo = window.tudomany[faj].lakashelyzet
    }
	$('#csata_vedekezo_'+elem+'_tudomany').val(tudomany_szorzo);
}

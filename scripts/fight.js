function szamolVedoertek() {
	/* --- Alappontok --- */
    var pontok = parseInt($('#csata_vedekezo_katona').val()) * window.egysegek.katona.vedoertek;
    pontok += parseInt($('#csata_vedekezo_vedo').val()) * window.egysegek.vedo.vedoertek;
    pontok += parseInt($('#csata_vedekezo_tamado').val()) * window.egysegek.tamado.vedoertek;
    pontok += parseInt($('#csata_vedekezo_lovas').val()) * window.egysegek.lovas.vedoertek;
    pontok += parseInt($('#csata_vedekezo_elit').val()) * window.egysegek.elit.vedoertek;
    var lakashelyzet = parseInt($('#csata_vedekezo_lakashelyzet_tudomany').val());
    var faj = $('#csata_vedekezo_faj').val();
    if (faj==6) {
	    // élőhalott
    	var szint = $('#csata_szint').val();
	    lakashelyzet = window.elohalott_bonusz[szint];
	}
    var toronyij_vedoertek = window.egysegek.ijasz.vedoertek;
    if (faj==0) {
    	// elf
    	toronyij_vedoertek = 8;
    }
    var ortornyok = parseInt($('#csata_vedekezo_ortornyok').val());
    if (parseInt($('#csata_vedekezo_ijasz').val()) < (ortornyok * 40 * (1+(lakashelyzet/100)) * window.fajok[faj].ferohely)) {
		var toronyij = parseInt($('#csata_vedekezo_ijasz').val()); 
		//ha kevesebb íjász van, akkor kell az íjászok száma
	} else {
		var toronyij = ortornyok * 40 * (1+(lakashelyzet/100)) * window.fajok[faj].ferohely;
		//ha több az íjász, vagy ugyananni, mint elférne, akkor kell a tornyokban elférő 
	}
    pontok += parseInt($('#csata_vedekezo_ijasz').val()) * window.egysegek.ijasz.vedoertek;
    pontok += toronyij * toronyij_vedoertek;
    
    /* --- Morál --- */
    if (parseInt($('#csata_vedekezo_moral').val()) == 0) {
    	return 0;
    }
    pontok = pontok * (parseInt($('#csata_vedekezo_moral').val())/100);
    
    /* --- Őrtornyok --- */
    var terulet = parseInt($('#csata_vedekezo_terulet').val());
    var ortorony_szorzo = 1;
    if (faj==4) {
        // gnóm
        if (terulet!=0) {
            var ortorony_szorzo = 1+(ortornyok/terulet)*3;
        }
    } else {
        if (terulet!=0) {
            var ortorony_szorzo = 1+(ortornyok/terulet)*2;
        }
    }
    if (ortorony_szorzo > 1.3) {
        ortorony_szorzo = 1.3;
    }
    pontok = pontok * ortorony_szorzo;
    
    /* --- Magányos farkas --- */
    if (!($('#csata_vedekezo_szovetseg').is(':checked'))) {
    	pontok = pontok * window.mf_szorzo;
    }
    
    /* --- Védelem varázslat --- */
    if ($('#csata_vedekezo_vedelem').is(':checked')) {
    	pontok = pontok * window.vedelem_szorzo;
    }
    
    /* --- Faji bónuszok/maluszok --- */
    pontok = pontok * window.fajok[faj].vedekezes;
    if ($('#csata_vedo_orkbonusz').is(':checked')) {
    	pontok = pontok * 1.2;
    }
    
    /* --- Tudomány --- */
    pontok = pontok * (1+(parseInt($('#csata_vedekezo_hadugy_tudomany').val())/100));
    
    /* --- Szövetséges szabadságon --- */
    var szabadsagon = parseInt($('#csata_vedekezo_szovetseg_szabadsagon').val());
    if ($('#csata_vedekezo_szovetseg').is(':checked')) {
	    if (szabadsagon > 3) {
	    	szabadsagon = 3;
	    }
	    if (szabadsagon > 0) {
	    	pontok = pontok * window.szabadsag[szabadsagon];
	    }
    }
    
    /* --- Terület alapú védelem --- */
    if (pontok < terulet) {
    	pontok = terulet;
    }
    
    return pontok;
}

function szamolTamadoertek() {
	/* --- Alappontok --- */
	var pontok = parseInt($('#csata_tamado_katona').val()) * window.egysegek.katona.tamadoertek;
    pontok += parseInt($('#csata_tamado_vedo').val()) * window.egysegek.vedo.tamadoertek;
    pontok += parseInt($('#csata_tamado_tamado').val()) * window.egysegek.tamado.tamadoertek;
    pontok += parseInt($('#csata_tamado_ijasz').val()) * window.egysegek.lovas.tamadoertek;
    pontok += parseInt($('#csata_tamado_lovas').val()) * window.egysegek.lovas.tamadoertek;
    pontok += parseInt($('#csata_tamado_elit').val()) * window.egysegek.elit.tamadoertek;
    
    /* --- Morál --- */
    if (parseInt($('#csata_tamado_moral').val()) == 0) {
    	return 0;
    }
    pontok = pontok * (parseInt($('#csata_tamado_moral').val())/100);
    
    
    /* --- Tábornokok --- */
    var tabornokok = parseInt($('#csata_tamado_tabornok').val());
    if (tabornokok == 0) {
    	return 0;
    }
    pontok = pontok * window.tabornokok_bonusz[tabornokok];
    
    /* --- Erősebb megtámadása --- */
    if ($('#csata_tamado_erosebb').is(':checked')) {
    	pontok = pontok * window.erosebb_szorzo;
    }
    
    /* --- Magányos farkas --- */
    if (!($('#csata_tamado_szovetseg').is(':checked'))) {
        pontok = pontok * window.mf_szorzo;
    }
    
    /* --- Vérszomj varázslat --- */
    if ($('#csata_tamado_verszomj').is(':checked')) {
    	pontok = pontok * window.verszomj_szorzo;
    }
    
    /* --- Faji bónuszok/maluszok --- */
    var faj = $('#csata_tamado_faj').val();
    if (faj==6) {
        // élőhalott
        pontok = pontok * window.elohalott_szint[szint];
    } else {
    	pontok = pontok * window.fajok[faj].tamadas;
    }
    
    /* --- Tudomány --- */
    pontok = pontok * (1+(parseInt($('#csata_tamado_tudomany').val())/100));
    
    return pontok
}

function mutatCsataEredmeny() {
    $("#csata_vedekezo").html("Védekező");
    $("#csata_tamado").html("Támadó");
    $("#csata_vedekezo").css("color", "");
    $("#csata_tamado").css("color", "");
    var ved = parseInt(szamolVedoertek());
    var tam = parseInt(szamolTamadoertek());
    if (ved > tam) {
        /* A védők nyertek */
        $("#csata_vedekezo").html($("#csata_vedekezo").html()+" <span style='font-size: smaller'>("+ved+" pont)</span>");
        $("#csata_tamado").html($("#csata_tamado").html()+" <span style='font-size: smaller'>("+tam+" pont)</span>");
        $("#csata_vedekezo").css("color", "green");
        $("#csata_tamado").css("color", "red");
    } else {
        /* A támadók nyertek */
        $("#csata_tamado").html($("#csata_tamado").html()+" <span style='font-size: smaller'>("+tam+" pont)</span>");
        $("#csata_vedekezo").html($("#csata_vedekezo").html()+" <span style='font-size: smaller'>("+ved+" pont)</span>");
        $("#csata_tamado").css("color", "green");
        $("#csata_vedekezo").css("color", "red");
    }
}

function beallitTamadoMaxTud(elem) {
	var faj = $('#csata_tamado_faj').val();
    var tudomany_szorzo = window.fajok[faj].tudomany.hadugy-1;
	if ($('#csata_tamado_tudos').is(':checked')) {
		// tudós
		tudomany_szorzo = tudomany_szorzo + window.fajok[faj].tudos_bonusz;
	}
	var tudomany = parseInt(tudomany_szorzo*100);
	$('#'+elem).val(tudomany);
}

function beallitVedekezoMaxTud(elem) {
	var faj = $('#csata_vedekezo_faj').val();
    if (elem=='hadugy') {
	    var tudomany_szorzo = window.fajok[faj].tudomany.hadugy-1;
		if ($('#csata_vedekezo_tudos').is(':checked')) {
			// tudós
			tudomany_szorzo = tudomany_szorzo + window.fajok[faj].tudos_bonusz;
		}
    } else if (elem=='lakashelyzet') {
    	var tudomany_szorzo = window.fajok[faj].tudomany.lakashelyzet-1;
    }
    var tudomany = parseInt(tudomany_szorzo*100);
	$('#csata_vedekezo_'+elem+'_tudomany').val(tudomany);
}

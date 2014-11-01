/* Faji változók */
var tudomany= [{
				// elf
				ipar: 30,
				gazdasag: 30,
				mezogazdasag: 30,
				lakashelyzet: 30,
				banyaszat: 30,
				hadugy: 40,
				magia: 40,
				tolvajlas: 30,
				tudos: 5
		 	},
		 	{
		 		// ork
				ipar: 30,
				gazdasag: 30,
				mezogazdasag: 40,
				lakashelyzet: 30,
				banyaszat: 30,
				hadugy: 40,
				magia: 30,
				tolvajlas: 30,
				tudos: 5
			},
			{
				// félelf
				ipar: 30,
				gazdasag: 30,
				mezogazdasag: 30,
				lakashelyzet: 40,
				banyaszat: 30,
				hadugy: 30,
				magia: 30,
				tolvajlas: 40,
				tudos: 5
			},
			{
				// törpe
				ipar: 40,
				gazdasag: 30,
				mezogazdasag: 30,
				lakashelyzet: 30,
				banyaszat: 30,
				hadugy: 40,
				magia: 30,
				tolvajlas: 30,
				tudos: 5
			},
		 	{
				// gnóm
				ipar: 50,
				gazdasag: 50,
				mezogazdasag: 50,
				lakashelyzet: 50,
				banyaszat: 50,
				hadugy: 50,
				magia: 50,
				tolvajlas: 50,
				tudos: 5
			},
			{
				// óriás
				ipar: 30,
				gazdasag: 30,
				mezogazdasag: 30,
				lakashelyzet: 40,
				banyaszat: 30,
				hadugy: 30,
				magia: 40,
				tolvajlas: 30,
				tudos: 5
			},
			{
				// élőhalott
				ipar: 0,
				gazdasag: 0,
				mezogazdasag: 0,
				lakashelyzet: 0,
				banyaszat: 0,
				hadugy: 0,
				magia: 0,
				tolvajlas: 0,
				tudos: 0
			},
			{
				// ember
				ipar: 30,
				gazdasag: 30,
				mezogazdasag: 30,
				lakashelyzet: 30,
				banyaszat: 30,
				hadugy: 30,
				magia: 30,
				tolvajlas: 30,
				tudos: 5
			}];

/* Katonai állandók */
var barakk_hely = 40;
var kocsma_hely = 40;
var templom_hely = 100;

/* Gazdasági állandók */
var banya_szorzo = 7;
var fegyver_szorzo = 3;
var tanya_szorzo = 50;
var raktar_gabona_szorzo = 1000;
var raktar_nyersanyag_szorzo = 300;
var raktar_fegyver_szorzo = 100;
var haz_szorzo = 50;
var ures_szorzo = 8;
var gabona_fogyasztas = 5;
var ember = 15;
var piac_ember = 50;

/* Egyéb állandók */
var tudomany_alap = 30;
var elohalott_bonusz = [60, 50, 40, 30, 20];

/* Tudományok maximális értékének meghatározása vagy beállítása */
function checkSciMax(setmax) {
    var faj = $('#orszag_faj').val()-1;
    var szemelyiseg = $('#orszag_szemelyiseg').val();
    var bonusz = 0;
    if (szemelyiseg==8) {
    	bonusz = window.tudomany[faj].tudos;
    }
    if (setmax) {
        $('#tudomany_ipar').val(window.tudomany[faj].ipar+bonusz);
        $('#tudomany_gazdasag').val(window.tudomany[faj].gazdasag+bonusz);
        $('#tudomany_mezogazdasag').val(window.tudomany[faj].mezogazdasag+bonusz);
        $('#tudomany_lakashelyzet').val(window.tudomany[faj].lakashelyzet);
        $('#tudomany_banyaszat').val(window.tudomany[faj].banyaszat+bonusz);
        $('#tudomany_hadugy').val(window.tudomany[faj].hadugy+bonusz);
        $('#tudomany_magia').val(window.tudomany[faj].magia+bonusz);
        $('#tudomany_tolvajlas').val(window.tudomany[faj].tolvajlas+bonusz);
    } else {
        if ($('#tudomany_ipar').val() > window.tudomany[faj].ipar) {
            $('#tudomany_ipar').val(window.tudomany[faj].ipar);
        }
        if ($('#tudomany_gazdasag').val() > (window.tudomany[faj].gazdasag+bonusz)) {
            $('#tudomany_gazdasag').val(window.tudomany[faj].gazdasag+bonusz);
        }
        if ($('#tudomany_mezogazdasag').val() > (window.tudomany[faj].mezogazdasag+bonusz)) {
            $('#tudomany_mezogazdasag').val(window.tudomany[faj].mezogazdasag+bonusz);
        }
        if ($('#tudomany_lakashelyzet').val() > window.tudomany[faj].lakashelyzet) {
            $('#tudomany_lakashelyzet').val(window.tudomany[faj].lakashelyzet);
        }
        if ($('#tudomany_banyaszat').val() > (window.tudomany[faj].banyaszat+bonusz)) {
            $('#tudomany_banyaszat').val(window.tudomany[faj].banyaszat+bonusz);
        }
        if ($('#tudomany_hadugy').val() > (window.tudomany[faj].hadugy+bonusz)) {
            $('#tudomany_hadugy').val(window.tudomany[faj].hadugy+bonusz);
        }
        if ($('#tudomany_magia').val() > (window.tudomany[faj].magia+bonusz)) {
            $('#tudomany_magia').val(window.tudomany[faj].magia+bonusz);
        }
        if ($('#tudomany_tolvajlas').val() > (window.tudomany[faj].tolvajlas+bonusz)) {
            $('#tudomany_tolvajlas').val(window.tudomany[faj].tolvajlas+bonusz);
        }
   }
}

/* Hadsereg mutatóinak újraszámítása */
function recalculateArmy() {
    checkSciMax(false);
    var szint = $('#orszag_szint').val()-1;
    var epuletek = getBuilds();
    var faj = $('#orszag_faj').val();
    if (faj==7) {
    	// élőhalott
    	$('#orszag_szint').prop('disabled','');
    } else {
    	$('#orszag_szint').prop('disabled','disabled');
    }
    var lakashelyzet = 1.0+($('#tudomany_lakashelyzet').val()/100);
    var katonak = epuletek.barakk * window.barakk_hely * lakashelyzet;
    var ijaszok = epuletek.ortorony * window.barakk_hely * lakashelyzet;
    var varazslok = epuletek.templom * window.templom_hely * lakashelyzet;
    var tolvajok = epuletek.kocsma * window.kocsma_hely * lakashelyzet;
    if (faj==4) {
        // törpe
        katonak = katonak * 1.2;
        varazslok = varazslok * 1.2;
        tolvajok = tolvajok * 1.2;
    } else if (faj==7) {
    	// élőhalott
    	katonak = katonak * (1+(window.elohalott_bonusz[szint]/100));
    	ijaszok = ijaszok * (1+(window.elohalott_bonusz[szint]/100));
        varazslok = varazslok * (1+(window.elohalott_bonusz[szint]/100));
        tolvajok = tolvajok * (1+(window.elohalott_bonusz[szint]/100));
    }
    $('#hadsereg_barakk_menny').html(parseInt(katonak));
    $('#hadsereg_torony_menny').html(parseInt(ijaszok));
    $('#hadsereg_barakknetto_menny').html(parseInt(katonak-ijaszok));
    $('#hadsereg_templom_menny').html(parseInt(varazslok));
    $('#hadsereg_kocsma_menny').html(parseInt(tolvajok));
}

/* Gazdasági mutatók újraszámítása */
function recalculateEco() {
    checkSciMax(false);
    var epuletek = getBuilds();
    var faj = $('#orszag_faj').val();
    var szemelyiseg = $('#orszag_szemelyiseg').val();
    var szint = $('#orszag_szint').val()-1;
    var banyaszat = 1.0+($('#tudomany_banyaszat').val()/100);
    var mezogazdasag = 1.0+($('#tudomany_mezogazdasag').val()/100);
    /* Termelés */
    var fa = epuletek.fatelep * window.banya_szorzo * banyaszat;
    var ko = epuletek.kobanya * window.banya_szorzo * banyaszat;
    var fem = epuletek.fembanya * window.banya_szorzo * banyaszat;
    var agyag = epuletek.agyagbanya * window.banya_szorzo * banyaszat;
    var dragako = epuletek.dragakobanya * window.banya_szorzo * banyaszat;
    var fegyver = epuletek.kovacsmuhely * window.fegyver_szorzo;
    var gabona = epuletek.tanya * window.tanya_szorzo * mezogazdasag;
    if (faj==1) {
        // elf
        gabona = gabona * 1.3;
        fa = fa * 0.7;
        ko = ko * 0.7;
        fem = fem * 0.7;
        agyag = agyag * 0.7;
        dragako = dragako * 0.7;
    } else if (faj==4) {
        // törpe
        fa = fa * 2;
        ko = ko * 2;
        fem = fem * 2;
        agyag = agyag * 2;
        dragako = dragako * 2;
        fegyver = fegyver * 2;
    } else if (faj==6) {
        // óriás
        gabona = gabona * 1.2;
    }
    if (szemelyiseg==7) {
        // gazdálkodó
        if (faj!=7) {
            gabona = gabona * 1.1;
            fa = fa * 1.1;
            ko = ko * 1.1;
            fem = fem * 1.1;
            agyag = agyag * 1.1;
            dragako = dragako * 1.1;
        }
    }
    $('#gazdasag_fa_termeles').html(parseInt(fa));
    $('#gazdasag_ko_termeles').html(parseInt(ko));
    $('#gazdasag_fem_termeles').html(parseInt(fem));
    $('#gazdasag_agyag_termeles').html(parseInt(agyag));
    $('#gazdasag_dragako_termeles').html(parseInt(dragako));
    $('#gazdasag_fegyver_termeles').html(parseInt(fegyver));
    $('#gazdasag_gabona_termeles').html(parseInt(gabona));
    /* Férőhelyek */
    var r_fa = epuletek.raktar * window.raktar_nyersanyag_szorzo;
    var r_ko = epuletek.raktar * window.raktar_nyersanyag_szorzo;
    var r_fem = epuletek.raktar * window.raktar_nyersanyag_szorzo;
    var r_agyag = epuletek.raktar * window.raktar_nyersanyag_szorzo;
    var r_dragako = epuletek.raktar * window.raktar_nyersanyag_szorzo;
    var r_fegyver = epuletek.raktar * window.raktar_fegyver_szorzo;
    var r_gabona = epuletek.raktar * window.raktar_gabona_szorzo;
    if (faj==4) {
        // törpe
        r_fa = r_fa * 1.5;
        r_ko = r_ko * 1.5;
        r_fem = r_fem * 1.5;
        r_agyag = r_agyag * 1.5;
        r_dragako = r_dragako * 1.5;
        r_fegyver = r_fegyver * 1.5;
        r_gabona = r_gabona * 1.5;
    } else if (faj==5) {
        // gnóm
        r_fa = r_fa * 0.9;
        r_ko = r_ko * 0.9;
        r_fem = r_fem * 0.9;
        r_agyag = r_agyag * 0.9;
        r_dragako = r_dragako * 0.9;
        r_fegyver = r_fegyver * 0.9;
        r_gabona = r_gabona * 0.9;
    }
    $('#gazdasag_fa_ferohely').html(parseInt(r_fa));
    $('#gazdasag_ko_ferohely').html(parseInt(r_ko));
    $('#gazdasag_fem_ferohely').html(parseInt(r_fem));
    $('#gazdasag_agyag_ferohely').html(parseInt(r_agyag));
    $('#gazdasag_dragako_ferohely').html(parseInt(r_dragako));
    $('#gazdasag_fegyver_ferohely').html(parseInt(r_fegyver));
    $('#gazdasag_gabona_ferohely').html(parseInt(r_gabona));
    /* Lakosság */
    var lakashelyzet = 1.0+($('#tudomany_lakashelyzet').val()/100);
    var lakossag = ((epuletek.haz * window.haz_szorzo) + (epuletek.ures * window.ures_szorzo)) * lakashelyzet;
    if (faj==4) {
        // törpe
        lakossag = lakossag * 1.2;
    } else if (faj==7) {
    	// élőhalott
    	lakossag = lakossag * (1+(window.elohalott_bonusz[szint]/100));
    }
    $("#orszag_nepesseg").val(parseInt(lakossag));
    var emberszukseglet = epuletek.haz;
    emberszukseglet += epuletek.barakk;
    emberszukseglet += epuletek.kovacsmuhely;
    emberszukseglet += epuletek.tanya;
    emberszukseglet += epuletek.konyvtar;
    emberszukseglet += epuletek.raktar;
    emberszukseglet += epuletek.fatelep;
    emberszukseglet += epuletek.kobanya;
    emberszukseglet += epuletek.fembanya;
    emberszukseglet += epuletek.agyagbanya;
    emberszukseglet += epuletek.dragakobanya;
    emberszukseglet += epuletek.ortorony;
    emberszukseglet += epuletek.kocsma;
    emberszukseglet += epuletek.templom;
    emberszukseglet += epuletek.korhaz;
    emberszukseglet += epuletek.bank;
    emberszukseglet = emberszukseglet * window.ember;
    emberszukseglet += epuletek.piac * window.piac_ember;
    var foglalkoztatottsag = (lakossag/emberszukseglet)*100;
    $("#orszag_foglalkoztatottsag").val(foglalkoztatottsag.toFixed(2)+"%");
    /* Gabona egyenleg */
    var hadsereg = parseInt($('#hadsereg_barakk_menny').html()) + parseInt($('#hadsereg_templom_menny').html()) + parseInt($('#hadsereg_kocsma_menny').html());
    if (faj==7) {
        // élőhalott
        var gabona_szukseglet = 0;
    } else {
        var gabona_szukseglet = parseInt((lakossag+hadsereg) / window.gabona_fogyasztas);
    }
    $('#gazdasag_gabona_szukseglet').html(gabona_szukseglet);
    if (gabona_szukseglet < gabona) {
        $('#gazdasag_gabona_egyenleg').html("<span style='color: green;'>+"+parseInt(gabona-gabona_szukseglet)+"</span>");
    } else {
        var gabona_tartalek = parseInt(r_gabona/gabona_szukseglet);
        $('#gazdasag_gabona_egyenleg').html("<span style='color: red;'>"+parseInt(gabona_tartalek)+" körre elegendő!</span>");
    }
    /* Érték */
    var ertek = epuletek.haz;
    ertek += epuletek.barakk;
    ertek += epuletek.kovacsmuhely;
    ertek += epuletek.tanya;
    ertek += epuletek.konyvtar;
    ertek += epuletek.raktar;
    ertek += epuletek.fatelep;
    ertek += epuletek.kobanya;
    ertek += epuletek.fembanya;
    ertek += epuletek.agyagbanya;
    ertek += epuletek.dragakobanya;
    ertek += epuletek.ortorony;
    ertek += epuletek.kocsma;
    ertek += epuletek.templom;
    ertek += epuletek.korhaz;
    ertek += epuletek.bank;
    ertek += epuletek.piac;
    ertek = ertek * 45;
    ertek += epuletek.ures*30;
    if (lakossag>(getBuildsCount()*70)) {
        ertek += getBuildsCount()*70;
    } else {
        ertek += lakossag;
    }
    $('#orszag_ertek').val(ertek);
}

/* Terület összegének kiszámítása */
function getBuildsCount() {
    var epuletek = parseInt($("#epulet_haz").val());
    epuletek += parseInt($("#epulet_barakk").val());
    epuletek += parseInt($("#epulet_kovacsmuhely").val());
    epuletek += parseInt($("#epulet_tanya").val());
    epuletek += parseInt($("#epulet_konyvtar").val());
    epuletek += parseInt($("#epulet_raktar").val());
    epuletek += parseInt($("#epulet_fatelep").val());
    epuletek += parseInt($("#epulet_kobanya").val());
    epuletek += parseInt($("#epulet_fembanya").val());
    epuletek += parseInt($("#epulet_agyagbanya").val());
    epuletek += parseInt($("#epulet_dragakobanya").val());
    epuletek += parseInt($("#epulet_ortorony").val());
    epuletek += parseInt($("#epulet_kocsma").val());
    epuletek += parseInt($("#epulet_templom").val());
    epuletek += parseInt($("#epulet_korhaz").val());
    epuletek += parseInt($("#epulet_bank").val());
    epuletek += parseInt($("#epulet_piac").val());
    epuletek += parseInt($("#epulet_ures").val());
    return epuletek;
}

/* Épületek listájának beszerzése */
function getBuilds() {
    var ures = parseInt($('#epulet_ures').val());
    var haz = parseInt($('#epulet_haz').val());
    var barakk = parseInt($('#epulet_barakk').val());
    var kovacsmuhely = parseInt($('#epulet_kovacsmuhely').val());
    var tanya = parseInt($('#epulet_tanya').val());
    var konyvtar = parseInt($('#epulet_konyvtar').val());
    var raktar = parseInt($('#epulet_raktar').val());
    var fatelep = parseInt($('#epulet_fatelep').val());
    var kobanya = parseInt($('#epulet_kobanya').val());
    var fembanya = parseInt($('#epulet_fembanya').val());
    var agyagbanya = parseInt($('#epulet_agyagbanya').val());
    var dragakobanya = parseInt($('#epulet_dragakobanya').val());
    var ortorony = parseInt($('#epulet_ortorony').val());
    var kocsma = parseInt($('#epulet_kocsma').val());
    var templom = parseInt($('#epulet_templom').val());
    var korhaz = parseInt($('#epulet_korhaz').val());
    var bank = parseInt($('#epulet_bank').val());
    var piac = parseInt($('#epulet_piac').val());
    var epuletek = {ures:ures, haz:haz, barakk:barakk, kovacsmuhely:kovacsmuhely,
        tanya:tanya, konyvtar:konyvtar, raktar:raktar, fatelep:fatelep,
        kobanya:kobanya, fembanya:fembanya, agyagbanya:agyagbanya,
        dragakobanya:dragakobanya, ortorony:ortorony, kocsma:kocsma, templom:templom,
        korhaz:korhaz, bank:bank, piac:piac};
    return epuletek;
}

/* Épületek arányának kiszámítása */
function recalculateBuildShare() {
    var terulet = getBuildsCount();
    var epuletek = getBuilds();
    $('#epulet_ures_arany').html('('+parseInt(epuletek.ures/(terulet/100))+'%)');
    $('#epulet_haz_arany').html('('+parseInt(epuletek.haz/(terulet/100))+'%)');
    $('#epulet_barakk_arany').html('('+parseInt(epuletek.barakk/(terulet/100))+'%)');
    $('#epulet_kovacsmuhely_arany').html('('+parseInt(epuletek.kovacsmuhely/(terulet/100))+'%)');
    $('#epulet_tanya_arany').html('('+parseInt(epuletek.tanya/(terulet/100))+'%)');
    $('#epulet_konyvtar_arany').html('('+parseInt(epuletek.konyvtar/(terulet/100))+'%)');
    $('#epulet_raktar_arany').html('('+parseInt(epuletek.raktar/(terulet/100))+'%)');
    $('#epulet_fatelep_arany').html('('+parseInt(epuletek.fatelep/(terulet/100))+'%)');
    $('#epulet_kobanya_arany').html('('+parseInt(epuletek.kobanya/(terulet/100))+'%)');
    $('#epulet_fembanya_arany').html('('+parseInt(epuletek.fembanya/(terulet/100))+'%)');
    $('#epulet_agyagbanya_arany').html('('+parseInt(epuletek.agyagbanya/(terulet/100))+'%)');
    $('#epulet_dragakobanya_arany').html('('+parseInt(epuletek.dragakobanya/(terulet/100))+'%)');
    $('#epulet_ortorony_arany').html('('+parseInt(epuletek.ortorony/(terulet/100))+'%)');
    $('#epulet_kocsma_arany').html('('+parseInt(epuletek.kocsma/(terulet/100))+'%)');
    $('#epulet_templom_arany').html('('+parseInt(epuletek.templom/(terulet/100))+'%)');
    $('#epulet_korhaz_arany').html('('+parseInt(epuletek.korhaz/(terulet/100))+'%)');
    $('#epulet_bank_arany').html('('+parseInt(epuletek.bank/(terulet/100))+'%)');
    $('#epulet_piac_arany').html('('+parseInt(epuletek.piac/(terulet/100))+'%)');
    if (terulet==0) {
        $('#epulet_osszeg').html('');
    } else {
        $('#epulet_osszeg').html(' (összesen '+terulet+' ha)');
    }
}

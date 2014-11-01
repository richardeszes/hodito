function importList() {
    var lines = $('#importerText').val().split("\n");
    for (index = 0; index < lines.length; ++index) {
        var a = lines[index].split("\t", 2);
        switch (a[0]) {
            case "Üres":
                $('#epulet_ures').val(a[1]);
                break;
            case "Ház":
                $('#epulet_haz').val(a[1]);
                break;
            case "Barakk":
                $('#epulet_barakk').val(a[1]);
                break;
            case "Kovácsműhely":
                $('#epulet_kovacsmuhely').val(a[1]);
                break;
            case "Tanya":
                $('#epulet_tanya').val(a[1]);
                break;
            case "Könyvtár":
                $('#epulet_konyvtar').val(a[1]);
                break;
            case "Raktár":
                $('#epulet_raktar').val(a[1]);
                break;
            case "Fatelep":
                $('#epulet_fatelep').val(a[1]);
                break;
            case "Kőbánya":
                $('#epulet_kobanya').val(a[1]);
                break;
            case "Fémbánya":
                $('#epulet_fembanya').val(a[1]);
                break;
            case "Agyagbánya":
                $('#epulet_agyagbanya').val(a[1]);
                break;
            case "Drágakőbánya":
                $('#epulet_dragakobanya').val(a[1]);
                break;
            case "Őrtorony":
                $('#epulet_ortorony').val(a[1]);
                break;
            case "Kocsma":
                $('#epulet_kocsma').val(a[1]);
                break;
            case "Templom":
                $('#epulet_templom').val(a[1]);
                break;
            case "Kórház":
                $('#epulet_korhaz').val(a[1]);
                break;
            case "Piac":
                $('#epulet_piac').val(a[1]);
                break;
            case "Bank":
                $('#epulet_bank').val(a[1]);
                break;
        }
    }
    recalculateArmy();
    recalculateEco();
    recalculateBuildShare();
    $('#importalas').modal('hide');
}

function saveDatasheet() {
    localStorage.setItem('epuletek', JSON.stringify(getBuilds()));
    localStorage.setItem('faj', $('#orszag_faj').val());
    localStorage.setItem('szemelyiseg', $('#orszag_szemelyiseg').val());
    alert("Az adatok mentése megtörtént.");
}

function loadDatasheet() {
    $('#orszag_faj').val(localStorage.getItem('faj'));
    $('#orszag_szemelyiseg').val(localStorage.getItem('szemelyiseg'));
    var epuletek = JSON.parse(localStorage.getItem('epuletek'));
    $('#epulet_ures').val(epuletek.ures);
    $('#epulet_haz').val(epuletek.haz);
    $('#epulet_barakk').val(epuletek.barakk);
    $('#epulet_kovacsmuhely').val(epuletek.kovacsmuhely);
    $('#epulet_tanya').val(epuletek.tanya);
    $('#epulet_konyvtar').val(epuletek.konyvtar);
    $('#epulet_raktar').val(epuletek.raktar);
    $('#epulet_fatelep').val(epuletek.fatelep);
    $('#epulet_kobanya').val(epuletek.kobanya);
    $('#epulet_fembanya').val(epuletek.fembanya);
    $('#epulet_agyagbanya').val(epuletek.agyagbanya);
    $('#epulet_dragakobanya').val(epuletek.dragakobanya);
    $('#epulet_ortorony').val(epuletek.ortorony);
    $('#epulet_kocsma').val(epuletek.kocsma);
    $('#epulet_templom').val(epuletek.templom);
    $('#epulet_korhaz').val(epuletek.korhaz);
    $('#epulet_bank').val(epuletek.bank);
    $('#epulet_piac').val(epuletek.piac);
    recalculateArmy();
    recalculateEco();
    recalculateBuildShare();
}

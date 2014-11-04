function validateValue(elem) {
	var min = $(elem).data('min');
	var max = $(elem).data('max');
	var def = $(elem).data('default');
	var value = $(elem).val();
	if (isNaN(value)) {
		if (def!=undefined) {
			$(elem).val(def);
		} else {
			$(elem).val(0);
		}
	} else {
		if (min!=undefined) {
			if ($(elem).val() < min) {
				$(elem).val(min);
			}
		}
		if (max!=undefined) {
			if ($(elem).val() > max) {
				$(elem).val(max);
			}
		}
	}
}

function ellenorizVedekezoFaj() {
	if ($('#csata_vedekezo_faj').val()==1) {
		// ork
		$('#csata_vedo_orkbonusz').parent().parent().css('display', 'block');
	} else {
		$('#csata_vedo_orkbonusz').parent().parent().css('display', 'none');
		$('#csata_vedo_orkbonusz').prop('checked','');
	}
}
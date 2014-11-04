/* Faji változók */
var fajok = [
                     {
                    	 // elf
                    	 tudomany: {
                    		 ipar: 1.3,
                     		 gazdasag: 1.3,
                     		 mezogazdasag: 1.3,
                     		 lakashelyzet: 1.3,
                     		 banyaszat: 1.3,
                     		 hadugy: 1.4,
                     		 magia: 1.4,
                     		 tolvajlas: 1.3
                    	 },
                    	 termeles: {
                    		 fa: 0.7,
                    		 ko: 0.7,
                    		 fem: 0.7,
                    		 agyag: 0.7,
                    		 dragako: 0.7,
                    		 fegyver: 0.7,
                    		 gabona: 1.3
                    	 },
                    	 tudos_bonusz: 0.05,
                    	 ferohely: 1.0,
                    	 vedekezes: 1.3,
                    	 tamadas: 1.0,
                    	 raktar: 1.0
                     },
                     {
                    	 // ork
                    	 tudomany: {
                    		 ipar: 1.3,
                     		 gazdasag: 1.3,
                     		 mezogazdasag: 1.4,
                     		 lakashelyzet: 1.3,
                     		 banyaszat: 1.3,
                     		 hadugy: 1.4,
                     		 magia: 1.3,
                     		 tolvajlas: 1.3
                    	 },
                    	 termeles: {
                    		 fa: 1.0,
                    		 ko: 1.0,
                    		 fem: 1.0,
                    		 agyag: 1.0,
                    		 dragako: 1.0,
                    		 fegyver: 1.0,
                    		 gabona: 1.0
                    	 },
                    	 tudos_bonusz: 0.05,
                    	 ferohely: 1.0,
                    	 vedekezes: 1.0,
                    	 tamadas: 1.3,
                    	 raktar: 1.0
                     },
                     {
                    	 // félelf
                    	 tudomany: {
                    		 ipar: 1.3,
                     		 gazdasag: 1.3,
                     		 mezogazdasag: 1.3,
                     		 lakashelyzet: 1.4,
                     		 banyaszat: 1.3,
                     		 hadugy: 1.3,
                     		 magia: 1.3,
                     		 tolvajlas: 1.4
                    	 },
                    	 termeles: {
                    		 fa: 1.0,
                    		 ko: 1.0,
                    		 fem: 1.0,
                    		 agyag: 1.0,
                    		 dragako: 1.0,
                    		 fegyver: 1.0,
                    		 gabona: 1.0
                    	 },
                    	 tudos_bonusz: 0.05,
                    	 ferohely: 1.0,
                    	 vedekezes: 1.1,
                    	 tamadas: 0.9,
                    	 raktar: 1.0
                     },
                     {
                    	 // törpe
                    	 tudomany: {
                    		 ipar: 1.4,
                     		 gazdasag: 1.3,
                     		 mezogazdasag: 1.3,
                     		 lakashelyzet: 1.3,
                     		 banyaszat: 1.3,
                     		 hadugy: 1.4,
                     		 magia: 1.3,
                     		 tolvajlas: 1.3
                    	 },
                    	 termeles: {
                    		 fa: 2.0,
                    		 ko: 2.0,
                    		 fem: 2.0,
                    		 agyag: 2.0,
                    		 dragako: 2.0,
                    		 fegyver: 2.0,
                    		 gabona: 1.0
                    	 },
                    	 tudos_bonusz: 0.05,
                    	 ferohely: 1.2,
                    	 vedekezes: 1.2,
                    	 tamadas: 1.0,
                    	 raktar: 1.5
                     },
                     {
                    	 // gnóm
                    	 tudomany: {
                    		 ipar: 1.5,
                     		 gazdasag: 1.5,
                     		 mezogazdasag: 1.5,
                     		 lakashelyzet: 1.5,
                     		 banyaszat: 1.5,
                     		 hadugy: 1.5,
                     		 magia: 1.5,
                     		 tolvajlas: 1.5
                    	 },
                    	 termeles: {
                    		 fa: 1.0,
                    		 ko: 1.0,
                    		 fem: 1.0,
                    		 agyag: 1.0,
                    		 dragako: 1.0,
                    		 fegyver: 1.0,
                    		 gabona: 1.0
                    	 },
                    	 tudos_bonusz: 0.05,
                    	 ferohely: 1.0,
                    	 vedekezes: 1.0,
                    	 tamadas: 1.0,
                    	 raktar: 0.9
                     },
                     {
                    	 // óriás
                    	 tudomany: {
                    		 ipar: 1.3,
                     		 gazdasag: 1.3,
                     		 mezogazdasag: 1.3,
                     		 lakashelyzet: 1.4,
                     		 banyaszat: 1.3,
                     		 hadugy: 1.3,
                     		 magia: 1.4,
                     		 tolvajlas: 1.3
                    	 },
                    	 termeles: {
                    		 fa: 1.0,
                    		 ko: 1.0,
                    		 fem: 1.0,
                    		 agyag: 1.0,
                    		 dragako: 1.0,
                    		 fegyver: 1.0,
                    		 gabona: 1.2
                    	 },
                    	 tudos_bonusz: 0.05,
                    	 ferohely: 1.0,
                    	 vedekezes: 1.15,
                    	 tamadas: 1.15,
                    	 raktar: 1.0
                     },
                     {
                    	 // élőhalott
                    	 tudomany: {
                    		 ipar: 1.0,
                     		 gazdasag: 1.0,
                     		 mezogazdasag: 1.0,
                     		 lakashelyzet: 1.0,
                     		 banyaszat: 1.0,
                     		 hadugy: 1.0,
                     		 magia: 1.0,
                     		 tolvajlas: 1.0
                    	 },
                    	 termeles: {
                    		 fa: 1.0,
                    		 ko: 1.0,
                    		 fem: 1.0,
                    		 agag: 1.0,
                    		 dragako: 1.0,
                    		 fegyver: 1.0,
                    		 gabona: 1.0
                    	 },
                    	 tudos_bonusz: 0.0,
                    	 ferohely: 1.0,
                    	 vedekezes: 1.0,
                    	 tamadas: 1.0,
                    	 raktar: 1.0
                     },
                     {
                    	 // ember
                    	 tudomany: {
                    		 ipar: 1.3,
                     		 gazdasag: 1.3,
                     		 mezogazdasag: 1.3,
                     		 lakashelyzet: 1.3,
                     		 banyaszat: 1.3,
                     		 hadugy: 1.3,
                     		 magia: 1.3,
                     		 tolvajlas: 1.3
                    	 },
                    	 termeles: {
                    		 fa: 1.0,
                    		 ko: 1.0,
                    		 fem: 1.0,
                    		 agyag: 1.0,
                    		 dragako: 1.0,
                    		 fegyver: 1.0,
                    		 gabona: 1.0
                    	 },
                    	 tudos_bonusz: 0.05,
                    	 ferohely: 1.0,
                    	 vedekezes: 1.0,
                    	 tamadas: 1.0,
                    	 raktar: 1.0
                     },
                     ];

var egysegek = {
				katona: {
					vedoertek: 1,
					tamadoertek: 1,
				},
				vedo: {
					vedoertek: 4,
					tamadoertek: 0,
				},
				tamado: {
					vedoertek: 0,
					tamadoertek: 4,
				},
				ijasz: {
					vedoertek: 6,
					tamadoertek: 2,
				},
				lovas: {
					vedoertek: 2,
					tamadoertek: 6,
				},
				elit: {
					vedoertek: 5,
					tamadoertek: 5,
				}
			};

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

/* Támadó értékek */
var tabornokok_bonusz = [1, 1, 1.03, 1.05, 1.06, 1.07, 1.08, 1.1, 1.2];
var erosebb_szorzo = 1.1;
var verszomj_szorzo = 1.3;

/* Védő értékek */
var szabadsag = [1, 1.1, 1.2, 1.3];
var vedelem_szorzo = 1.3;

/* Egyéb állandók */
var elohalott_bonusz = [1.6, 1.5, 1.4, 1.3, 1.2];
var elohalott_szint = [1.4, 1.3, 1.2, 1.1, 1];
var ork_vedelmi_bonusz = 1.2;
var mf_szorzo = 1.4;

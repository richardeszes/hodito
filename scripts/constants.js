/* Faji változók */
var tudomany= [{
				// elf
				ipar: 30, // Ipar tudományban elérhető maximum
				gazdasag: 30,
				mezogazdasag: 30,
				lakashelyzet: 30,
				banyaszat: 30,
				hadugy: 40,
				magia: 40,
				tolvajlas: 30,
				tudos: 5 // Tudós tulajdonság +%
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
var termeles= [{
				// elf
				fa: 0.7, // Fakitermelés szorzója (1: nincs bónusz, <1: malusz, >1: bónusz)
				ko: 0.7,
				fem: 0.7,
				agyag: 0.7,
				dragako: 0.7,
				fegyver: 0.7,
				gabona: 1.3,
				raktar: 1 // Raktárkapacitás szorzója (1: nincs bónusz, <1: malusz, >1: bónusz)
			},
			{
				// ork
				fa: 1,
				ko: 1,
				fem: 1,
				agyag: 1,
				dragako: 1,
				fegyver: 1,
				gabona: 1,
				raktar: 1
			},
			{
				// félelf
				fa: 1,
				ko: 1,
				fem: 1,
				agyag: 1,
				dragako: 1,
				fegyver: 1,
				gabona: 1,
				raktar: 1
			},
			{
				// törpe
				fa: 2,
				ko: 2,
				fem: 2,
				agyag: 2,
				dragako: 2,
				fegyver: 2,
				gabona: 1,
				raktar: 1.5
			},
			{
				// gnóm
				fa: 1,
				ko: 1,
				fem: 1,
				agyag: 1,
				dragako: 1,
				fegyver: 1,
				gabona: 1,
				raktar: 0.9
			},
			{
				// óriás
				fa: 1,
				ko: 1,
				fem: 1,
				agyag: 1,
				dragako: 1,
				fegyver: 1,
				gabona: 1.2,
				raktar: 1
			},
			{
				// élőhalott
				fa: 1,
				ko: 1,
				fem: 1,
				agyag: 1,
				dragako: 1,
				fegyver: 1,
				gabona: 1,
				raktar: 1
			},
			{
				// ember
				fa: 1,
				ko: 1,
				fem: 1,
				agyag: 1,
				dragako: 1,
				fegyver: 1,
				gabona: 1,
				raktar: 1
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
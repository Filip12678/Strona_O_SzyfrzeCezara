function SzyfrCezara(ciagDoZaszyfrowania, przesuniecie) {
	
	var b = 0;
	var dlugoscCiaguDoZaszyfrowania = ciagDoZaszyfrowania.length;
	var alfabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ";
	var ciagKoncowy = ""
	
	
	
	for (var x = 0; x < dlugoscCiaguDoZaszyfrowania; x++) {
		
		for (var a = 0; a < 32; a++) {
			
			if (ciagDoZaszyfrowania[x] == alfabet[a]) {
				
				b = a + przesuniecie;
				
				while (b > 31) {
					b -= 32;
				}
				
				while (b < 0) {
					b += 32;
				}
				
				ciagKoncowy += alfabet[b];
				
			}
			
		}
		
	}
	
	return ciagKoncowy;
	
	
	
	
}







function myFunction() {
	var ciagDoZaszyfrowania = prompt("Wprowadź tekst który ma być zaszyfrowany");
	ciagDoZaszyfrowania = ciagDoZaszyfrowania.toUpperCase();
	
	var przesuniecie = prompt("Wprowadź o ile miejsc ma być przesunięty znak");
	przesuniecie = parseInt(przesuniecie);
	
	var wynik = SzyfrCezara(ciagDoZaszyfrowania, przesuniecie);
	alert(wynik);
	
}


























































/* function myFunction2() {
	
	var ciagDoZaszyfrowania = prompt("Wprowadź tekst który ma być odszyfrowany");
	ciagDoZaszyfrowania = ciagDoZaszyfrowania.toUpperCase();
	var ciag = Array.from(ciagDoZaszyfrowania);
	
	var przesuniecie = prompt("Wprowadź o ile miejsc ma być przesunięty znak");
	przesuniecie = parseInt(przesuniecie);
	
	var wynik = SzyfrCezaraOdszyfrowywanie(ciag, przesuniecie);
	var wynikDoWyswietlenia = wynik.join('');
	alert(wynikDoWyswietlenia);
	
	
	
	function SzyfrCezaraOdszyfrowywanie(ciagDoZaszyfrowania, przesuniecie) {
	
	var b = 0;
	var dlugoscCiaguDoZaszyfrowania = ciagDoZaszyfrowania.length;
	var alfabet1 = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ";
	var alfabet = Array.from(alfabet1);
	
	for (x = 0; x < dlugoscCiaguDoZaszyfrowania; x++) {
		
		for (a = 0; a < 32; a++) {
			if (ciagDoZaszyfrowania[x] == alfabet[a]) {
				b = a - przesuniecie;
				if (b < 0) {
					b = b + 32;
				}
				ciagDoZaszyfrowania[x] = alfabet[b];
				break;
			}
		}
	}
	return ciag;
}
	
} */
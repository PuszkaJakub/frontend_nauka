// Zadanie 1
// 1. Stwórz zmienne X = 50 oraz Y = 30
// 2. Stwórz ifa, który sprawdzi, czy X jest większe niż Y
// 3. Wynik zapisz w konsoli za pomocą template stringa, np. "50 jest większe niż 30"
//     (wartość 50 oraz 30 umieść za pomocą zmiennych)
// W zadaniu zapisz tylko if, nie potrzebujemy else

const x1 = 50;
const y1 = 30;
if (x1 > y1) {
	console.log(`${x1} jest większe od ${y1}`);
}

// Zadanie 2
// 1. Stwórz zmienną color i przypisz do niej wartość blue
// 2. Stwórz zmienną newColor i przypisz do niej wartość green
// 3. Za pomocą ifa sprawdź, czy zmienna color przechowuje tą samą wartość co zmienna newColor
//     Jeśli tak: wypisz w konsoli "Kolory się zgadzają"
//     Jeśli nie: wypisz w konsoli "Kolory się nie zgadzają"

const color = 'blue';
const newColor = 'green';

if (color === newColor) {
	console.log('Kolory się zgadzają');
} else {
	console.log('Kolory się nie zgadzają');
}

// Zadanie 3
// 1. Stwórz zmienną X i przypisz do niej wartość 100.
// 2. Stwórz zmienną Y i przypisz do niej wartość 50.
// 3. Za pomocą instrukcji warunkowej sprawdź:
//     • czy X jest większy niż Y,
//     • czy X jest równy Y,
//     • czy X jest mniejszy od Y.

// W zależności od wyniku, w konsoli wypisz:
//     • X > Y
//     • X = Y
//     • X < Y

const x3 = 100;
const y3 = 50;
if (x3 > y3) {
	console.log('x > y');
} else if (x3 === y3) {
	console.log('x = y');
} else {
	console.log('x < y');
}

// Zadanie 4

// 1. Stwórz zmienną promo i przypisz do niej wartość 20%.
// 2. Stwórz 3 case'y: 10%, 20%, 30%.
// 3. W konsoli wypisz zdanie "Dziś mamy 20% zniżki!"
//    Przygotuj też coś dla pozostałych promocji.
// 4. Przygotuj zapasowy case, na wypadek, gdyby była inna promocja.

const promo = '20%';
switch (promo) {
	case '10%':
		console.log('Dziś mamy 10% zniżki!');
		break;
	case '20%':
		console.log('Dziś mamy 20% zniżki!');
		break;
	case '30%':
		console.log('Dziś mamy 30% zniżki!');
		break;
	default:
		console.log('Dziś obowiązuje inna promocja, sprawdź w gazetce.');
		break;
}

// Zadanie 5

// 1. Stwórz zmienną X i przypisz do niej wartość 10.
// 2. Za pomocą operatora warunkowego sprawdź, czy wartość przypisana do X jest parzysta. 😎
// 3. W konsoli wypisz odpowiednią informację, np. "X jest parzyste."

// P.S. %

const x5 = 10;
const result5 = x5 % 2 === 0 ? 'x jest parzyste' : 'x jest nieparzyste';
console.log(result5);

// Zadanie 6

// 1. Stwórz zmienną X i przypisz do niej wartość 50.

// 2. Za pomocą instrukcji warunkowej sprawdź, czy X jest większy lub równy 100.
//    Jeśli jest – wypisz w konsoli "X > 100".

// 3. Następnie sprawdź, czy X jest mniejszy niż 100, ale większy niż 30.
//    Jeśli jest – wypisz w konsoli "X jest średniakiem".

// 4. Jeśli X jest mniejszy lub równy 30, wypisz w konsoli "X jest mały".

// Uwaga!
// Tekst ma być wypisany w konsoli wielkimi literami! Skorzystaj z odpowiedniej metody. 😉

const x6 = 50;
let result6 = '';

if (x6 >= 100) {
	result6 = 'x > 100';
} else if (x6 > 30) {
	result6 = 'x jest średniakiem';
} else {
	result6 = 'x jest mały';
}
console.log(result6.toUpperCase());

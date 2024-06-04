// Zadanie 1:

// 1. Stwórz tablicę z nazwami miast.
// 2. Za pomocą pętli for (for, nie for of) w konsoli wypisz miasta w zdaniu:
// To miasto nazywa się: [nazwa_miasta]

const cities = [
	'Warsaw',
	'Berlin',
	'Madrit',
	'Paris',
	'London',
	'Prague',
	'Amsterdam',
];
for (let i = 0; i < cities.length; i++) {
	console.log(`To miasto nazywa się: ${cities[i]}`);
}

// Zadanie 2:

// 1. Stwórz zmienną x i przypisz do niej wartość 0.
// 2. Stwórz pętlę while, która będzie zwiększać wartość x o 2 (2, 4, 6, 8, 10).
// 3. Pętla ma się wykonywać do momentu, w którym wartość x będzie równa lub większa od 10.
// Uwaga: Do punktu 2. nie należy używać instrukcji x++, ponieważ nie rozwiąże ona zadania. Należy skorzystać z operatorów przypisania.

let x2 = 0;
while (x2 < 10) {
	x2 += 2;
	console.log(x2);
}

// Zadanie 3:

// 1. Stwórz zmienną x i przypisz do niej wartość 20.
// 2. Stwórz pętlę do...while, która będzie zmniejszała wartość x o 3.
// 3. Pętla ma się wykonywać do momentu, w którym wartość x będzie większy od 0.
// Uwaga: W konsoli wypisz tylko ostatnią cyfrę, którą zwróci nam pętla!

let x3 = 20;
do {
	x3 -= 3;
} while (x3 > 0);
console.log(x3);

// Zadanie 4:

// 1. Stwórz tablicę z liczbami 5, 10, 20, 30, 40, 50.
// 2. Stwórz pętlę for of, która podzieli liczby przez 5 i wypisze je w konsoli.

const table = [5, 10, 20, 30, 40, 50];
for (const number of table) {
	console.log(number / 5);
}

// Zadanie dla ambitnych:

// Za pomocą pętli for of oraz instrukcji warunkowej if, sprawdź, które cyfry i liczby są parzyste, a które nie.

// W konsoli wypisz:

// Liczba [liczba] jest parzysta.
// Liczba [liczba] jest nieparzysta.

// BONUS:
// Zdania w konsoli wypisz kolorowo

const numbers = [17, 53, 4, 68, 29, 91, 76, 38, 94, 10];
for (const number of numbers) {
	if (number % 2 === 0) {
		console.log(`%cLiczba ${number} jest parzysta`, 'color: green');
	} else {
		console.log(`%cLiczba ${number} jest nieparzysta`, 'color: red');
	}
}

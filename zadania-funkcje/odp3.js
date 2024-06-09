// Zadanie 3

// 1. Stwórz zmienne num oraz numbers. Do tej pierwszej przypisz wartość 10, a do drugiej pustą tablicę.

// 2. Stwórz pętlę for, która będzie wykonywała się tak długo, aż i będzie mniejsze od num.
//    Pętla ma dodawać i do tablicy numbers.

// 3. Stwórz funkcję, która przyjmie jeden parametr. W funkcji ma być if, który sprawdzi, czy liczba podana w argumencie jest podzielna przez 3 oraz jest różna od zera.
//    Jeśli tak – wypisz w konsoli X jest podzielne przez 3.
//    Jeśli nie – wypisz w konsoli X nie jest podzielne przez 3 lub X = 0.

// 4. Za pomocą forEach odwołaj się do tablicy numbers.

const num = 10;
const numbers = [];

for (let i = 0; i < num; i++) {
	numbers.push(i);
}

const divBy3 = num => {
	if (num % 3 === 0 && num !== 0) {
		console.log(`${num} jest podzielne przez 3`);
	} else {
		console.log(`${num} nie jest podzielne przez 3 lub ${num} = 0`);
	}
};
console.log(numbers)
numbers.forEach(divBy3)

// Zadanie 1

// 1. Stwórz zmienną globalną score.

// 2. Stwórz funkcję add, która przyjmie dwa parametry.

// 3. Funkcja ma dodawać elementy. Wynik działania przypisz do zmiennej score.

// 4. Stwórz dwie nowe funkcje, które będą zwracały w konsoli zdanie:
//    Funkcja #1: Liczba X jest parzysta.
//    Funkcja #2: Liczba X jest nieparzysta.

// 5. W funkcji add stwórz if'a, który sprawdzi, czy score jest parzysta, czy nie. W zależności od wyniku, niech if odpali funkcję #1 lub #2.

// 6. Na końcu kodu wywołaj funkcję add i przekaż jej dwa dowolne argumenty.

let score;

const add = (a, b) => {
	score = a + b;
	if (score%2 === 0){
		even(score)
	}
	else{
		odd(score)
	}
};

const even = x => console.log(`Liczba ${x} jest parzysta`)
const odd = x => console.log(`Liczba ${x} jest nieparzysta`)

add(2,5)
add(2,2)


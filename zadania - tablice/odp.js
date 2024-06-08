// Zadanie 1 ----------------------------------------------------------------------------------------

// 1. Stwórz tablicę const letters = ['c', 'd'].
// 2. Za pomocą odpowiednich metod, dodaj na początku litery 'a' oraz 'b', a na końcu 'e' oraz 'f'.
//     Tablicę wyloguj w konsoli.
// 3. Za pomocą odpowiedniej metody sprawdź, czy tablica zawiera literę 'c' i wynik wyloguj w konsoli.

const letters1 = ['c', 'd'];
letters1.unshift('a', 'b');
letters1.push('e', 'f');
console.log(letters1);
console.log(letters1.includes('c'));

// Zadanie 2 ----------------------------------------------------------------------------------------

// 1. Stwórz tablicę z cyframi.
// 2. Stwórz drugą tablicę z jedzeniem.
// 3. Stwórz nową zmienną i za pomocą odpowiedniej metody, przypisz do niej połączone tablice z cyframi i jedzeniem.
//     Nową tablicę wyloguj w konsoli.

// BONUS: Wykonaj to zadanie z operatorem SPREAD...

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const food2 = ['pizza', 'steak', 'chicken with rice'];
const result2 = numbers2.concat(food2);
console.log(result2);
// Bonus
const resultSpread2 = [...numbers2, ...food2];
console.log(resultSpread2);

// Zadanie 3 ----------------------------------------------------------------------------------------

// 1. Stwórz tablicę z cyframi: 1, 5, 13, 26, 48.

// 2. Za pomocą forEach lub map (która metoda będzie lepsza do tego zadania?), wydrukuj w konsoli
//     wszystkie liczby z tablicy, ale pomnożone przez 5.
//     Nową tablicę przypisz do nowej zmiennej.

// 3. Za pomocą instrukcji warunkowej if oraz odpowiedniej pętli, przejdź po nowo utworzonej tablicy i sprawdź, które liczby są parzyste.

// Wyniki wyloguj w konsoli za pomocą template stringa, tak jak widać na podglądzie.

const numbers3 = [1, 5, 13, 26, 48];
const newNumbers3 = numbers3.map(x => x * 5);
console.log(newNumbers3);
newNumbers3.forEach(x =>
	x % 2 == 0
		? console.log(`Liczba ${x} jest parzysta`)
		: console.log(`Liczba ${x} jest nieparzysta`)
);

// Zadanie 4 ----------------------------------------------------------------------------------------

// 1. Stwórz tablicę z jednym kolorem (zapisz go małymi literami).

// 2. Za pomocą odpowiednich metod dodaj nowy kolor na początku i na końcu tablicy.

// 3. Przeiteruj po tablicy za pomocą pętli for. W konsoli wypisz zdanie:
//     Mój ulubiony kolor to: [nazwa_koloru]
// Nazwa koloru powinna być zapisana wielkimi literami!

const colors4 = ['black'];
colors4.unshift('blue');
colors4.push('gray');

colors4.forEach(x => console.log(`Mój ulubiony kolor to: ${x.toUpperCase()}`));

// Zadanie dla ambitnych

// Za pomocą odpowiednich metod na stringu, wypisz w konsoli kolory tak, aby zaczynały się od wielkiej litery (zamiast całego wyrazu wypisanego wielkimi literami).
// Np. Niebieski, Zielony, Czerwony
colors4.forEach(x =>
	console.log(
		`Mój ulubiony kolor to: ${
			x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()
		}`
	)
);

// Zadanie 5 ----------------------------------------------------------------------------------------

// 1. Stwórz stringa (jednego) z samochodami "Audi, Mercedes, BMW, Nissan, Dodge".

// 2. Za pomocą metody na stringu, zrób z niego tablicę i przypisz do nowej zmiennej (jest taka metoda, która ma w nazwie coś wspólnego z dzieleniem / podziałami 🤭).

// 3. Za pomocą operatora warunkowego sprawdź, czy długość tablicy jest większa, niż 3.
//     Jeśli tak – wypisz w konsoli "Jest OK", jeśli nie – wyloguj "Nie jest OK".

// 4. Za pomocą instrukcji warunkowej i odpowiedniej metody sprawdź, czy nasza tablica zawiera markę Audi.
//     Jeśli tak – za pomocą odpowiedniej metody dodaj nową markę do tablicy.
//     Jeśli nie – za pomocą odpowiedniej metody usuń ostatni element z tablicy.

const cars5 = 'Audi, Mercedes, BMW, Nissan, Dodge';
const carsArr5 = cars5.split(', ');

carsArr5.length > 3 ? console.log('Jest OK') : console.log('Nie jest OK');

if (carsArr5.includes('Audi')) {
	carsArr5.push('Honda');
} else {
	carsArr5.pop();
}
console.log(carsArr5);

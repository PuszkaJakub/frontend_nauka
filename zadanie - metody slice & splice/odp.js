// Treść zadania:
// Skopiuj poniższy kod do pliku .js.

const numbers = [0, 0, 1, 1, 2, 2, 2];
const colors = ['red', 'green', 'blue', true, 123];
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀'];

// Stwórz zmienną numbers2 i za pomocą metody slice, wytnij z tablicy numbers pierwsze dwa zera.
const numbers2 = numbers.slice(0, 2);

// Następnie stwórz numbers3 i za pomocą metody slice, wytnij trzy ostatnie dwójki z tablicy numbers. Jeśli nie wiesz jak to zrobić, dokumentacja na MDN z pewnością pomoże. 🙂
const numbers3 = numbers.slice(-3);

// Obydwie te zmienne wypisz w konsoli.
console.log(numbers2);
console.log(numbers3);

// Następnie za pomocą metody splice, wytnij dwa ostanie elementy z tablicy colors.
// Te nowe elementy wsadź do tablicy o nazwie randomStuff. Nowe tablice wyloguj w konsoli.
const randomStuff = colors.splice(-2);;
console.log(colors);
console.log(randomStuff)

// Teraz przejdź do tablicy cars. Musisz wyciąć z niej wszystkie samochody i przypisać do tablicy newCars. Skorzystaj oczywiście z metody splice. Podczas wycinania, dodaj napis 'test' do tablicy cars.
const newCars = cars.splice(2, 4, "test")


// W konsoli wyloguj tablicę cars oraz newCars.
console.log(cars);
console.log(newCars);
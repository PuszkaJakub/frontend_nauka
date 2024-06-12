// Skopiuj poniższy kod HTML i pobierz wszystkie elementy do zmiennych. 🙂

// Skorzystaj oczywiście z querySelector'ów. W kolejnym artykule zobaczysz rozwiązanie tego ćwiczenia. 👍



// <h1>pobierz mnie do zmiennej 'heading'</h1>
// <p>pobierz mnie do elementu tablico-podobnego razem z innymi paragrafami!</p>
// <p>pobierz mnie do elementu tablico-podobnego razem z innymi paragrafami!</p>
// <p>pobierz mnie do elementu tablico-podobnego razem z innymi paragrafami!</p>
// <div class="test">
//     <p>pobierz DIV-a z klasą test do jakiejś zmiennej</p>
//     <p id="test">następnie pobierz ten paragraf, ale nie przeszukuj całego `document`, przeszukaj tylko DIV-a z klasą test</p>
// </div>


const heading = document.querySelector('h1')
console.log(heading)

const paragraphs = document.querySelectorAll('p')
console.log(paragraphs)

const divTest = document.querySelector('div.test')
console.log(divTest)

const pTest = divTest.querySelector('p#test')
console.log(pTest)


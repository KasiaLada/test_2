//ćwiczenia ze strony jscwiczenia.pl

// console.log("witaj swiecie");

// const e = 2.718228;
// alert(e);

//

// 5
// let zmienna = 12;
// console.log(typeof zmienna);
// zmienna = "Język Java Script" ;
// console.log(typeof zmienna);

// 6
// let opis = 'JavaScript to język programowania';
// console.log(`informacja: ${opis}`);

// 7
// let a = 21;
// let b = 17;
// alert(`${a} +${b} = ${a + b}`);

// 8
// let a = prompt(`podaj wartość`);
// console.log(`Pobrana wartość: ${a}`);

// "Wstrzykiwanie" kodu HTML do wybranego elementu
// 1

// const wynik = document.querySelector('#wynik');

// let a = 16;
// let b = 5;
// const sum = a + b;
// console.log(sum);

// //"wstrzyknięcie" - innerHTML() - kodu HTML do div-a wynik
// wynik.innerHTML = 'wynik:' + sum;

// zad2+3
// const wynik= document.querySelector("#wynik");

// let a=75;
// let b=123;

// //użycie ${zmienna} i symbolu `
// wynik.innerHTML=`<h1>${a}+${b}=${a+b}</h1>`;
//

// Pętle
// zad 1;
// const wynik = document.querySelector('#wynik');

// let kodHTML = '';

// for (let i = 1; i <= 100; i++) {
// 	kodHTML = kodHTML + i + ', ';
// }
// wynik.innerHTML = kodHTML;

// zad 2

// const wynik = document.querySelector('#wynik');

// let kodHTML = '';

// for (let i = 1; i <= 100; i++) {
// 	kodHTML += i + ', ';
// }
// wynik.innerHTML = kodHTML;

//  zad 3

// const dane = document.querySelector('#dane');

// let text = '<table>';
// for (let i = 0; i < 10; i++) {
// 	text += '<tr><td>' + i + '</td><td>' + i * i + '</td></tr>';
// }
// text += '</table>';
// dane.innerHTML = text;

// ===========================
// Instrukcje warunkowe
// zad 1

// const opis = document.querySelector('#opis');
// let liczba = -2;
// if (liczba > 0) {
// 	opis.innerHTML = '<h1>' + liczba + ' Liczba większa od zera.</h1>';
// 	('Liczba większa od zera.');
// } else {
// 	opis.innerHTML ='<h2>' + liczba + ' - Zero lub liczba ujemna.</h2>';
// }

// zad 2
// const opis = document.querySelector('#opis');
// let liczba = 3;
// liczba > 0 ? (opis.innerHTML = 'dodatnia') : (opis.innerHTML = '0/ujemna');

// ===========================
//  zad 3

// const opis = document.querySelector('#opis');
// let liczba = 0;
// if (liczba > 0) {
// 	opis.innerHTML = '<h1>Liczba większa od zera</h1>';
// } else if (liczba < 0) {
// 	opis.innerHTML = '<h1>"Liczba ujemna."</h1>';
// } else {
// 	opis.innerHTML = '<h1> "Zero"</h1>';
// }

// ========================

// zad 4

// nie robiłam zad ze switchem

// ========================

// zad 5
// nie robiłam zad 5

// ========================

// zad 6

/* OPIS
Wartość logiczna liczby 0 wynosi false.
*/

// if(1)
// {
//     console.log('Liczba różna od zera.');
// }
// else
// {
//     console.log('Zero.')
// }

// =========================================
// Obsługa zdarzeń cz. I

// zad 1 - nie znika button

// const button = document.querySelector('#button');
// const komunikat = document.querySelector('#komunikat');

// button.addEventListener('click', function () {
// 	komunikat.innerHTML = '<h1>Witaj świecie!</h1>';
// });

// ------------------------------------
// zad 2

// const suwak = document.querySelector("#suwak");
// const liczba = document.querySelector(".js-selected-value");

// suwak.addEventListener("input",function(){
//     liczba.innerHTML=suwak.value;
// })

// ==================================

// this, metoda .querySelectorAll(), pętla for-of
// zad 1

// const buttons = document.querySelectorAll('#buttons');
// const liczby = document.querySelector('#liczby');

// for(const button of buttons) {
//     button.addEventListener("click",function() {
//             alert('Kliknąłeś na przycisk.')
//     });
// }

// =========================
// zad 2 nie działa

// const elementy = document.querySelector('.elementy');
// const opis = document.querySelector('#opis');
// for (const element of elementy) {
// 	element.addEventListener('click', function () {
// 		opis.innerHTML = this.id;
// 	});
// }

// --------------------------
// Definiowanie funkcji, rodzaje funkcji
// zad 1

// function funkcja() {
// 	console.log('Funkcja działa');

// }
// funkcja();

// zad 2

// function poleKola(r) {
// 	let pole = Math.PI * r * r;
// 	console.log('Pole koła o promieniu:' + r + ' wynosi: ' + pole);
// }
// poleKola(4);

// zad 2

// function poleProstokata(a, b) {
// 	let pole = a * b;
// 	console.log(`pole prostokąta o bokach ${a} i ${b} wynosi ${pole} `);
// }
// poleProstokata(5, 10);
// poleProstokata(10, 20);

// Majek==========================

// function add(x, y) {
// 	console.log(`czesć ${x}i mam ${y}`);
// }
// add('Kasia', 25);

// --------
// let score;
// const add = (x, y) => {
// 	score = x + y;
//
// 	if (score % 2 === 0) {
// 		evenMsg();
// 	} else {
// 		oddMsg();
// };
// };
//
// const evenMsg = () => {
// 	console.log(`liczba ${score} jest parzysta`);
// };

// const oddMsg = () => {
// 	console.log(`liczba ${score} jest nieparzysta`);
// };
// add(10, 11);

// const add = (x, y) => {
// 	const score = x + y;
// 	score % 2 === 0 ? evenMsg(score) : oddMsg(score);
// };

// const evenMsg = (x) => {
// 	console.log(`liczba ${x} jest pzrzysta`);
// };

// const oddMsg = (x) => {
// 	console.log(`liczba ${x} jest niepzrzysta`);
// };

// add(1,2);

//
//---------------------------------
// konwerter temperatury
// let celcius;
// let temp;
// const farenh = (celciusArg) => {
// 	let temp = celciusArg * 1.8 + 32;
//     console.log(temp);
// };
// farenh(20);
// -------------------------

// callback i forEach

// let num = 10;
// let numbers = [];

// for (let i = 0; i < num; i++) {
// 	numbers.push(i)
// }
// const licz = (params) => {
// 	if (params % 3 === 0) {
// 		console.log(`${params} jest podzielna przez 3`);
// 	} else {
// 		console.log(`${params} nie jest podzielna przez 3`);
// 	}
// };

// numbers.forEach(licz);
// ----------------------------

// Zadania od Justyny

// Write a function that takes a person's name and age as arguments and prints a greeting in the console.

// function greeting(name, age) {
// 	console.log(`Hello ${name}, you are ${age} yers old`);
// }
// greeting('Alice', 8);

// 2. Write a function that takes an array of numbers as an argument and returns their sum

// Pętla for
// for...of
// Metoda reduce()
// Metoda forEach()

// function arr(array) {
// 	let sum = 0;
// 	for (let i = 0; i < array.length; i++) {
// 		sum += array[i];
// 	}

// 	return sum;
// }
// console.log(arr([1, 2, 3, 4, 5]));
// =======================================
// for...of

// function sumOfNumbers(numbers) {
// 	let sum = 0;
// 	for (let number of numbers) {
// 		sum += number;
// 	}
// 	return sum;
// }

// console.log(sumOfNumbers([1, 2, 3, 4, 5]));
// ================================

// Write a function that takes a string as an argument and returns the reversed string

// function reverseString(s) {
//     return s.split('').reverse().join('');
// }

// console.log(reverseString("hello"));

// ===================================

// Write a function that generates a random number between a specified range.

// function random(min, max) {
// 	const minCeiled = Math.ceil(min);
// 	const maxFloored = Math.floor(max);
// 	return Math.floor(Math.random()) * (maxFloored - minCeiled) + minCeiled;
// }
// console.log(random(2, 9)); nie działawłaściwie


// function generateRandomNumber(minValue, maxValue) {
//     return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
// }

// console.log(generateRandomNumber(1, 10));
// =====================================

// function reverseChildren(elementId) {
//     const parent = document.getElementById(elementId);
//     const children = Array.from(parent.children);
//     for (let i = children.length - 1; i >= 0; i--) {
//         parent.appendChild(children[i]);
//     }
// }

// // Przykładowe użycie
// reverseChildren('myDiv');
// ==============================

export const EXPECTED_MINUTES_IN_OVEN = 40;

const PREPARATION_MINUTES_PER_LAYER = 2;

export function remainingMinutesInOven(actualMinutesInOven) {
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
  }

  export function preparationTimeInMinutes(numberOfLayers) {
    return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
  }
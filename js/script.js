/*

Napisz funkcję, która będzie wyświetlać choinkę dowolnej wysokości w konsoli.

Polecenie:
drawTree(1)
ma dać wynik:

*

Polecenie:
drawTree(2)
ma dać wynik:

*
**

Polecenie:
drawTree(5)
ma dać wynik:

*
**
***
****
*****



1.	Zadeklaruj funkcję drawTree,
2.	która przyjmuje jeden parametr, 
3.	ten parametr będzie odzwierciedlał wysokość choinki (ilość wypisanych wierszy w konsoli).

4.	Wewnątrz funkcji zadeklaruj pętlę for,
5.	która wykona się tyle razy, ile mamy poziomów (parametr przekazany do drawTree odpowiada za ilość rysowanych wierszy).
6.	Żeby zachować porządek, zmienną której będziemy używać do działania pętli nazwij "i"
7.	Wewnątrz tej pętli, utwórz zmienną star,
8.	która będzie pustym stringiem (stan początkowy choinki który będzie rozbudowywany w kolejnej pętli).

9.	Następnie, wciąż wewnątrz głównej (zewnętrznej) pętli, zadeklaruj kolejną pętlę for. Tak, pętla w pętli!
10.	Tym razem, zmienną którą będziemy liczyć ilość iteracji nazwij "j"
11.	Wewnętrzna pętla ma się ona wykonać zależnie od tego, który wiersz aktualnie drukujemy w konsoli.
12.	Czyli od tego która to iteracja głównej pętli. Warunek stopu to aktualny poziom (wartość zmiennej "i").
13.	Wewnątrz drugiej pętli nadpisz zmienną "star" i 
14.	za każdym razem kiedy pętla będzie wykonana, do aktualnej wartości "star" dodaj kolejną gwiazdkę "star += '*';"

15.	Po opuszczeniu wewnętrznej pętli wyświetl console.log(star).

16.	Stwórz nowe repozytorium i wyślij tam swoje zadanie, a link do niego wklej poniżej. Pamiętaj o udostępnieniu repozytorium swojemu mentorowi.


Dla ambitnych: na każdym z poziomów dodaj spacje tak, aby choinka stała prosto.

*/
var treeHigh = prompt("ile?", "9");

function drawTree(treeHigh) {
	for (var i = 1; i < treeHigh; i++) {
		var star = " ";
		for (var j = 0; j < i; j++) {
			var stars = star += "*";
		}
		console.log(stars);
	}
	
}
console.log(drawTree(treeHigh));

/*
var i,
    j, 
    treeHigh = prompt("ile", "9");

function drawTree(i) {
    for (var i = 1; i < treeHigh; i++) {
 
	 	var star = " ";

 		for (var j = 0; j < i; j++) {
 			var stars = star += '* ';
 		}

 		console.log(stars);
	}

}

console.log(drawTree(i));
*/
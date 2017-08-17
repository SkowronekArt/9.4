/*
1.  Zadeklaruj funkcję drawTree,
2.  która przyjmuje jeden parametr, 
3.  ten parametr będzie odzwierciedlał wysokość choinki (ilość wypisanych wierszy w konsoli).

4.  Wewnątrz funkcji zadeklaruj pętlę for,
5.  która wykona się tyle razy, ile mamy poziomów (parametr przekazany do drawTree odpowiada za ilość rysowanych wierszy).
6.  Żeby zachować porządek, zmienną której będziemy używać do działania pętli nazwij "i"
7.  Wewnątrz tej pętli, utwórz zmienną star,
8.  która będzie pustym stringiem (stan początkowy choinki który będzie rozbudowywany w kolejnej pętli).

9.  Następnie, wciąż wewnątrz głównej (zewnętrznej) pętli, zadeklaruj kolejną pętlę for. Tak, pętla w pętli!
10. Tym razem, zmienną którą będziemy liczyć ilość iteracji nazwij "j"
11. Wewnętrzna pętla ma się ona wykonać zależnie od tego, który wiersz aktualnie drukujemy w konsoli.
12. Czyli od tego która to iteracja głównej pętli. Warunek stopu to aktualny poziom (wartość zmiennej "i").
13. Wewnątrz drugiej pętli nadpisz zmienną "star" i 
14. za każdym razem kiedy pętla będzie wykonana, do aktualnej wartości "star" dodaj kolejną gwiazdkę "star += '*';"

15. Po opuszczeniu wewnętrznej pętli wyświetl console.log(star).
16. Stwórz nowe repozytorium i wyślij tam swoje zadanie, a link do niego wklej poniżej. 
Dla ambitnych: na każdym z poziomów dodaj spacje tak, aby choinka stała prosto.

*/



/*          rev 1:

1) nazwy zmiennych z małych liter.

2) parametr funkcji powinien zostać użyty jako wysokość choinki.

3) usuń niepotrzebne spacje wewnątrz okrągłych nawiasów fora. Tu możesz zobaczyć jak taki for jest "ospacjowany":
https://www.w3schools.com/js/js_conventions.asp

4) ostatni console.log nie jest potrzebny. Poza tym, wywołujesz w nim funkcję z parametrem i, który w tym kontekście jest undefined.


            rev 1 result:
var treeHigh = prompt("ile?", "3");

function drawTree(treeHigh) {
    for (var i = 1; i <= treeHigh; i++) {
        var star = "";
        for (var j = 0; j < i; j++) {
            var stars = star += "*";
        }
        console.log(stars);
    }
//      console.log(stars);
}
console.log(drawTree(treeHigh));

*/


/*          rev 2:

@4) nasza funkcja nic nie zwraca, stąd wywołanie console.log(drawTree(treeHigh)) wypisuje na konsolę undefined.
Zauważ, że nie musimy wypisywać "wyniku" tej funkcji, gdyż już w niej wypisujemy naszą choinkę. Stąd ostatni log jest zbędny.

5) Możesz przenieść var treeHigh = prompt("ile?", "3") na koniec, przed wywołanie funkcji.
Miej na uwadze jedną prawidłowość: nazwa zmiennej jest przypadkowo zbieżna z nazwą parametru.


            rev 2 result:
*/

var treeHigh = prompt("ile", "3")

function drawTree(n) {
    for (var i = 1; i <= n; i++) {
        var star = "";
        for (var j = 0; j < i; j++) {
            var star = star += "*";
        }
        console.log(star);
    }

    return "*";
}
drawTree(treeHigh);


//                  WORKS LIKE CHARM!!!!!!!!!               


/*
var n = prompt("ile", "3")
for (var i = 1; i <= n; i++) {
    var star = "";
    for (var j = 0; j < i; j++) {
        var star = star += "*";
    }
    console.log(star);
}
*/
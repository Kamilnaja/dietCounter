import React, { Component } from 'react';

class Ipsum extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>Tworzy puste archiwum i dodaje do niego pliki. Katalogi są przetwarzane rekursywnie.
            C Zmienia tymczasowo lokalizację. Na przykład polecenie cvf JARFileName.jar -C classes
            *.class przechodzi do katalogu classes w celu dodania klas.
            e Tworzy punkt startowy w manifeście (zobacz podrozdział 10.1.2, „Wykonywalne pliki JAR”).
            f Określa plik JAR o danej nazwie jako drugi argument wiersza poleceń. Jeśli tego parametru
            brakuje, jar wyśle wynik do standardowego wyjścia (przy tworzeniu pliku JAR) lub wczyta
            go ze standardowego wejścia (przy rozpakowywaniu lub tabulacji pliku JAR).
            i Tworzy plik indeksowy (przyspieszający wyszukiwanie w dużych archiwach).
            m Dodaje manifest do pliku JAR. Manifest jest opisem zawartości i pochodzenia pliku archiwum.
            Każde archiwum ma domyślny manifest, ale można utworzyć własny, który uwierzytelnia
            zawartość archiwum.</div>);
    }
}

export default Ipsum;
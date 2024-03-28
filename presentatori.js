function gestorePresentatori () {
	try {
		nodoPresentano.removeChild(nodoPresentano.firstChild);
		var desc = document.createTextNode(elenco[this.id]);
		nodoPresentano.appendChild(desc);
		document.getElementById("presentano").style.display = "block";

	} catch ( e ) {
		alert("gestorePresentatori" + e);
	}
}

var nodoAmadeus;
var nodoConti;
var nodoFrizzi;
var nodoInsinna;
var nodoPresentano;

var elenco = {
	"amadeus" :"La prima puntata del quiz televisivo “l’Eredità” andò in onda il 29 luglio 2002, con la conduzione di Amadeus, che nel settembre dello stesso anno ne divenne conduttore ufficiale dopo che il quiz venne scelto come programma da mandare in onda nella fascia preserale. Amadeus è stato anche il curatore e ideatore (insieme a Stefano Santucci) del programma. La trasmissione ottenne i primi successi nel mese di ottobre, e dato che ogni sera teniva incollati alla TV milioni di italiani il quiz venne trasmesso anche durante la pausa natalizia. Nella stagione 2003-2004 gli ascolti aumentarono notevolmente e data la fama acquisita dal programma Amadeus propose delle puntate speciali da trasmettere in prima serata, dal titolo “Galà de L'eredità”, dove i concorrenti sarebbero dovuti essere personaggi famosi e il montepremi vinto a fine puntata devoluto in beneficienza. È sotto la conduzione di Amadeus che venne introdotto il gioco simbolo del programma: nella stagione 2005-2006 la “Ghigliottina” (ideata da Santucci) divenne il gioco finale. Amadeus condusse “L’eredità” fino a fine stagione, per poi passare alle reti Mediaset nel settembre del 2006.",
	"conti" : "Nell’estate nel 2006 Carlo Conti venne scelto come successore di Amadeus, e oltre che conduttore del programma ne divenne anche un autore. Con la stagione 2008-2009 vengono introdotti nuovi giochi, ma “Il Duello” e “La Ghigliottina” rimangono le due prove finali. Nel dicembre 2009 venne trasmessa in diretta una puntata speciale dedicata alla maratona Telethon, dove i concorrenti del programma erano personaggi famosi e il montepremi veniva donato in beneficienza alla raccolta fondi. Nel febbraio del 2011 per la prima volta si sfidarono sei campioni  del passato, che gareggiarono per aggiudicarsi un supermontepremi da 600.000 euro. Nel marzo 2014 Carlo Conti comunicò che da aprile non sarebbe più stato il conduttore del programma per gli ultimi due mesi della stagione. Scelse come successore  Fabrizio Frizzi, al quale passerà il testimone della conduzione dal 14 aprile al 31 maggio 2014. Carlo Conti tornò nelle vesti di conduttore da settembre 2014 fino al 2 novembre dello stesso anno, quando venne nuovamente sostituito da Fabrizio Frizzi. Carlo Conti ritornò il 9 marzo 2015, dopo aver condotto il Festival di Sanremo.",
	"frizzi" : "La stagione 2016-2017 iniziò il 2 ottobre 2016 ed ebbe come conduttore Fabrizio Frizzi, che già aveva condotto il programma nelle stagioni precedenti in una “staffetta” con Carlo Conti. Sotto la conduzione di Frizzi il programma divenne, con le sue 3502 puntate, il quiz più longevo della storia della TV italiana, superando lo storico quiz “La ruota della fortuna” condotto da Mike Bongiorno.Il 20 settembre 2017 iniziò la sedicesima edizione del programma con la conduzione di Frizzi. A causa di problemi di salute il programma venne sospeso dal 24 al 29 ottobre 2017, e riprese il 30 ottobre con Conti come conduttore. Frizzi e Conti condussero insieme la puntata del 15 dicembre 2017, e dal giorno seguente Fabrizio Frizzi ritornò il conduttore ufficiale del quiz. Sfortunatamente Frizzi è venuto a mancare nel marzo del 2018 e, dopo una piccola pausa, il programma venne ripreso il 3 aprile 2018 e condotto fino al giugno dello stesso anno da Carlo Conti.",
	"insinna" : "Flavio Insinna venne scelto come conduttore del programma a partire dalla stagione 2018-2019, la prima dopo la scomparsa improvvisa di Frizzi. Per il conduttore romano non fu la prima volta a “L’eredità”, dato che aveva già condotto la puntata del 1 aprile 2015 per fare un “pesce d’aprile” ai telespettatori. L’ultima settimana della stagione sono andate in onda sette puntate speciali de “L’eredità”, in cui si sono sfidati, per il titolo di “SuperCampione”, sette campioni della stagione."
}
function gestoreLoad () {
	try {
		nodoAmadeus = document.getElementById("amadeus");
		nodoConti = document.getElementById("conti");
		nodoFrizzi = document.getElementById("frizzi");
		nodoInsinna = document.getElementById("insinna");
		nodoPresentano = document.getElementById("presentano");
		
		for ( i in elenco ) {
			var tab = document.getElementById(i);
			tab.onclick = gestorePresentatori;
		}
	} catch ( e ){
		alert("gestoreLoad" + e);
	}
}
window.onload = gestoreLoad;
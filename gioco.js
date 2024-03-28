//funzione che colora di verde lo sfondo dei campi di testo contenenti le parole giuste e fa sparire quelle sbagliate, dimezzando il montepremi
function gestoreGioca () {
	try {
		for (i in parol){
			if (document.getElementById([this.id]).value == i){
				document.getElementById([this.id]).style.backgroundColor = "rgb(144,238,144)";
				document.getElementById(c[this.id]).style.display = "none";
			} 
			else if (document.getElementById([this.id]).value == parol[i]) {
				document.getElementById([this.id]).style.display = "none";
				document.getElementById(c[this.id]).style.backgroundColor = "rgb(144,238,144)";
				nodoMontepremi.value = (nodoMontepremi.value)/2;
			}
		}
	} catch ( e ){
		alert("gestoreGioca" + e);
	}
}
//funzione che dice al giocatore se ha vinto o perso
function gestoreConferma () {
	try {
		var esito = nodoRisposta.value.toLowerCase();
		if (nodoParola1.value == "ANGOLO" && esito == "giro") {
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["giro"]);
			nodoSpiegazione.appendChild(risp);
		} 
		else if (nodoParola1.value == "ANGOLO" && esito != "giro") {
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["errore1"]);
			nodoSpiegazione.appendChild(risp);	
		} 
		else if (nodoParola1.value == "SPASSO" && esito == "uomo") {
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["uomo"]);
			nodoSpiegazione.appendChild(risp);
		} 
		else if ( nodoParola1.value == "SPASSO" && esito != "uomo") {
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["errore2"]);
			nodoSpiegazione.appendChild(risp);		
		} 
		else if (nodoParola1.value == "BATTERE" && esito == "colpo") {
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["colpo"]);
			nodoSpiegazione.appendChild(risp);
		} 
		else if (nodoParola1.value == "BATTERE" && esito != "colpo") {
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["errore3"]);
			nodoSpiegazione.appendChild(risp);	
		} 
		else if (nodoParola1.value == "COMPRARE" && esito == "cuore") {
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["cuore"]);
			nodoSpiegazione.appendChild(risp);
		} 
		else if ( nodoParola1.value == "COMPRARE" && esito != "cuore") {
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["errore4"]);
			nodoSpiegazione.appendChild(risp);		
		} 
		else if (nodoParola1.value == "IMPERATORE" && esito == "pinguino" ) {
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["pinguino"]);
			nodoSpiegazione.appendChild(risp);
		}
		else if (nodoParola1.value == "IMPERATORE" && esito != "pinguino") {
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["errore5"]);
			nodoSpiegazione.appendChild(risp);	
		} 
		else if (nodoParola1.value == "CASTELLO" && esito == "letto"){
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["letto"]);
			nodoSpiegazione.appendChild(risp);
		}
		else if (nodoParola1.value == "CASTELLO" && esito != "letto"){
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["errore6"]);
			nodoSpiegazione.appendChild(risp);
		}
		else if (nodoParola1.value == "DARE" && esito == "centro"){
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["centro"]);
			nodoSpiegazione.appendChild(risp);
		}
		else if (nodoParola1.value == "DARE" && esito != "centro"){
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["errore7"]);
			nodoSpiegazione.appendChild(risp);
		}
		else if (nodoParola1.value == "CASA" && esito == "carta"){
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["carta"]);
			nodoSpiegazione.appendChild(risp);
		}
		else if (nodoParola1.value == "CASA" && esito != "carta"){
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["errore8"]);
			nodoSpiegazione.appendChild(risp);
		}
		else if (nodoParola1.value == "BLU" && esito == "stella"){
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["stella"]);
			nodoSpiegazione.appendChild(risp);
		}
		else if (nodoParola1.value == "BLU" && esito != "stella"){
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["errore9"]);
			nodoSpiegazione.appendChild(risp);
		}
		else if (nodoParola1.value == "RIVISTA" && esito == "oggi"){
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["oggi"]);
			nodoSpiegazione.appendChild(risp);
		}
		else if (nodoParola1.value == "RIVISTA" && esito != "oggi"){
			nodoSpiegazione.removeChild(nodoSpiegazione.firstChild);
			var risp = document.createTextNode(pr["errore10"]);
			nodoSpiegazione.appendChild(risp);
		}
	} catch ( e ) {
		alert("gestoreConferma" + e );
	}
}
//funzione che decide in modo casuale gli elementi dell'array e che riempe i campi di testo
function Decidi () {
	try {
		var catalogo1 = [["ANGOLO","LATO"],["DARE","PRENDERE"],["FORMAZIONE","LAVORO"],["ITALIA","SVEZIA"],["MANO","COLLO"]];
		if(Math.ceil(Math.random()*10) == 1){
			catalogo1 = [["ANGOLO","LATO"],["DARE","PRENDERE"],["FORMAZIONE","LAVORO"],["ITALIA","SVEZIA"],["MANO","COLLO"]];
		} 
		else if (Math.ceil(Math.random()*10) == 2 ){
			catalogo1 = [["SPASSO","PASSO"],["ONORE","ONERE"],["RAGNO","APE"],["SALA","REPARTO"],["LATTA","ALLUMINIO"]];
		}
		else if (Math.ceil(Math.random()*10) == 3){
			catalogo1 = [["BATTERE","COLPIRE"],["SFORTUNA","FORTUNA"],["FULMINE","TUONO"],["SCENA","FILM"],["NAZIONE","STATO"]];
		}
		else if (Math.ceil(Math.random()*10) == 4){
			catalogo1 = [["COMPRARE","ROMPERE"],["PIANOFORTE","ORGANO"],["CIOCCOLATO","CREMA"],["GHIACCIO","ACQUA"],["OSCURITÀ","TENEBRA"]];
		}
		else if (Math.ceil(Math.random()*10) == 5){
			catalogo1 = [["IMPERATORE","RE"],["SUPERMAN","BATMAN"],["FRAC","ABITO"],["CAMMINARE","CORRERE"],["GELATO","DESSERT"]];
		}
		else if (Math.ceil(Math.random()*10) == 6){
			catalogo1 = [["CASTELLO","VILLA"],["PIAZZA","STRADA"],["LAGO","FIUME"],["PELLICCIA","PIUME"],["PARTE","QUOTA"]];
		}
		else if (Math.ceil(Math.random()*10) == 7){
			catalogo1 = [["DARE","FARE"],["ANDARE","DECIDERE"],["DIREZIONALE","SINCERO"],["GRAVITÀ","PESO"],["CERCHIO","BASTONE"]];
		}
		else if (Math.ceil(Math.random()*10) == 8){
			catalogo1 = [["CASA","MAGIONE"],["SALE","ZUCCHERO"],["LAVORO","IDENTITÀ"],["AMARSI","TAGLIARSI"],["REGINA","CAVALLO"]];
		}
		else if (Math.ceil(Math.random()*10) == 9){
			catalogo1 = [["BLU","ROSSA"],["SCERIFFO","CAVALIERE"],["FERMO","STAI"],["EGIZIANA","MACEDONE"],["NINJA","SAMURAI"]];
		}
		else if (Math.ceil(Math.random()*10) == 10){
			catalogo1 = [["RIVISTA","BISETTIMANALE"],["IERI","MATTINA"],["GIOVANNI","GIOVANI"],["GIORNO","NOTTE"],["SÌ","NO"]];
		}
		nodoParola1.value = catalogo1[0][0];
		nodoParola2.value = catalogo1[0][1];
		nodoParola3.value = catalogo1[1][0];
		nodoParola4.value = catalogo1[1][1];
		nodoParola5.value = catalogo1[2][0];
		nodoParola6.value = catalogo1[2][1];
		nodoParola7.value = catalogo1[3][0];
		nodoParola8.value = catalogo1[3][1];
		nodoParola9.value = catalogo1[4][0];
		nodoParola10.value = catalogo1[4][1];
	} catch ( e ) {
		alert("Decidi" + e);
	}
}
function inizializza () {
	try {
		nodoRisposta.value = "";
		nodoMontepremi.value = "200000";
	} catch ( e ) {
		alert("inizializza" + e );
	}
}
//array associativo i cui indici sono le risposte corrette e i cui valori sono le risposte sbagliate
var parol = {
	//prima parola
	"PASSO" : "SPASSO",
	"ONORE" : "ONERE",
	"RAGNO" : "APE",
	"REPARTO" : "SALA",
	"LATTA" : "ALLUMINIO",
	//seconda parola
	"ANGOLO" : "LATO",
	"PRENDERE" : "DARE",
	"FORMAZIONE" : "LAVORO",
	"ITALIA" : "SVEZIA",
	"COLLO" : "MANO",
	//terza parola
	"BATTERE" : "COLPIRE",
	"FORTUNA" : "SFORTUNA",
	"FULMINE" : "TUONO",
	"SCENA" : "FILM",
	"STATO" : "NAZIONE",
	//quarta parola
	"ROMPERE" : "COMPRARE",
	"ORGANO" : "PIANOFORTE",
	"CIOCCOLATO" : "CREMA",
	"GHIACCIO" : "ACQUA",
	"TENEBRA" : "OSCURITÀ",
	//quinta parola
	"IMPERATORE" : "RE",
	"BATMAN" : "SUPERMAN",
	"FRAC" : "ABITO",
	"CAMMINARE" : "CORRERE",
	"GELATO" : "DESSERT",
	//sesta parola
	"CASTELLO" : "VILLA",
	"PIAZZA" : "STRADA",
	"FIUME" : "LAGO",
	"PIUME" : "PELLICCIA",
	"PARTE" : "QUOTA",
	//settima parola
	"FARE" : "DARE",
	"ANDARE" : "DECIDERE",
	"DIREZIONALE": "SINCERO",
	"GRAVITÀ" : "PESO",
	"CERCHIO" : "BASTONE",
	//ottava parola
	"CASA" : "MAGIONE",
	"ZUCCHERO" : "SALE",
	"IDENTITÀ" : "LAVORO",
	"TAGLIARSI" : "AMARSI",
	"REGINA" : "CAVALLO",
	//nona parola
	"ROSSA" : "BLU",
	"SCERIFFO" : "CAVALIERE",
	"STAI" : "FERMO",
	"EGIZIANA" : "MACEDONE",
	"NINJA" : "SAMURAI",
	//decima parola
	"RIVISTA" : "BISETTIMANALE",
	"IERI" : "MATTINA",
	"GIOVANI" : "GIOVANNI",
	"GIORNO" : "NOTTE",
	"NO" : "SÌ"
}
var c = {
	"Parola1" : "Parola2",
	"Parola2" : "Parola1",
	"Parola3" : "Parola4",
	"Parola4" : "Parola3",
	"Parola5" : "Parola6",
	"Parola6" : "Parola5",
	"Parola7" : "Parola8",
	"Parola8" : "Parola7",
	"Parola9" : "Parola10",
	"Parola10" : "Parola9"
}
var nodoParola1;
var nodoParola2;
var nodoParola3;
var nodoParola4;
var nodoParola5;
var nodoParola6;
var nodoParola7;
var nodoParola8;
var nodoParola9;
var nodoParola10;
var nodoMontepremi;
var nodoConferma;
var nodoRisposta;
var nodoSpiegazione;

//array associativo con le soluzioni delle risposte
var pr = {
	"giro" : "HAI VINTO! La parola giusta è GIRO: l'angolo giro è un angolo di 360 gradi; prendere in giro qualcuno; giro di formazione (il giro di riscaldamento delle gomme nella Formula 1); il Giro d'Italia (corsa ciclistica che si svolge in Italia); girocollo.",
	"uomo" : "HAI VINTO! La parola giusta è UOMO: andare a passo d'uomo; essere un uomo d'onore; l'uomo-ragno (famoso supereroe dei fumetti Marvel); il reparto uomo (per esempio nei negozi di sport o abbigliamento); l'Uomo di Latta è un personaggio immaginario de Il mago di Oz.",
	"colpo" : "HAI VINTO! La parola giusta è COLPO: battere un colpo; un colpo di fortuna; colpo di fulmine (innamorarsi a prima vista); colpo di scena (quando succede qualcosa di inaspettato e imprevedibile); colpo di stato (prendere il potere con la forza).", 
	"cuore" : "HAI VINTO! La parola giusta è CUORE : rompere il cuore a qualcuno; il cuore è un organo muscolare del corpo umano; dolce dal cuore di cioccolato; avere il cuore di ghiaccio (si dice di un persona che sembra non provare pietà o compassione); Cuore di Tenebra (romanzo di Joseph Conrad).",
	"pinguino" : "HAI VINTO! La parola giusta è PINGUINO: pinguino imperatore; il Pinguino è un nemico di Batman; la forma della coda di un pinguino ricorda quella di un frac; camminare a pinguino (tecnica per camminare sulla neve per non scivolare); il pinguino è anche il nome di un gelato.",
	"letto": "HAI VINTO! La parola giusta è LETTO: letto a castello; letto a una piazza; il letto del fiume; dormire su un letto di piume; la parte del letto.",
	"centro" : "HAI VINTO! La parola giusta è CENTRO: fare centro; andare in centro; centro direzionale (il centro dei commerci di una città); centro di gravità permanente (canzone di Battiato); centro di un cerchio (il punto equidistante da tutti i punti della sua circonferenza).",
	"carta": "HAI VINTO! La parola corretta è CARTA: la Casa di Carta è una serie TV in onda su Netflix dal 2017; la carta da zucchero è una tonalità di blu; la carta d'identità è un documento di riconoscimento personale; tagliarsi con la carta; la regina è una carta, dal simbolo Q.",
	"stella": "HAI VINTO! La parola corretta è STELLA: la Stella Rossa è una squadra di calcio serba; la stella dello sceriffo; Stella Stai è una canzone di Umberto Tozzi; la stella egiziana è una pianta appartenente alla famiglia delle Rubiaceae; stella ninja è il nome italiano dello Shuriken.",
	"oggi": "HAI VINTO! La parola corretta è OGGI: Oggi è una rivista italiana; ieri è il giorno prima di oggi; i giovani d'oggi; al giorno d'oggi; Oggi No è una canzone dell'artista italiano Ghali.",
	"errore1" : "HAI PERSO! La parola giusta è GIRO: l'angolo giro è un angolo di 360 gradi; prendere in giro qualcuno; giro di formazione (il giro di riscaldamento delle gomme nella Formula 1); il Giro d'Italia (corsa ciclistica che si svolge in Italia); girocollo.",
	"errore2" : "HAI PERSO! La parola giusta è UOMO: andare a passo d'uomo; uomo d'onore; l'uomo-ragno (famoso supereroe dei fumetti Marvel); il reparto uomo (per esempio nei negozi di sport o abbigliamento); l'uomo di latta è un personaggio immaginario de Il mago di OZ.",
	"errore3" : "HAI PERSO! La parola giusta è COLPO: battere un colpo; un colpo di fortuna; colpo di fulmine (innamorarsi a prima vista); colpo di scena (quando succede qualcosa di inaspettato e imprevedibile); colpo di stato (prendere il potere con la forza).", 
	"errore4" : "HAI PERSO! La parola giusta è CUORE : rompere il cuore a qualcuno; il cuore è un organo muscolare del corpo umano; dolce dal cuore di cioccolato; avere il cuore di ghiaccio (si dice di un persona che sembra non provare pietà o compassione); Cuore di Tenebra (romanzo di Joseph Conrad).",
	"errore5" : "HAI PERSO! La parola giusta è PINGUINO: pinguino imperatore; il Pinguino è un nemico di Batman; la forma della coda di un pinguino ricorda quella di un frac; camminare a pinguino (tecnica per camminare sulla neve per non scivolare); il pinguino è un gelato.",
	"errore6": "HAI PERSO! La parola giusta è LETTO: letto a castello; letto a una piazza; il letto del fiume; dormire su un letto di piume; la parte del letto.",
	"errore7" : "HAI PERSO! La parola giusta è CENTRO: fare centro; andare in centro; centro direzionale (il centro dei commerci di una città); centro di gravità permanente (canzone di Battiato); centro di un cerchio (il punto equidistante da tutti i punti della sua circonferenza).",
	"errore8": "HAI PERSO! La parola corretta è CARTA: la Casa di Carta è una serie TV in onda su Netflix dal 2017; la carta da zucchero è una tonalità di blu; la carta d'identità è un documento di riconoscimento personale; tagliarsi con la carta; la regina è una carta, dal simbolo Q.",
	"errore9": "HAI PERSO! La parola corretta è STELLA: la Stella Rossa è una squadra di calcio serba; la stella dello sceriffo; Stella Stai è una canzone di Umberto Tozzi; la stella egiziana è una pianta appartenente alla famiglia delle Rubiaceae; stella ninja è il nome italiano dello Shuriken.",
	"errore10": "HAI PERSO! La parola corretta è OGGI: Oggi è una rivista italiana; ieri è il giorno prima di oggi; i giovani d'oggi; al giorno d'oggi; Oggi No è una canzone dell'artista italiano Ghali."
}
function gestoreLoad(){
	try {
		nodoParola1 = document.getElementById("Parola1");
		nodoParola2 = document.getElementById("Parola2");
		nodoParola3 = document.getElementById("Parola3");
		nodoParola4 = document.getElementById("Parola4");
		nodoParola5 = document.getElementById("Parola5");
		nodoParola6 = document.getElementById("Parola6");
		nodoParola7 = document.getElementById("Parola7");
		nodoParola8 = document.getElementById("Parola8");
		nodoParola9 = document.getElementById("Parola9");
		nodoParola10 = document.getElementById("Parola10");
		nodoMontepremi = document.getElementById("montepremi");
		nodoConferma = document.getElementById("conferma");
		nodoRisposta = document.getElementById("risposta");
		nodoSpiegazione = document.getElementById("spiegazione");
		for ( i in c ) {
			var info = document.getElementById(i);
			info.onclick = gestoreGioca;
		}
		nodoConferma.onclick = gestoreConferma;
		var txt = document.createTextNode("Ti sono proposte 5 coppie di parole, clicca su una delle due per confermare la tua scelta. Se hai scelto la parola giusta il suo sfondo diventerà verde, mentre se hai scelto quella sbagliata ti verrà mostrata la parola giusta, ma il tuo montepremi si dimezzerà. Quando pensi di conoscere la risposta scrivila nel campo di testo e premi il bottone per sapere se hai vinto o perso. Riuscirai a portarti a casa il montepremi?");
		nodoSpiegazione.appendChild(txt);
		Decidi();
		inizializza();
	} catch ( e ) {
		alert("gestoreLoad" + e );
	}
}
window.onload = gestoreLoad;
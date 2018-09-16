/*demander le nom
var username=prompt('Entrez votre nom:');
		alert(username);//affiche le nom*/

/*concatenation 
var start='Bonjour ', name, end=' !', result;
		name=prompt('Entrez votre nom');
		result=start+name+end;
		alert(result);//affiche Bonjour nom !*/
		
/*concatener un text et un nombre
var text='Voici un nombre : ',number=42,result;
		result=text+number;
		alert(result);//affiche 'Voici un nombre : 42'*/
		
/*convertir une chaine de caractere en nombre
var first, second, result;
		first = prompt('Entrez un premier chiffre :');
		second = prompt('Entrez le second chiffre :');
		result = parseInt(first) + parseInt(second);
		alert(result); // Affiche : « résultat de l'addition  »*/
		
/*convertir un nombre en chaine de caractere
var text, number1=2, number2=5;
		text=number1 + ''+number2;
		alert(text);//affiche 25*/
		
/* comparaison avec les booleens
var number1 = 2, number2 = 2, number3 = 4, result;

		result = number1 == number2; // On spécifie deux variables avec l'opérateur de comparaison entre elles
		alert(result); // Affiche « true », la condition est donc vérifiée car les deux variables contiennent bien la même valeur

		result = number1 == number3;
		alert(result); // Affiche « false », la condition n'est pas vérifiée car 2 est différent de 4

		result = number1 < number3; 
		alert(result); // Affiche « true », la condition est vérifiée car 2 est bien inférieur à 4*/
	
/* comparaison avec les booleens === et !===
var number = 4, text = '4', result;

		result = number == text;
		alert(result); // Affiche  « true » alors que « number » est un nombre et « text » une chaîne de caractères

		result = number === text;
		alert(result); // Affiche « false » car cet opérateur compare aussi les types des variables en plus de leurs valeurs*/
		
/*comparateur de logique
ET
var result = true && true;
alert(result); // Affiche : « true »

result = true && false;
alert(result); // Affiche : « false »

result = false && false;
alert(result); // Affiche : « false »
		
OU
var result = true || true;
alert(result); // Affiche : « true »

result = true || false;
alert(result); // Affiche : « true »

result = false || false;
alert(result); // Affiche : « false »

NON
var result = false;

result = !result; // On stocke dans « result » l'inverse de « result », c'est parfaitement possible
alert(result); // Affiche « true » car on voulait l'inverse de « false »

result = !result;
alert(result); // Affiche « false » car on a inversé de nouveau « result », on est donc passé de « true » à « false »
		*/
		
/* combinaison des comparateurs
var condition1, condition2, result;

condition1 = 2 > 8; // false
condition2 = 8 > 2; // true

result = condition1 && condition2;
alert(result); // Affiche « false »*/

/* combinaison des comparateurs sur une seule ligne
var result = 2 > 8 && 8 > 2;
alert(result); // Affiche « false »*/

/* demander le nom
var username=prompt('Entrez votre nom:');
		alert(username);//affiche le nom*/

/*concatenation 
var start='Bonjour ', name, end=' !', result;
		name=prompt('Entrez votre nom');
		result=start+name+end;
		alert(result);//affiche Bonjour nom !*/
		
/*concatener un text et un nombre
var text='Voici un nombre : ',number=42,result;
		result=text+number;
		alert(result);//affiche 'Voici un nombre : 42'*/
		
/*convertir une chaine de caractere en nombre
var first, second, result;
		first = prompt('Entrez un premier chiffre :');
		second = prompt('Entrez le second chiffre :');
		result = parseInt(first) + parseInt(second);
		alert(result); // Affiche : « résultat de l'addition  »*/
		
/*convertir un nombre en chaine de caractere
var text, number1=2, number2=5;
		text=number1 + ''+number2;
		alert(text);//affiche 25*/
		
/* comparaison avec les booleens
var number1 = 2, number2 = 2, number3 = 4, result;

		result = number1 == number2; // On spécifie deux variables avec l'opérateur de comparaison entre elles
		alert(result); // Affiche « true », la condition est donc vérifiée car les deux variables contiennent bien la même valeur

		result = number1 == number3;
		alert(result); // Affiche « false », la condition n'est pas vérifiée car 2 est différent de 4

		result = number1 < number3; 
		alert(result); // Affiche « true », la condition est vérifiée car 2 est bien inférieur à 4*/
	
/* comparaison avec les booleens === et !===
var number = 4, text = '4', result;

		result = number == text;
		alert(result); // Affiche  « true » alors que « number » est un nombre et « text » une chaîne de caractères

		result = number === text;
		alert(result); // Affiche « false » car cet opérateur compare aussi les types des variables en plus de leurs valeurs*/
		
/*comparateur de logique
ET
var result = true && true;
alert(result); // Affiche : « true »

result = true && false;
alert(result); // Affiche : « false »

result = false && false;
alert(result); // Affiche : « false »
		
OU
var result = true || true;
alert(result); // Affiche : « true »

result = true || false;
alert(result); // Affiche : « true »

result = false || false;
alert(result); // Affiche : « false »

NON
var result = false;

result = !result; // On stocke dans « result » l'inverse de « result », c'est parfaitement possible
alert(result); // Affiche « true » car on voulait l'inverse de « false »

result = !result;
alert(result); // Affiche « false » car on a inversé de nouveau « result », on est donc passé de « true » à « false »
		*/
		
/* combinaison des comparateurs
var condition1, condition2, result;

condition1 = 2 > 8; // false
condition2 = 8 > 2; // true

result = condition1 && condition2;
alert(result); // Affiche « false »*/

/* combinaison des comparateurs sur une seule ligne
var result = 2 > 8 && 8 > 2;
alert(result); // Affiche « false »*/

/* condition if
if (2 < 8 && 8 >= 4) { // Cette condition renvoie « true », le code est donc exécuté
	alert('La condition est bien vérifiée.');}

if (2 > 8 || 8 <= 4) { // Cette condition renvoie « false », le code n'est donc pas exécuté
	alert("La condition n'est pas vérifiée mais vous ne le saurez pas vu que ce code ne s'exécute pas.");}*/
	
/* avec fonction confirm()
if (confirm('Voulez-vous exécuter le code JavaScript de cette page ?'))
		{alert('Le code a bien été exécuté !');}*/

/* if else
if (confirm('Pour accéder à ce site vous devez avoir 18 ans ou plus, cliquez sur "OK" si c\'est le cas.')){
	alert('Vous allez être redirigé vers le site.');
	}else{
	alert("Désolé, vous n'avez pas accès à ce site.");
	}*/
		
/* else if
var floor = parseInt(prompt("Entrez l'étage où l'ascenseur doit se rendre (de -2 à 30) :"));

		if (floor == 0) {

			alert('Vous vous trouvez déjà au rez-de-chaussée.');

		} else if (-2 <= floor && floor <= 30) {

			alert("Direction l'étage n°" + floor + ' !');

		} else {

			alert("L'étage spécifié n'existe pas.");

		}*/

/* condition switch
var drawer = parseInt(prompt('Choisissez le tiroir à ouvrir (1 à 4) :'));
switch (drawer) {
			case 1:
				alert('Contient divers outils pour dessiner : du papier, des crayons, etc.');
			break;

			case 2:
				alert('Contient du matériel informatique : des câbles, des composants, etc.');
			break;

			case 3:
				alert('Ah ? Ce tiroir est fermé à clé ! Dommage !');
			break;

			case 4:
				alert('Contient des vêtements : des chemises, des pantalons, etc.');
			break;

			default:
				alert("Info du jour : le meuble ne contient que 4 tiroirs et, jusqu'à preuve du contraire, les tiroirs négatifs n'existent pas.");
		}*/

/* condition switch avec valeur texte
var drawer = prompt('Entrez la valeur 1 :');

switch (drawer) {
    case '1':
        alert('Bravo !');
    break;

    default:
        alert('Perdu !');
}*/

/* condition ternaire
var startMessage = 'Votre catégorie : ',
			endMessage,
			adult = confirm('Êtes-vous majeur ?');

		endMessage = adult ? '18+' : '-18';

		alert(startMessage + endMessage);*/

/* test de l'existence d'une variable - tous les contenus valent true - 
false=0,vide, undefined
var conditionTest = 'Fonctionnera ? Fonctionnera pas ?';

		if (conditionTest) {
			alert('Fonctionne !');
		} else {
			alert('Ne fonctionne pas !');
		}*/

/* très important à connaitre = ce code nous renvoie seulement la condition qui a la valeur true
donc non vide !
var conditionTest1 = '', conditionTest2 = 'Une chaîne de caractères';

			alert(conditionTest1 || conditionTest2);
		
/* boucle while avec proceed=variable témoin
var nicks = '',
    nick,
    proceed = true;

	while (proceed) {
    nick = prompt('Entrez un prénom :');

		if (nick) {
        nicks += nick + ' '; // Ajoute le nouveau prénom ainsi qu'une espace juste après
		} else {
        proceed = false; // Aucun prénom n'a été entré, donc on fait en sorte d'invalider la condition
		}
	}

	alert(nicks); // Affiche les prénoms à la suite
	
/* boucle for

for (var i=0, nicks = '', nick; true;i++) {
    nick = prompt('Entrez un prénom :');
  
		if (nick) {
			nicks += nick + ' ';  
		} else {
			break;  
		}	
	}

	alert('Il y a '+i+' prénoms:\n\n'+ nicks);
	
/* créer une fonction avec declaration de variables locales
se trouvant au sein d'une scope (!= variables globales se trouve dans le code
en dehors de la fonction)
function calculate() {
    var var1 = 2,
        var2 = 3;
    alert(var1 * var2);
}

calculate();
	
/* créer une fonction avec des arguments
function moar(first, second) {
    // On peut maintenant utiliser les variables « first » et « second » comme on le souhaite :
    alert('Votre premier argument : ' + first);
    alert('Votre deuxième argument : ' + second);
	}
	
/* fonction avec argument facultatif à mettre à la fin allowCancel
function prompt2(text, allowCancel) {

    if (typeof allowCancel === 'undefined') { // Souvenez-vous de typeof, pour vérifier le type d'une variable
        allowCancel = false;
    }

    // Le code… que l'on ne créera pas =p
}

prompt2('Entrez quelque chose :'); // On exécute la fonction seulement avec le premier argument, pas besoin du deuxième

/* valeurs de retour (uen seule et unique par fonction sauf tableau ou objet)
function sayHello() {
    return 'Bonjour !'; // L'instruction « return » suivie d'une valeur, cette dernière est donc renvoyée par la fonction
}

alert(sayHello()); // Ici on affiche la valeur retournée par la fonction sayHello()

/* fonctions anonymes (très importants - les bases)
var sayHello = function() {
    alert('Bonjour !');
};
sayHello(); // Affiche : « Bonjour ! »

/* fonctions anonymes : isoler son code
Immediately-Invoked-Function-Expression ou IIFE
impossible de les appeler donc faire IIFE automatiquement
(function(){
	//code isolé
})();

/* fonction anonyme et portée des variables

var test = 'noir'; // On crée une variable « test » contenant le mot « noir »

(function() { // Début de la zone isolée

    var test = 'blanc'; // On crée une variable du même nom avec le contenu « blanc » dans la zone isolée
  
    alert('Dans la zone isolée, la couleur est : ' + test);

})(); // Fin de la zone isolée. Les variables créées dans cette zone sont détruites.

alert('Dans la zone non-isolée, la couleur est : ' + test); // Le texte final contient bien le mot « noir » vu que la « zone isolée » n'a aucune influence sur le reste du code

/* enregistrer dans le code global une des valeurs
générées dans la zone isolée

var sayHello = (function() {

    return 'Yop !';

})();

alert(sayHello); // Affiche : « Yop ! »


/* demander un nombre et vérifier si c'est un nombre
si true alors recommencer
si false retourner le nombre

function askNumber() {
    var string, number;
	
    while (true) {
        string = prompt('Entrez un nombre entier positif');		
        number = parseInt(string);
		
        if (!isNaN(number)) { // C'est bien un nombre
            return number;
        }
    }
}

/* LES OBJETS

var myString = 'Ceci est une chaîne de caractères';
// On crée un objet String

alert(myString.length);
// On affiche le nombre de caractères, au moyen de la propriété « length »

alert(myString.toUpperCase());
// On récupère la chaîne en majuscules, avec la méthode toUpperCase()

/* Les tableaux
tableau=array contient plusieurs valeurs, appelées items
attention - chaque item est accesible au moyen d'indice
et -attention-la numérotation commence par zéro

Déclarer un tableau
var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
ou
var myArray = [42,12,2];

Récupérer ou modifier des valeurs :

Récupérer
var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];

alert(myArray[1]); // Affiche : « Laurence »

Modifier une valeur
var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];

myArray[1] = 'Clarisse';

alert(myArray[1]); // Affiche : « Clarisse »

Opérations sur les tableaux

Ajouter des items

var myArray = ['Sébastien', 'Laurence'];

myArray.push('Ludovic');
// Ajoute « Ludovic » à la fin du tableau
myArray.push('Pauline', 'Guillaume');
// Ajoute « Pauline » et « Guillaume » à la fin du tableau

Supprimer des items
var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];

myArray.shift(); // Retire « Sébastien »
myArray.pop(); // Retire « Guillaume »

alert(myArray); // Affiche « Laurence,Ludovic,Pauline »

Chaine de caractere et tableau
1 - transformer une cdc en tableau
var cousinsString = 'Pauline Guillaume Clarisse',
    cousinsArray = cousinsString.split(' ');

alert(cousinsString);
alert(cousinsArray);

2 - créer une cdc à partir d'un tableau
var cousinsString_2 = cousinsArray.join('-');

alert(cousinsString_2);

Ici, une chaîne de caractères va être créée,
 et les valeurs de chaque item seront séparées
 par un tiret. Si vous ne spécifiez rien comme
 séparateur, les chaînes de caractères seront 
 collées les unes aux autres.
 
 PARCOURIR UN TABLEAU
 
 for (var i = 0, c = myArray.length; i < c; i++) {
	
    alert(myArray[i]);
		
}

LES OBJETS LITTERAUX

var myObject = {
	item1: 'texte 1',
	item2: ' texte 2'
};

var family = {
    self: 'Sébastien',
    sister: 'Laurence',
    brother: 'Ludovic',
    cousin_1: 'Pauline',
    cousin_2: 'Guillaume'
};

Acces aux items :

family.sister;
ou
family['sister'];
ou
var id = 'sister';

alert(family[id]); // Affiche : « Laurence »

Ajouter des items :

family['uncle'] = 'Didier'; 
// « Didier » est ajouté et est accessible via
 l'identifiant « uncle »
 ou
family.uncle = 'Didier'; 
// Même opération mais d'une autre manière

Parcourir un objet littéral AVEC FOR IN

for (var id in family) { // On stocke l'identifiant dans « id » pour parcourir l'objet « family »
	
    alert(id + ' : ' + family[id]);
		
}

exemple classique d'utilisation : fonction qui calcule des
coordonnées d'un élément HTML sur une page Web.
Il faut ici retourner les coordonnées x et y.

function getCoords() {
	// Script incomplet, juste pour l'exemple 

    return {
        x: 12,
        y: 21
    };
}

var coords = getCoords();

alert(coords.x); // 12
alert(coords.y); // 21

Exercice avec les prenoms

var nicks = [], // Création du tableau vide
    nick;

while (nick = prompt('Entrez un prénom :')) { 
// Si la valeur assignée à la variable « nick »
est valide (différente de « null ») alors la boucle
s'exécute
    nicks.push(nick); // Ajoute le nouveau prénom
	au tableau
}

if (nicks.length > 0) { // On regarde le nombre d'items
    alert(nicks.join(' ')); // Affiche les prénoms à la suite
} else {
    alert('Il n\'y a aucun prénom en mémoire !');
}*/

// La fonction « a » affiche la valeur qu'elle reçoit de « b ».


/* débugage d'une pile d'instruction

function a(value) {
    console.log(value);
}

// La fonction « b » incrémente la valeur reçue par « c » puis la passe en paramètre à « a ».
function b(value) {
    a(value + 1);
}

// La fonction « c » incrémente la valeur reçue par la boucle for puis la passe en paramètre à « b ».
function c(value) {
    b(value + 1);
}

// Pour chaque itération, cette boucle passe en paramètre la valeur de « i » à la fonction « c ».
for (var i = 0; i < 10; i++) {
    c(i);
}

*/

/*exercice transformer un chiffre en lettre 0 à 999
<script>
		function num2letters(number){
			if (isNaN(number)||number<0||999<number){
				return 'Veuillez entrer un nombre entier compris entre 1 et 999';
			}

		//tableau des unités et des dizaines
		var unitnumber=['','un','deux','trois','quatre','cinq','six','sept','huit','neuf'],
			tennumber=['','dix','vingt','trente','quarante','cinquante','soixante','soixante-dix','quatre-vingt','quatre-vingt-dix'];
		
		// séparation des unites, dizaines, centaines
		var units=number%10,
			tens=(number%100-u)/10,
			hundreds=(number%1000-number%100)/100;
		// création des variables qui vont contenir les chiffres en lettre	
		var unitsOut, tensOut, hundredOut;

		if (number===0){
			return'zéro';
		}else{
			//Traitement des unités
			unitsOut = (units === 1 && tens>0 && tens!==8 ? 'et-' : '') + units2letter[units];
		}

			//Traitement des dizaines
			if (tens === 1 && units > 0) {

				tensOut = units2Letters[10 + units];
				unitsOut = '';

			} else if (tens === 7 || tens === 9) {

				tensOut = tens2Letters[tens] + '-' + (tens === 7 && units === 1 ? 'et-' : '') + units2Letters[10 + units];
				unitsOut = '';

			} else {

			tensOut = tens2Letters[tens];

			

			tensOut += (units === 0 && tens === 8 ? 's' : '');

			//Traitement des centaines

			hundredsOut = (hundreds > 1 ? units2Letters[hundreds] + '-' : '') + (hundreds > 0 ? 'cent' : '') + (hundreds > 1 && tens == 0 && units == 0 ? 's' : '');

			// Retour du total

			return hundredsOut + (hundredsOut && tensOut ? '-' : '') + tensOut + (hundredsOut && unitsOut || tensOut && unitsOut ? '-' : '') + unitsOut;

		}
	}





		var userEntry; //le texte entré par l'utilisateur

		while (userEntry=prompt('Indiquez le nombre à écrire en toutes lettres (entre 0 et 999) : ')){
			alert(num2letters(parseInt(userEntry, 10)));
		}
			
		
	</script>*/

	/*AADEVENTLISTENER = a utiliser absolument pour gérer les évènements
on accède au premier paragraphe
var p1=document.querySelector('p');

//on accroche un evenement au paragraphe
p1.addEventListener('click',message1);
p1.addEventListener('click',message2);

//on crée les fonctions
function message1(){
	alert('message 1');
}
function message2(){
	alert('message 2');
}


script evenement avec mouseover etc

//on affecte un évènement au paragraphe
//on ne met pas les () sinon la fonction va se déclencher automatiquement
//et on veut que la fonction se déclenche lorsque l'évènement se produit
p1.addEventListener('mouseover',fonction1);//mouseover=passage du curseur sur l'élément
p1.addEventListener('mouseout',reset1);//mouseout=le curseur sort de l'élément
p1.addEventListener('mousedown',fonction2);//mousedown=click sur l'élément
p1.addEventListener('mouseup',reset2);//mouseup=quand le click se relache

on crée les fonctions
function fonction1(){
	this.innerHTML="Cliquez-moi !";
	this.style.backgroundColor="orange";
}
function reset1(){
	this.innerHTML="Passez sur moi !";
	this.style.backgroundColor="";
}


function fonction2(){
	this.innerHTML="Bravo !";
	this.style.color='bleu';
	this.fontSize="24px";
	this.fontWeight='bold';
}

function reset2(){
	this.innerHTML="";
	this.style.color='';
	this.fontSize="";
	this.fontWeight='';
}*/


/*exemple de gestion d'évènements en capture et bouillonnement
<!DOCTYPE>
<html>
<head>
	
	<meta charset="utf-8">
	<meta name="description" value="Exercice openclassroom sur le Javascript">
	<meta name="author" value="Karen Derrien">
	<link rel="stylesheet" type="text/css" href="style.css" />
	<title>Bases de Javascript</title>
	<style>
		div{
			border: 1px solid orange;
			background-color: aqua;
			padding: 10px;
			margin: 10px;
		}
	</style>
</head>

<body>

<h1>Les évènements : La capture et le bouillonnement</h1>

<div id='div1'>
	<p id='p1'>Phase de bouillonnement au clic</p>
</div>

<div id='div2'>
	<p id='p2'>Phase de <strong>capture</strong> au clic</p>
</div>



<script>
//on accède au body, puis 
	var body=document.body;
	var dv1=document.getElementById('div1');
	var p1=document.getElementById('p1');
	var div2=document.getElementById('div2');
	var p2=document.getElementById('p2');
	var strong=document.querySelector('strong');

//on accroche un évènement aux éléments div et p
//phase de bouillonnement (quand ca remonte)
p1.addEventListener('click',messagep1);
div1.addEventListener('click',messagediv1);
body.addEventListener('click',messagebody);

//phase de capture (quand ca descend au debut)
p2.addEventListener('click',messagep2,true);
strong.addEventListener('click',messagestrong,true);


//on crée les fonctions
function messagep1(){alert('bouillonnement du paragraphe 1');};
function messagediv1(){alert('bouillonnement du div1');};
function messagebody(){alert('bouillonnement du body');};
function messagep2(){alert('capture du paragraphe 2');};
function messagestrong(){alert('capture du strong');};


</script>
	
		
<footer>Copyright 2018</footer>	
	
</body>
</html>	
*/


/*Objet Event avec les propriétés target, currentTarget et Type
<body>

<h1 id='gros_titre'>L'objet event</h1>

<div id='div1'>
	<p>Qui est l'élément déclencheur ? Qui est l'élément porteur ?</p>
</div>

<script>
var div1=document.getElementById('div1');
var p1=document.querySelector('p');

div1.addEventListener('click', messagediv1,true);
p1.addEventListener('click',messagep1, true);

function messagediv1(event){
	this.innerHTML="L'élément déclencheur est :"+ event.target +
	"<br/>L'élément porteur est :" + event.currentTarget +
	"<br/> Le type d'évènement est :"+ event.type;
}
</script>
	
		
<footer>Copyright 2018</footer>	
	
</body>
*/

/*EMPECHER LA PROPAGATION DES EVENEMENTS
<h1 id='gros_titre'>Les évènements</h1>

<div id='div1'>
	<p>Propagation des évènements</p>
</div>

<script>
//on accède au div et au paragraphe
var div1=document.getElementById('div1');
var para=document.querySelector('p');

//on accroche un évènement capture au div et au para 
div1.addEventListener('click',messageDiv,true);
para.addEventListener('click',messagePara,true);

//on crée la fonction qui va alerter et on empêche la propagation
function messageDiv(event){
	alert('On empêche la propagation');
	event.stopPropagation();
}

</script>*/

/*EMPECHER L'EXECUTION D'UN GESTIONNAIRE D'EVENEMENT
<h1 id='gros_titre'>Les évènements</h1>

<div id='div1'>
	<p>Propagation des évènements</p>
</div>

<script>
//on accède au div et au paragraphe
var div1=document.getElementById('div1');
var para=document.querySelector('p');

//on accroche un évènement capture au div et au para 
div1.addEventListener('click',messageDiv,true);
para.addEventListener('click',messagePara,true);

//on crée la fonction qui va supprimer l'évènement du div
function messageDiv(event){
	div.preventDefault();
}
function messagePara(){
	alert('La suppression du div n\'empêche pas l\'éxécution du para');
}

</script>*/

/*
<!--Récupérer la position du curseur-->

<div id="position"></div>

<script>
    var position = document.getElementById('position');
  
    document.addEventListener('mousemove', function(e) {
        position.innerHTML = 'Position X : ' + e.clientX + 'px<br />Position Y : ' + e.clientY + 'px';
    });
</script>*/

/*<!--Récupérer l'élément en relation avec un événement de souris-->

<p id="result"></p>

<div id="parent1">
    Parent N°1<br /> Mouseover sur l'enfant
    <div id="child1">Enfant N°1</div>
</div>

<div id="parent2">
    Parent N°2<br /> Mouseout sur l'enfant
    <div id="child2">Enfant N°2</div>
</div>

<script>
    var child1 = document.getElementById('child1'),
        child2 = document.getElementById('child2'),
        result = document.getElementById('result');

    child1.addEventListener('mouseover', function(e) {
        result.innerHTML = "L'élément quitté juste avant que le curseur n'entre sur l'enfant n°1 est : " + e.relatedTarget.id;
    });

    child2.addEventListener('mouseout', function(e) {
        result.innerHTML = "L'élément survolé juste après que le curseur ait quitté l'enfant n°2 est : " + e.relatedTarget.id;
    });
</script>*/

/*<!--Récupérer les touches frappées par l'utilisateur-->

<p>
		<input id="field" type="text" />
	</p>
	
	<table>
		<tr>
			<td>keydown</td>
			<td id="down"></td>
		</tr>
		<tr>
			<td>keypress</td>
			<td id="press"></td>
		</tr>
		<tr>
			<td>keyup</td>
			<td id="up"></td>
		</tr>
	</table>
	
	<script>
		var field = document.getElementById('field'),
			down = document.getElementById('down'),
			press = document.getElementById('press'),
			up = document.getElementById('up');
	
		document.addEventListener('keydown', function(e) {
			down.innerHTML = e.keyCode;
		});
	
		document.addEventListener('keypress', function(e) {
			press.innerHTML = e.keyCode;
		});
	
		document.addEventListener('keyup', function(e) {
			up.innerHTML = e.keyCode;
		});
	</script>*/

/*OUVRIR MODIFIER FERMER UNE FENETRE - OBJET WINDOW
	<!DOCTYPE>
<html>
<head>
	
	<meta charset="utf-8">
	<meta name="description" value="Exercice openclassroom sur le Javascript">
	<meta name="author" value="Karen Derrien">
	<link rel="stylesheet" type="text/css" href="style.css" />
	<title>Browser Object Model</title>
	<style></style>
</head>

<body>
<h1>LE BOM</h1>

<button id='ouvrir'>Ouvrir une nouvelle fenêtre</button>
<button id='modifier'>Redimensionner la fenêtre</button>
<button id='fermer'>Fermer la fenêtre</button>

<script>
//on accède aux boutons
var ouvrir=document.getElementById('ouvrir');
var modifier=document.getElementById('modifier');
var fermer=document.getElementById('fermer');
var fenetre='';

//on accroche un évènement aux boutons
ouvrir.addEventListener('click', fOuvrir);
modifier.addEventListener('click', fModifier);
fermer.addEventListener('click', fFermer);

//on crée les fonctions
function fOuvrir(){
	fenetre=window.open('https://lamaisonduweb56.net', '_blank', 'width=500');
}

function fModifier(){
	fenetre.resizeTo(300,300);
}

function fFermer(){
	fenetre.close();
}
</script>*/

/* OBJET HISTORY - Naviguer dans l'historique
<h1>LE BOM</h1>

<button id='precedent'>Charger la page précédente</button>
<button id='suivant'>Charger la page suivante</button>
<button id='specifique'>3 pages avant</button>

<p></p>

<script>
//on accède aux boutons
var para = document.querySelector('p');
var precedent=document.getElementById('precedent');
var suivant=document.getElementById('suivant');
var specifique=document.getElementById('specifique');


//on accroche un évènement aux boutons
precedent.addEventListener('click', prec);
suivant.addEventListener('click', suiv);
specifique.addEventListener('click', spec);

//on crée les fonctions
function prec(){
	history.back();
}

function suiv(){
	history.forward();
}

function spec(){
	history.go(-3);
}

var histo=history.length;

para.innerHTML='Nombre d\'URL : '+ histo;
</script>*/

/*<h1>Expressions régulières et JavaScript</h1>
<p>On apprend à utiliser les regex en JavaScript</p>
<p id="reg"></p>

<script>
//On accède au texte de notre paragraphe
var rec = document.querySelector('p').textContent;

//On veut savoir si notre paragraphe contient au moins un x
var r1 = /x+/;
var res1 = r1.test(rec);

//On cherche "e" ou "end" on utilise les () pour fair porter un "?" sur nd
var r2 = /e(nd)?/g;
var res2 = rec.match(r2);

//Notre paragraphe fini par un "e" ?
var r3 = /e$/i;
var res3 = r3.test(rec);

//Notre paragraphe contient il "pp"
var r4 = /p{2}/;
var res4 = r4.test(rec);

//y a t il l'expression Java suivi de Script
var r5 = /Java(?=Script)/;
var res5 = r5.test(rec);

var resultat = document.getElementById('reg');
resultat.innerHTML = 'Résultat 1 : ' + res1 +
	'<br>Résultat 2 : '+ res2 +
	'<br>Résultat 3 : '+ res3 +
	'<br>Résultat 4 : '+ res4 + 
	'<br>Résultat 5 : '+ res5;

</script>*/

/*<h1>Formulaires et JavaScript</h1>

<form method="POST" action="traitement.php">
	<label for="prenom">Entrez votre prénom : </label>
	<input type="text" name="prenom" id="prenom" required max-length="30">
	<span id="misPrenom"></span><br>

	<label for="mail">Entrez votre email : </label>
	<input type="email" name="mail" id="mail" required ><br>

	<label for="tel">Entrez votre téléphone</label>
	<input type="tel" name="tel" id="tel"><br><br>

	<input type="submit" value="valider" id="bouton-envoi">
</form>

<script>
 var formValid = document.getElementById("bouton-envoi");
 var prenom = document.getElementById("prenom");
 var missPrenom = document.getElementById("missPrenom");
 var prenomValid=/^[a-zA-ZéèêîïÉÈÊÇ][a-zéèêëîï]+([-'\s][a-zA-ZéèêîïÉÈÊÇ][a-zéèêëîï]+)?/;

 formValid.addEventListener("click",f_valid);

 function f_valid(e){
	 //si le champ est vide
	 if (prenom.validity.valueMissing){
		 event.defaultPrevented();
		 missPrenom.textContent="Prénom manquant";
		 missPrenom.style.color="red";
	 }else if (prenomValid.test(prenom.value)){
		 event.preventDefault();
		 missPrenom.textContent="Format incorrect";
		 missPrenom.style.color="orange";
	 }else{
	 }
	 }


</script>

*/
/* CANVAS
<!DOCTYPE>
<html>
<head>
	
	<meta charset="utf-8">
	<meta name="description" value="Exercice openclassroom sur le Javascript">
	<meta name="author" value="Karen Derrien">
	<link rel="stylesheet" type="text/css" href="style.css" />
	<title>CANVAS ET LES RECTANGLES</title>
	<style>
		body{
			margin: 0px;
			padding: 0px;
		}
		#canvas1{
			border:2px solid blue;
		}
	</style>
</head>

<body>
<canvas id="canvas1" width="500" height="250"></canvas>

<script>
	var canvas = document.getElementById('canvas1');
	var contexte = canvas.getContext('2d');

	//Rectange plein
	contexte.fillStyle = 'RGBa(50,200,15,0.5)';
	contexte.fillRect(50,25,100,50);

	//Rectangle vide
	contexte.lineWidth="3";
	contexte.strokeStyle='#OAA';
	contexte.strokeRect(125,50,300,100);

	//dessiner une ligne ou plusieurs
	//Coordonnées du premier point de notre triangle rectangle
	contexte.moveTo(50,50);

	//Coordonnées des lignes de notre triangle rectangle
	contexte.lineTo(300,150);
	contexte.lineTo(50,150);
	contexte.lineTo(50,50);

	//Réalisation du tracé entre nos deux points
	contexte.stroke();

	//Plusieurs lignes différentes avec beginPath
	//premier tracé
	contexte.beginPath();
	contexte.lineWidth='5';
	contexte.strokeStyle='#48C';
	contexte.moveTo(100,50);
	contexte.lineTo(300,150);
	contexte.stroke();

	//deuxième tracé
	contexte.beginPath();
	contexte.lineWidth='10';
	contexte.strokeStyle='#C24';
	contexte.moveTo(300,160);
	contexte.lineTo(100,160);
	contexte.stroke();

	//troisième tracé
	contexte.beginPath();
	contexte.lineWidth='5';
	contexte.strokeStyle='#A4A';
	contexte.moveTo(100,150);
	contexte.lineTo(300,50);
	contexte.stroke();

	//premier demi_cercle vide
	contexte.beginPath();
	contexte.lineWidth='5';
	contexte.strokeStyle='#4C8';
	contexte.arc(75,100,50,0,Math.PI);
	contexte.stroke();

	//cercle complet vide
	contexte.beginPath();
	contexte.lineWidth='5';
	contexte.strokeStyle='#A4A';
	contexte.arc(200,100,50,0,2*Math.PI);
	contexte.stroke();

	//demi-cercle supérieur
	contexte.beginPath();
	contexte.lineWidth='5';
	contexte.strokeStyle='#48C';
	contexte.arc(325,100,50,Math.PI,2*Math.PI);
	contexte.stroke();

	//premier demi_cercle plei
	contexte.beginPath();
	contexte.lineWidth='5';
	contexte.fillStyle='#4C8';
	contexte.arc(75,100,50,0,Math.PI);
	contexte.fill();

	//cercle complet plein
	contexte.beginPath();
	contexte.lineWidth='5';
	contexte.fillStyle='#A4A';
	contexte.arc(200,100,50,0,2*Math.PI);
	contexte.fill();

	//demi-cercle supérieur plein
	contexte.beginPath();
	contexte.lineWidth='5';
	contexte.fillStyle='#48C';
	contexte.arc(325,100,50,Math.PI,2*Math.PI);
	contexte.fill();

	//création du dégradé lineaire
	var lineaire = contexte.createLinearGradient(100,50,300,150);

	//création des couleurs du vert vers le violet en passant par le bleu
	lineaire.addColorStop(0,'#4C8');
	lineaire.addColorStop(0.5,'#48C');
	lineaire.addColorStop(1,'#A4A');

	//création du rectangle avec le dégradé
	contexte.fillStyle = lineaire;
	contexte.fillRect(100,50,200,100);

	//creation du dégradé radial
	var radial=contexte.createRadialGradient(200,100,20,200,100,75);

	//creation des couleurs du vert au violet en passant par le bleu
	radial.addColorStop(0,'#4C8');
	radial.addColorStop(0.25,'#48C');
	radial.addColorStop(1,'#A4A');

	//creation du cercle
	contexte.beginPath();
	contexte.fillStyle = radial;
	contexte.arc(200,100,75,0,2*Math.PI);
	contexte.fill();

</script>

<footer>Copyright 2018</footer>	
	
</body>
</html>
*/
<<<<<<< HEAD
﻿/*demander le nom
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

﻿/*demander le nom
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
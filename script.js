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


affichage = document.getElementById("affichage");
buttonReset = document.getElementById("reset");

let tmpVerif;


// Reset de la calculette

buttonReset.addEventListener('click', function(){

    window.location.reload();
});

// fonction test verif dernier character string

function verifLast(x)
{
  
     return x.charAt(x.length-1);
    
   
}




// Creation des tableaux qui contienne les ID button

let tableauChiffre = ['button0', 'button1', 'button2', 'button3', 'button4', 
'button5', 'button6', 'button7', 'button8','button9'];

let tableauOperateur = ['buttonPoint','buttonEgal',
'buttonDivision','buttonMultiplication','buttonSoustraction','buttonAddition'];

let tableauSigne = [',','=','/','*','-','+'];


let buttonChiffre = [];
let buttonOperateur = [];






// Initialisation des boutons chiffre

for (let i=0; i < tableauChiffre.length; i++)
{

 buttonChiffre[i]= document.getElementById(tableauChiffre[i]);


}



// Initialisation  des boutons operateur

for (let i=0; i < tableauOperateur.length; i++)
{

 buttonOperateur[i]= document.getElementById(tableauOperateur[i]);


}


let ecranTexteValue = "";

let tempValueStr = "0";

let value1=0;
let value2;
let value3;
let resultat;
let signeOperation;
let boucleEgalite = false;
let addition = false;
let soustraction = false;
let nombreNegatif = false;
// addEventListener des boutons chiffre


for (let i= 0; i< tableauChiffre.length; i++)
{
    buttonChiffre[i].addEventListener('click', function(){

        

        if(addition == true)
        {
        ecranTexteValue = i;
        tempValueStr = i;
        

        addition = false;

        affichage.innerHTML = ecranTexteValue;
        document.getElementById("operation").innerHTML = tempValueStr;
       
        // On repasse les variables de nombre a string
        ecranTexteValue = ecranTexteValue + "";
        tempValueStr = tempValueStr + "";
        }
        else
        { 
            ecranTexteValue += i;
            tempValueStr += i;

     

            document.getElementById("operation").innerHTML = tempValueStr;
            document.getElementById("afficheValue1").innerHTML = value1;
            document.getElementById("afficheValue2").innerHTML = value2;
            affichage.innerHTML = ecranTexteValue; //Affichage du resultat

        } 



    
});
}




/////////////////////// virgule //////////////////////

buttonOperateur[0].addEventListener('click', function(){


     // On verifie le dernier charactere de l'ecran

     tmpVerif= verifLast(ecranTexteValue);
    

     //Si le dernier charactere est different de + et different de null
 
     if(tmpVerif != ",")
     {

         if(ecranTexteValue.includes(","))
         {
            
         }
         else
         {
            ecranTexteValue += ",";               //On ajoute un signe a l'écran


            tempValueStr += ".";
        
        console.log("valeur : " + ecranTexteValue);
    
        document.getElementById("operation").innerHTML = tempValueStr;
        document.getElementById("afficheValue1").innerHTML = value1;
        document.getElementById("afficheValue2").innerHTML = value2;
        affichage.innerHTML = ecranTexteValue; //Affichage du resultat
         }
         
     }



});




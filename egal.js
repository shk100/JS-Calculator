

/////////////////////////// Egal ////////////////////////////////

buttonOperateur[1].addEventListener('click', function(){

    
   

    ///////////// gestion du mode ADDITION /////////////
    
        if(signeOperation == "+" & boucleEgalite == true)
        {
            value2 = parseFloat(value2);
    
            resultat += value2;    
    
            ecranTexteValue = resultat;  // La variable de l'ecran prend le resultat
    
        
    
            console.log(boucleEgalite);
            document.getElementById("operation").innerHTML = tempValueStr;
            document.getElementById("afficheValue1").innerHTML = value1;
            document.getElementById("afficheValue2").innerHTML = value2;
            affichage.innerHTML = ecranTexteValue; //Affichage du resultat
        }
        else if(signeOperation == "+" & boucleEgalite == false)  // Verification du signe de l'operation et on effectue l'opperation
        {
            
            // On donne a value2 la valeur de temp apres une conversion en float
    
            value2 = parseFloat(tempValueStr);   
    
            resultat = value1 + value2;    
            ecranTexteValue = resultat;  // La variable de l'ecran prend le resultat
            
            value1 = resultat;
            boucleEgalite = true;
    
    
            
            // On repasse les variables de nombre a string
            ecranTexteValue = ecranTexteValue + "";
            tempValueStr = tempValueStr + "";
    
            console.log(boucleEgalite);
    
    
        document.getElementById("operation").innerHTML = tempValueStr;
        document.getElementById("afficheValue1").innerHTML = value1;
        document.getElementById("afficheValue2").innerHTML = value2;
        affichage.innerHTML = ecranTexteValue; //Affichage du resultat
        }
    
    
    
    
    
    ///////////// gestion du mode SOUSTRACTION /////////////
    
        if(signeOperation == "-" & boucleEgalite == true)
        {
            value2 = parseFloat(value2);
    
            resultat -= value2;    
    
            ecranTexteValue = resultat;  // La variable de l'ecran prend le resultat
    
        
    
            console.log(boucleEgalite);
            document.getElementById("operation").innerHTML = tempValueStr;
            document.getElementById("afficheValue1").innerHTML = value1;
            document.getElementById("afficheValue2").innerHTML = value2;
            affichage.innerHTML = ecranTexteValue; //Affichage du resultat
        }
        else if(signeOperation == "-" & boucleEgalite == false)  // Verification du signe de l'operation et on effectue l'opperation
        {
            
            // On donne a value2 la valeur de temp apres une conversion en float
    
            value2 = parseFloat(tempValueStr);   
    
            resultat = value1 - value2;    
            ecranTexteValue = resultat;  // La variable de l'ecran prend le resultat
            
            value1 = resultat;
            boucleEgalite = true;
    
    
            
            // On repasse les variables de nombre a string
            ecranTexteValue = ecranTexteValue + "";
            tempValueStr = tempValueStr + "";
    
            console.log(boucleEgalite);
    
    
        document.getElementById("operation").innerHTML = tempValueStr;
        document.getElementById("afficheValue1").innerHTML = value1;
        document.getElementById("afficheValue2").innerHTML = value2;
        affichage.innerHTML = ecranTexteValue; //Affichage du resultat
        }
    
    




         ///////////// gestion du mode MULTIPLICATION /////////////
    
         if(signeOperation == "*" & boucleEgalite == true)
         {
             value2 = parseFloat(value2);
     
             resultat *= value2;    
     
             ecranTexteValue = resultat;  // La variable de l'ecran prend le resultat
     
         
     
             console.log(boucleEgalite);
             document.getElementById("operation").innerHTML = tempValueStr;
             document.getElementById("afficheValue1").innerHTML = value1;
             document.getElementById("afficheValue2").innerHTML = value2;
             affichage.innerHTML = ecranTexteValue; //Affichage du resultat
         }
         else if(signeOperation == "*" & boucleEgalite == false)  // Verification du signe de l'operation et on effectue l'opperation
         {
             
             // On donne a value2 la valeur de temp apres une conversion en float
     
             value2 = parseFloat(tempValueStr);   
     
             resultat = value1 * value2;    
             ecranTexteValue = resultat;  // La variable de l'ecran prend le resultat
             
             value1 = resultat;
             boucleEgalite = true;
     
     
             
             // On repasse les variables de nombre a string
             ecranTexteValue = ecranTexteValue + "";
             tempValueStr = tempValueStr + "";
     
             console.log(boucleEgalite);
     
     
         document.getElementById("operation").innerHTML = tempValueStr;
         document.getElementById("afficheValue1").innerHTML = value1;
         document.getElementById("afficheValue2").innerHTML = value2;
         affichage.innerHTML = ecranTexteValue; //Affichage du resultat
         }







             ///////////// gestion du mode DIVISION /////////////
    
             if(signeOperation == "/" & boucleEgalite == true)
             {
                 value2 = parseFloat(value2);
         
                 resultat /= value2;    
         
                 ecranTexteValue = resultat;  // La variable de l'ecran prend le resultat
         
             
         
                 console.log(boucleEgalite);
                 document.getElementById("operation").innerHTML = tempValueStr;
                 document.getElementById("afficheValue1").innerHTML = value1;
                 document.getElementById("afficheValue2").innerHTML = value2;
                 affichage.innerHTML = ecranTexteValue; //Affichage du resultat
             }
             else if(signeOperation == "/" & boucleEgalite == false)  // Verification du signe de l'operation et on effectue l'opperation
             {
                 
                 // On donne a value2 la valeur de temp apres une conversion en float
         
                 value2 = parseFloat(tempValueStr);   
         
                 resultat = value1 / value2;    
                 ecranTexteValue = resultat;  // La variable de l'ecran prend le resultat
                 
                 value1 = resultat;
                 boucleEgalite = true;
         
         
                 
                 // On repasse les variables de nombre a string
                 ecranTexteValue = ecranTexteValue + "";
                 tempValueStr = tempValueStr + "";
         
                 console.log(boucleEgalite);
         
         
             document.getElementById("operation").innerHTML = tempValueStr;
             document.getElementById("afficheValue1").innerHTML = value1;
             document.getElementById("afficheValue2").innerHTML = value2;
             affichage.innerHTML = ecranTexteValue; //Affichage du resultat
             }
     
        
    
       
        
    });
    
    
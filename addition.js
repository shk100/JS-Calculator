/////////////////////////// Addition ////////////////////////////////

buttonOperateur[5].addEventListener('click', function(){

    
    // On repasse les variables de nombre a string
    ecranTexteValue = ecranTexteValue + "";
    tempValueStr = tempValueStr + "";
   
      // On verifie le dernier charactere de l'ecran
       console.log(typeof ecranTexteValue);
       tmpVerif= verifLast(ecranTexteValue);
       
   
       //Si le dernier charactere est different de + et different de null
   
       if(tmpVerif != "+" & tmpVerif != "" & boucleEgalite ==false)
       {








////////////////////// Si la dernier operation qui n'a pas ete affiché avec egal est a 
   


                ////// Soustraction

               if(signeOperation == "-")
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


               ////// Addition



               if(signeOperation == "+")
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




                ////// Multiplication



                if(signeOperation == "*")
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




                ////// Division



                if(signeOperation == "/")
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
                


            



               else
               {
               ecranTexteValue += "+";               //On ajoute un signe a l'écran
   
   
               
               
                       if(nombreNegatif)   // Si un nombre négatif a ete rentré alors execute 
                       {
                           value1 = 0 - parseFloat(tempValueStr);
                           nombreNegatif = false;
   
                           affichage.innerHTML = ecranTexteValue;  //On affiche sur l'ecran le +
   
                           addition = true;                       // On passe le mode addition en true
           
                           tempValueStr = "0"               // Reset de la variable temp
           
                           signeOperation = "+";         // On prepare le signe pour le resultat
           
                       }
                       else   // Si ce n'est pas un nombre négatif 
                       {
                       // On enregistre le contenu de la variable temporaire apres une conversion en float
                       value1 = parseFloat(tempValueStr);    
                       
                       
                       affichage.innerHTML = ecranTexteValue;  //On affiche sur l'ecran le +
   
                       addition = true;                       // On passe le mode addition en true
   
                       tempValueStr = "0"               // Reset de la variable temp
   
                       signeOperation = "+";         // On prepare le signe pour le resultat
   
                       }
                       
                   // Verification de la variable temporaire
                   document.getElementById("operation").innerHTML = tempValueStr;
                   document.getElementById("afficheValue1").innerHTML = value1;
                   document.getElementById("afficheValue2").innerHTML = value2;
                   affichage.innerHTML = ecranTexteValue; //Affichage du resultat
               }
       }
   
       if(tmpVerif != "+" & tmpVerif != "" & boucleEgalite == true)
       {
   
           boucleEgalite = false;
   
   
   
           // On enregistre le contenu de la variable temporaire apres une conversion en float
           value1 = resultat;    
           
           
           affichage.innerHTML = ecranTexteValue;  //On affiche sur l'ecran le +
   
           console.log("Value1 = " +value1);
   
           addition = true;                       // On passe le mode addition en true
   
           tempValueStr = "0"               // Reset de la variable temp
   
           signeOperation = "+";         // On prepare le signe pour le resultat
   
           console.log(typeof ecranTexteValue);       // Verif du type de la variable
   
           
               // Verification de la variable temporaire
               document.getElementById("operation").innerHTML = tempValueStr;
               document.getElementById("afficheValue1").innerHTML = value1;
               document.getElementById("afficheValue2").innerHTML = value2;
               affichage.innerHTML = ecranTexteValue; //Affichage du resultat
       }
   
   
   
   
   });
   
   